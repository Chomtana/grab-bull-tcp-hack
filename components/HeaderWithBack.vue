<template>
  <div class="header-with-back">
    <div @click="$router.back()">←</div>
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
  
}
</script>