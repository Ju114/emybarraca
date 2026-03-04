import type { Metadata } from "next";
import { SITE_URL, siteConfig } from "@/data/site";

export function getCanonical(pathname: string) {
  return `${SITE_URL}${pathname}`;
}

type BuildMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  pathname,
  image,
}: BuildMetadataInput): Metadata {
  const canonical = getCanonical(pathname);
  const ogImage = image ?? siteConfig.seo.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "es_ES",
      type: "website",
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
