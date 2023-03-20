<template>
  <div class="tags">
    <button v-for="tag in tags" class="tag" @click="state.tag_filter = tag.value"
      :class="state.tag_filter === tag.value && 'tag-active'">
      {{ tag.name }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true
  },
  state: {
    type: Object,
    required: true
  },
})
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
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
</style>
