import { SITE_URL } from "@/data/constants";

export default function sitemap() {
  return [{ url: `${SITE_URL}/`, lastModified: new Date(), priority: 1.0 }];
}
