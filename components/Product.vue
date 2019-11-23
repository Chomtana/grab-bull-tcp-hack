<template>
  <div
    class="mx-auto product-container px-2 py-2"
    style="width: 100%; margin: 16px; border-radius: 15px; background-color: white;"
  >
    <div class="product-img">
      <img :src="img">
    </div>
    <v-list-item three-line v-if="title || subtitle">
      <v-list-item-content>
        <v-list-item-title class="headline mb-1" style="color: black;">{{title}}</v-list-item-title>
        <v-list-item-subtitle v-if="subtitle" style="color: grey;">
          <div style="display: flex; justify-content: space-between;">
            <div>{{subtitle}}</div>
            <div>{{subtitle_right || ""}}</div>
          </div>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>


<style lang="scss" scoped>
  .product-container {
    border-radius: 20px;
    background-color: white;

    display: grid;
    grid-template-columns: 30% 70%;

    color: black;

    -webkit-box-shadow: 3px 3px 15px -2px rgba(68,68,68,0.54);
    -moz-box-shadow: 3px 3px 15px -2px rgba(68,68,68,0.54);
    box-shadow: 3px 3px 15px -2px rgba(68,68,68,0.54);

    .product-img {
      border-right: solid 2px black;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
</style>

<script>
export default {
  props: ["img", "title", "subtitle", "subtitle_right"]
}
</script>