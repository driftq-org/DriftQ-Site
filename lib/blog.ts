import fs from "node:fs";
import path from "node:path";

export const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function blogPathFromSlug(slug: string) {
  return path.join(BLOG_DIR, `${slug}.mdx`);
}

export function readBlogSource(slug: string) {
  const filePath = blogPathFromSlug(slug);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf-8");
}

export function listAllBlogSlugs() {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs.readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx") && !entry.name.startsWith("_"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""))
    .sort((a, b) => a.localeCompare(b));
}
