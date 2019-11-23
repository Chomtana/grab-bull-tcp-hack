<template>
  <div class="select-location-page">
    <nuxt-link to="/">
      <div class="select-btn">
        Select
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.select-location-page {
  width: 100%;
  height: 100%;

  background-image: url('https://manleylanddesign.com/wp-content/uploads/2017/05/google-placeholder.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .select-btn {
    position: fixed;
    bottom: 24px;

    margin: 16px;
    padding: 8px;

    text-align: center;

    background-color: white;
    border-radius: 50px;
    border: solid 1px gray;

    width: calc(100% - 48px);

    color: black;
  }
}
</style>

<script>
export default {}
</script>
