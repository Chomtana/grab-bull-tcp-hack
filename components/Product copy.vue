<template>
  <v-card
    class="mx-auto product-container"
    max-width="344"
    outlined
    style="margin: 16px;"
  >
    <div class="product-img">
      <img :src="img">
    </div>
    <v-list-item three-line v-if="title || subtitle">
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{title}}</v-list-item-title>
        <v-list-item-subtitle>{{subtitle}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>


<style lang="scss" scoped>
  .product-container {
    .product-img {
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>

<script>
export default {
  props: ["img", "title", "subtitle"]
}
</script>