<template>
  <div class="post" @click="$router.push(`/post/${post.post}`)">
    <img :src=post.image alt="post-image" class="post-image" />
    <div class="post-content">
      <h3 class="post-title">{{ post.title }}</h3>
      <div class="post-tag">{{ post.tag }}</div>
      <div class="post-date">{{ post.date }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
})
</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  max-width: 368px;
  min-height: 300px;
  background-color: var(--card-color);
  border-radius: 24px;
  cursor: pointer;
}

.post-image {
  width: 100%;
  aspect-ratio: 1 / 0.595;
  border-radius: 24px 24px 0 0;
  object-fit: cover;
  object-position: center center;

  @media (max-width: 376px) {
    aspect-ratio: 1 / 0.638;
  }
}

.post-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 24px 32px 32px;
}

.post-title {
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 22px;
  line-height: 32px;
  color: var(--title-color);
}

.post-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 14px;
  margin-bottom: 12px;
  border: 0;
  border-radius: 100px;
  color: var(--background-color);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  background-color: var(--text-color);
}

.post-date {
  display: flex;
  flex-shrink: 0;
  width: 100%;
  font-size: 14px;
}
</style>
