import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { listAllBlogSlugs, readBlogSource } from "@/lib/blog";

type BlogFrontmatter = {
  title?: string;
  description?: string;
  date?: string;
};

const formatDate = (value?: string) => {
  if (!value) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
};

const BlogIndexPage = async () => {
  const posts = await Promise.all(
    listAllBlogSlugs().map(async (slug) => {
      const source = readBlogSource(slug);
      if (!source) {
        return null;
      }

      const { frontmatter } = await compileMDX<BlogFrontmatter>({
        source,
        options: { parseFrontmatter: true }
      });

      return {
        slug,
        title: frontmatter.title ?? slug,
        description: frontmatter.description ?? "New DriftQ-Core article.",
        date: frontmatter.date
      };
    })
  );

  const items = posts
    .filter((post): post is NonNullable<typeof post> => Boolean(post))
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

  return (
    <main className="relative">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
            DriftQ-Core articles, release notes, and build logs
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Deep dives, release notes, and build notes for DriftQ-Core.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5">
          {
            items.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur transition-colors hover:border-emerald-300/30 hover:bg-white/[0.05]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200/90">
                  {formatDate(post.date)}
                </div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/70">
                  {post.description}
                </p>
                <div className="mt-5 text-sm font-semibold text-emerald-200">
                  Read article →
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </main>
  );
};

export default BlogIndexPage;
