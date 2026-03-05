import type { SocialPlatform } from "@/data/site";

type SocialIconName = SocialPlatform | "whatsapp";

type SocialIconProps = {
  name: SocialIconName;
  className?: string;
};

export function SocialIcon({ name, className }: SocialIconProps) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "youtube":
      return (
        <svg {...props}>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.75 15.5v-7L16 12l-6.25 3.5Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...props}>
          <path d="M13.5 21v-7h2.3l.35-2.73H13.5V9.53c0-.8.22-1.34 1.36-1.34h1.45V5.75c-.25-.03-1.11-.1-2.11-.1-2.09 0-3.52 1.27-3.52 3.6v2.02H8.3V14h2.38v7h2.82Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm4.9-3.15a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...props}>
          <path d="M14.5 3c.6 2 1.8 3.2 3.8 3.8v2.7a8.1 8.1 0 0 1-3.8-1.1v6.1a5.5 5.5 0 1 1-4.7-5.4v2.8a2.7 2.7 0 1 0 1.9 2.6V3h2.8Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...props}>
          <path d="M20.5 3.5A11 11 0 0 0 3.6 17.2L2 22l4.9-1.5A11 11 0 1 0 20.5 3.5Zm-8.5 17a8.9 8.9 0 0 1-4.5-1.2l-.3-.2-2.9.9.9-2.8-.2-.3a9 9 0 1 1 7 3.6Zm4.9-6.7c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.8.2-.2.3-.8.9-1 .9-.2 0-.4-.1-.7-.3-1.9-1-3.1-2.8-3.3-3.1-.2-.3 0-.5.2-.7.2-.2.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.1-1.4-.1-.2-.3-.3-.6-.5Z" />
        </svg>
      );
    default:
      return null;
  }
}
