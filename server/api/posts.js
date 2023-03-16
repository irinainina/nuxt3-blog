import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const database_id = process.env.NOTION_DATABASE_ID;

let payload = [];

function normalizeDataItem(item) {
  const { id, title, tag, image, post, date } = item.properties;
  return {
    id: id.number,
    title: title.title[0].plain_text,
    tag: tag.rich_text[0].plain_text,
    image: image.rich_text[0].plain_text,
    post: post.rich_text[0].plain_text,
    date: new Date(date.date.start).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

const byField = (field) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
};

async function fetchPosts() {
  const data = await notion.databases.query({ database_id: database_id });
  payload = data.results
    .map((item) => normalizeDataItem(item))
    .sort(byField("id"));
}

fetchPosts();

export default defineEventHandler(() => payload);
