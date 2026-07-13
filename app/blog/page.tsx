import SiteNav from "@/app/components/SiteNav";
import SiteFooter from "@/app/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "Blog — Velvet Concierge Care",
  description: "Guidance and insights for families navigating in-home care in Palm Beach County, Florida.",
};

const articles = [
  {
    slug: "how-to-know-when-your-parent-needs-a-companion",
    date: "July 2026",
    title: "How to Know When Your Parent Needs a Companion at Home",
    excerpt: "It often starts with small things — a missed meal, a quiet phone that used to ring. Here's how to recognize the signs before isolation takes hold.",
  },
  {
    slug: "aging-in-place-vs-assisted-living",
    date: "July 2026",
    title: "Aging in Place vs. Assisted Living: What Families in Palm Beach County Should Know",
    excerpt: "For many families, the choice isn't between safety and independence — it's about finding the right support to have both.",
  },
  {
    slug: "what-does-a-homemaker-actually-do",
    date: "July 2026",
    title: "What Does a Homemaker Actually Do?",
    excerpt: "Most people picture light cleaning. The reality is much broader — and for many families, far more valuable than they expected.",
  },
  {
    slug: "how-to-prepare-your-home-after-surgery",
    date: "July 2026",
    title: "How to Prepare Your Home After Surgery",
    excerpt: "The hospital sends you home with discharge papers. What they don't always tell you is how much the first two weeks actually matter.",
  },
  {
    slug: "what-to-look-for-when-hiring-in-home-care",
    date: "July 2026",
    title: "What to Look for When Hiring In-Home Care",
    excerpt: "Not all in-home care is created equal. Here are the questions every family should ask before welcoming someone into their home.",
  },
];

export default function BlogPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="pageHero">
          <p className="eyebrow">From the Desk of Wendy Bien-Aime, RN</p>
          <h1>Guidance for families<br /><em>navigating care at home.</em></h1>
          <p>Practical insights to help you make confident decisions for the people you love.</p>
        </section>

        <section className="blogList">
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="blogCard">
              <span className="blogDate">{article.date}</span>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <span className="blogReadMore">Read Article →</span>
            </Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
