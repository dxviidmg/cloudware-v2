import { SITE_URL } from "@/data/constants";

export default function sitemap() {
  return [{ url: `${SITE_URL}/`, priority: 1.0 }];
}
