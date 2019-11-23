<template>
  <div
    :class="[
      'product-list',
      typeof perRow === 'number' ? 'product-list-grid' : 'product-list-hori'
    ]"
    :style="typeof perRow === 'number' ? {
      'grid-template-columns': 'repeat('+perRow+', auto)'
    } : {}"
  >
    
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  display: grid;
}
</style>

<script>
export default {
  props: ['perRow'],
  data() {
    return {
      products: (() => {
        let res = []

        for (let i = 0; i < 100; i++)
          res.push({
            img: '',
            title: 'กระทิงแดง',
            subtitle: '15 บาท / ขวด'
          })

        return res
      })()
    }
  }
}
</script>
