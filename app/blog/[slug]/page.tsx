import Link from "next/link";
import { blogMdxComponents } from "@/components/blog/BlogMDXComponents";
import { compileMDX } from "next-mdx-remote/rsc";
import { listAllBlogSlugs, readBlogSource } from "@/lib/blog";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export const generateStaticParams = () => {
  return listAllBlogSlugs().map((slug) => ({ slug }));
};

type BlogFrontmatter = {
  title?: string;
  description?: string;
  date?: string;
};

const formatDate = (value?: string) => {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
};

const estimateReadTime = (source: string) => {
  const words = source
    .replace(/^---[\s\S]*?---/, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 225));
};

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const source = readBlogSource(params.slug);
  if (!source) {
    return notFound();
  }

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: blogMdxComponents
  });

  const publishedOn = formatDate(frontmatter.date);
  const readTimeMinutes = estimateReadTime(source);

  return (
    <main className="relative">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <article className="overflow-hidden rounded-[32px] border border-white/10 bg-[#070b14]/95 shadow-soft backdrop-blur">
          <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(10,17,30,0.95),rgba(7,11,20,0.78))] px-6 py-10 sm:px-10 sm:py-14">
            <div className="mx-auto w-full max-w-3xl">
              <Link
                href="/blog"
                className="text-sm font-semibold text-white/50 transition-colors hover:text-emerald-200"
              >
                ← Back to blog
              </Link>

              <div className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
                Blog
              </div>

              {
                frontmatter.title ? (
                  <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {frontmatter.title}
                  </h1>
                ) : null
              }

              {
                frontmatter.description ? (
                  <p className="mt-5 max-w-3xl text-xl leading-9 text-white/68">
                    {frontmatter.description}
                  </p>
                ) : null
              }

              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/50">
                {publishedOn ? <span>Published {publishedOn}</span> : null}
                <span>{readTimeMinutes} min read</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-10 sm:px-10 sm:py-12">
            <div className="mx-auto max-w-3xl">
              {content}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default BlogPostPage;
