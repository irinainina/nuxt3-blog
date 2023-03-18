<template>
  <div class="post-container" v-if="posts">
    <div class="post-tag">{{ posts.tag }}</div>
    <h1 class="post-title">{{ posts.title }}</h1>
    <span class="post-date">{{ posts.date }}</span>
    <img :src=posts.image alt="image" class="post-img"> 
    <NotionRenderer v-if="data" :blockMap="data" fullPage prism />
  </div>
</template>

<script setup>
const route = useRoute();
const { $notion } = useNuxtApp();
const { data } = await useAsyncData("notion", () => $notion.getPageBlocks(route.params.id));

const { data: posts } = useAsyncData('posts', async () => {
  const response = await $fetch('/api/posts');
  return response.filter(post => post.post === route.params.id)[0];
});
</script>

<style lang="scss" scoped>
.post-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 972px;
  padding: 64px 16px 0;
  margin: 0 auto;

  @media (max-width: 376px) {
    padding: 48px 16px 0;
  }
}

.post-tag {
  color: var(--button-color);
  padding-bottom: 4px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.post-title {
  margin-bottom: 24px;
  font-family: 'Lora';
  font-weight: 500;
  font-size: 64px;
  line-height: 1.1;
  text-align: center;
  color: var(--title-color);

  @media (max-width: 768px) {
    font-size: 56px;
  }

  @media (max-width: 540px) {
    font-size: 44px;
  }

  @media (max-width: 376px) {
    padding-top: 48px;
    margin-bottom: 40px;
    font-size: 40px;
  }
}

.post-date {
  margin-bottom: 40px;
}

.post-img {
  width: 100%;
  margin-bottom: 40px;
  aspect-ratio: 17 / 8;
  object-fit: cover;
  object-position: center;
  border-radius: 40px;

  @media (max-width: 376px) {
    border-radius: 32px;
  }
}
</style>
