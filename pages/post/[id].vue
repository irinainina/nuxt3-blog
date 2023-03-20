<template>
  <div class="post-container" v-if="posts">
    <PostPage :posts="posts"/>
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
</style>
