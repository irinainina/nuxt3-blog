<template>
  <PostFilter :tags="tags" :state="state" />

  <PostList :posts="posts"/>
</template>

<script setup>
const tags = [
  { name: 'All categories', value: '' },
  { name: 'Get Started', value: 'Get Started' },
  { name: 'Configuration', value: 'Configuration' },
  { name: 'Features', value: 'Features' },
  { name: 'Concepts', value: 'Concepts' },
];

const state = reactive({
  tag_filter: '',
});

const { data: posts } = useAsyncData('posts', async () => {
  const response = await $fetch('/api/posts');
  return response.filter(post => state.tag_filter ? post.tag === state.tag_filter : post);
}, { watch: [state] });

</script>

<style lang="scss" scoped>
</style>
