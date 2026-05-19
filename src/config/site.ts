export const site = {
  name: "Codex Workplace",
  domain: "codexworkplace.com",
  url: import.meta.env.SITE_URL || "https://codexworkplace.com",
  email: "hello@codexworkplace.com",
  description:
    "Codex Workplace is an AI workbench for SaaS teams that need to turn product tasks, launch notes, and content operations into shipped work.",
  launchContext: [
    "Keep AI task briefs, code changes, content drafts, and launch checks in one focused surface.",
    "Turn scattered project notes into short, readable next actions for founders, marketers, and product teams.",
    "Connect generated assets, blog production, deployment checks, and follow-up decisions without losing momentum."
  ]
};

export const navItems = [
  { label: "Command OS", href: "/gateway/" },
  { label: "Docs", href: "/docs/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];
