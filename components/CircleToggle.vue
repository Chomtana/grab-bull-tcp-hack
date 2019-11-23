<template>
  <div :class="['circle-toggle', active ? 'active' : '']" @click="toggle">
    {{text}}
  </div>
</template>

<style lang="scss" scoped>
  .circle-toggle {
    border-radius: 50%;

    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    width: 36px;
    height: 36px;

    &.active {
      background-color: white;
      color: #303030;
    }
  }
</style>

<script>
export default {
  props: ["text"],
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
    }
  }
}
</script>