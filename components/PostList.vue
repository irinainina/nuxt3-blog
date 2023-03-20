<template>
  <div v-if="posts" class="posts">
    <transition-group name="list">
      <PostItem v-for="post in posts" :post="post" :key="post.id" />
    </transition-group>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true
  },
})
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
