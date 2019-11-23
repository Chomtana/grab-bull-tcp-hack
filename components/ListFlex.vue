<template>
  <div
    :class="[
      'list-flex',
      !isNaN(parseInt(perRow)) ? 'list-flex-grid' : 'list-flex-hori'
    ]"
    :style="!isNaN(parseInt(perRow)) ? {
      'grid-template-columns': 'repeat('+perRow+', auto)',
      'grid-column-gap': (typeof gap !== 'undefined' ? gap : 16)+'px',
      'grid-row-gap': (typeof gap !== 'undefined' ? gap : 16)+'px',
    } : {}"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.list-flex-grid {
  display: grid;
}

.list-flex-hori {
  white-space: nowrap;
  overflow-x: auto;

  & > * {
    display: inline-block;
  }
}
</style>

<script>
export default {
  props: ['perRow', 'gap'],
  data() {
    return {

    }
  }
}
</script>
