<template>
  <div class="post-tag">{{ posts.tag }}</div>
  <h1 class="post-title">{{ posts.title }}</h1>
  <span class="post-date">{{ posts.date }}</span>
  <img :src=posts.image alt="image" class="post-img">
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Object,
    required: true
  },
})
</script>

<style lang="scss" scoped>
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
