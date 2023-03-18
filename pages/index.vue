<template>
  <div class="tags">
    <button v-for="tag in tags" class="tag"
      @click="setTag(tag.value)"
      :class="state.tag_filter === tag.value && 'tag-active'">
      {{ tag.name }}
    </button>
  </div>
  <div v-if="posts" class="posts">
    <transition-group name="list">
      <div v-for="post in posts" :key="post.id" class="post" @click="$router.push(`/post/${post.post}`)">
        <img :src=post.image alt="post-image" class="post-image" />
        <div class="post-content">
          <h3 class="post-title">{{ post.title }}</h3>
          <div class="post-tag">{{ post.tag }}</div>
          <div class="post-date">{{ post.date }}</div>
        </div>
      </div>
    </transition-group>
  </div>
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

const setTag = (tag) => {
  state.tag_filter = tag;
}

const { data: posts } = useAsyncData('posts', async () => {
  const response = await $fetch('/api/posts');
  return response.filter(post => state.tag_filter ? post.tag === state.tag_filter : post);
}, { watch: [state] });

</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  max-width: 1202px;
  min-height: calc(100vh - 340px);
  padding: 40px 16px 60px;
  margin: 0 auto;
  transition: .5s;

  @media (max-width: 768px) {
    min-height: calc(100vh - 220px);
  }
}

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

.tags {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 748px;
  max-width: 100%;
  padding: 0 16px;
  margin: 120px auto 40px;

  @media (max-width: 768px) {
    margin: 60px auto 20px;
  }
}

.tag {
  display: flex;
  flex-shrink: 0;
  padding: 12px 24px;
  border: 1px solid transparent;
  border-radius: 100px;
  color: var(--title-color);
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  background-color: var(--card-color);
  white-space: nowrap;
  cursor: pointer;
  box-shadow: none;
  transition: 0.3s, color 0.3s;

  &:hover {
    color: #009055;
  }
}

.tag-active {
  color: #ffffff;
  background-color: #00DC82;

  &:hover {
    background-color: #009055;
    color: #ffffff;
  }
}

.list-item {
  transition: all 1.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all .8s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
  z-index: 0;
}

.list-move {
  transition: transform 0.7s ease;
}
</style>
