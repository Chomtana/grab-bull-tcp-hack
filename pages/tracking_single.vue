<template>
  <div class="tracking-single-page">
    <header-with-back backtohome=1>การจัดส่ง</header-with-back>
    <div class="map-curr"></div>
    <div style="text-align: center; font-size: 42pt; font-weight: bold; color: saddlebrown">10 นาที</div>
  </div>
</template>

<style lang="scss" scoped>
  .map-curr {
    width: 100%;
    height: calc(100vh - 200px);

    background-image: url('https://manleylanddesign.com/wp-content/uploads/2017/05/google-placeholder.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

<script>
import HeaderWithBack from '~/components/HeaderWithBack'

export default {
  components: {
    HeaderWithBack
  }
}
</script>