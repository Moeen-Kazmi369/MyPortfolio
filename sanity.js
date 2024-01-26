import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
const client = createClient({
  projectId: "bt14s30o",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-26",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
