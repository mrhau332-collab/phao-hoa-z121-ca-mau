import { MetadataRoute } from "next";
import { storeInfo } from "@/data/storeInfo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://${storeInfo.domain}/sitemap.xml`,
  };
}
