import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const database_id = process.env.NOTION_DATABASE_ID;

let payload = [];

function normalizeDataItem(item) {
  const { id, title, tag, author, avatar, date, image, post } = item.properties;
  return {
    id: id.number,
    title: title.title[0].plain_text,
    tag: tag.rich_text[0].plain_text,
    author: author.rich_text[0].plain_text,
    avatar: avatar.files[0].file.url,
    image: image.rich_text[0].plain_text,
    post: post.rich_text[0].plain_text,
    date: new Date(date.date.start).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

async function getPosts() {
  const data = await notion.databases.query({
    database_id: database_id,
  });
  return data;
}

const byField = (field) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
};

getPosts().then((data) => {
  payload = data.results
    .map((item) => normalizeDataItem(item))
    .sort(byField("id"));
});

export default defineEventHandler(() => payload);
