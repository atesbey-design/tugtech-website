import { Metadata, MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `
                    ${process.env.NEXT_PUBLIC_SITE_URL}/
            `,
      lastModified: new Date(),
    },
  ];
}
