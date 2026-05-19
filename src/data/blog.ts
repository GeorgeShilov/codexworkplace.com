export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  heroImage: string;
  inlineImages: string[];
  referenceUrl?: string;
  articleText: string;
};

export const fallbackPosts: BlogPost[] = [
  {
    slug: "how-to-read-work-signal-in-one-sprint",
    title: "How to read work signal in one sprint",
    description:
      "A practical sprint structure for moving from scattered launch work to a credible next decision.",
    pubDate: "2026-05-16",
    author: "Codex Workplace Studio",
    category: "Work",
    tags: ["SaaS", "Work", "Funnels"],
    featured: true,
    heroImage: "/assets/fal/blog-launch-cover.png",
    inlineImages: ["/assets/fal/blog-launch-inline-1.png", "/assets/fal/blog-launch-inline-2.png"],
    articleText: `
      <p>A fast SaaS launch does not need perfect attribution to make progress. It needs a tight work brief: who should arrive, which promise brought them in, what they should do next, and which signal will change the next experiment.</p>
      <p>Codex Workplace treats the first pass as a command loop. The homepage creates the offer, campaign paths create the movement, and the review layer turns early activity into a short set of decisions.</p>
      <p>The most important constraint is momentum. Keep the first release narrow, make every asset reproducible, deploy quickly, then improve based on the signal that comes back.</p>
    `
  },
  {
    slug: "using-ai-generated-visuals-for-funnel-experiments",
    title: "Using AI-generated visuals for funnel experiments",
    description:
      "How to guide logo, hero, and blog image generation so each campaign gets a distinct visual test.",
    pubDate: "2026-05-15",
    author: "Codex Workplace Studio",
    category: "Brand",
    tags: ["fal.ai", "Branding", "AI Images"],
    heroImage: "/assets/fal/blog-visuals-cover.png",
    inlineImages: ["/assets/fal/blog-visuals-inline-1.png", "/assets/fal/blog-visuals-inline-2.png"],
    articleText: `
      <p>AI-generated images become forgettable when every project asks for the same glossy dashboard, the same neon gradient, and the same abstract shapes. Stronger systems start with a brand profile: category, mood, colors, product metaphors, materials, camera language, and a clear avoid list.</p>
      <p>For logos, the constraint is even tighter. Generate only two or three directions, choose one, and convert it into a practical asset set: favicon, dark mark, light mark, and social preview.</p>
      <p>Campaign imagery needs structure too. Each article should have a cover image and at least two inline visuals that support different parts of the funnel story, rather than repeating the same hero concept three times.</p>
    `
  },
  {
    slug: "cloudflare-railway-and-fal-as-a-simple-launch-stack",
    title: "Cloudflare, Railway, and fal as a simple launch stack",
    description:
      "A clean split for fast SaaS launches: Cloudflare for domains and edge, Railway for backend services, fal.ai for visual assets.",
    pubDate: "2026-05-14",
    author: "Codex Workplace Studio",
    category: "Deployment",
    tags: ["Cloudflare", "Railway", "fal.ai"],
    heroImage: "/assets/fal/blog-stack-cover.png",
    inlineImages: ["/assets/fal/blog-stack-inline-1.png", "/assets/fal/blog-stack-inline-2.png"],
    articleText: `
      <p>The fastest stack is the one with clear ownership boundaries. Cloudflare should own the domain, DNS, SSL, CDN, redirects, and static frontend delivery. Railway should own server processes, APIs, databases, queues, and background workers.</p>
      <p>fal.ai fits beside that stack as the visual generation layer. It can create a small number of logo variants, one hero background, and the required blog image set without slowing the launch down.</p>
      <p>For small SaaS experiments, this is enough infrastructure. The launch team can focus on copy, visuals, product proof, and the next customer conversation instead of inventing a hosting platform.</p>
    `
  }
];
