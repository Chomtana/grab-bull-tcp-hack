<template>
  <div class="header-with-back">
    <nuxt-link to="/" v-if="backtohome" style="color: white;">←</nuxt-link>
    <div @click="$router.back();" v-if="!backtohome">←</div>
    <div><slot></slot></div>
  </div>
</template>

<style lang="scss" scoped>
  .header-with-back {
    background-color: black;
    display: flex;
    justify-content: space-between;

    font-size: 28pt;
    font-weight: bold;

    padding: 16px;

    margin-bottom: 16px;

    margin-left: -12px;
    margin-right: -12px;
    margin-top: -16px;
  }
</style>

<script>
export default {
  props: ["backtohome"]
}
</script>