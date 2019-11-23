<template>
  <v-layout column justify-start>
    <div class="profile-container">
      <div class="profile-title">TCP Man Egg</div>
      <div
        style="display: grid; grid-template-columns: 25% 75%; grid-gap: 16px;"
      >
        <img
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"
          width="100%"
          class="profile-img"
        />
        <div class="profile-description pr-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      </div>
    </div>

    <div class="map-container">
      <div style="color: saddlebrown; text-align: center; font-size: 16pt;">ร้านค้าใกล้เคียง และ ราคาดีที่สุด</div>
      <div class="map-curr"></div>
    </div>

    <nuxt-link to="/pickmenu"><div class="chombtn" style="margin-bottom: 8px;">Buy Now !</div></nuxt-link>
    <nuxt-link to="/packages"><div class="chombtn" style="margin-bottom: 8px;">Subscription !</div></nuxt-link>
    <nuxt-link to="/tracking"><div class="chombtn" style="margin-bottom: 8px;">สถานะการจัดส่ง</div></nuxt-link>
    <div class="chombtn" style="padding: 4px;">Logout</div>
  </v-layout>
</template>

<style lang="scss" scoped>
.profile-container {
  padding: 16px;
  background-color: white;
  border-radius: 25px;

  .profile-img {
    border-radius: 50%;
    background-color: gold;
  }

  .profile-title {
    font-size: 18pt;
    font-weight: bold;
    color: saddlebrown;

    margin-bottom: 16px;
  }

  .profile-description {
    color: black;
  }
}

.map-container {
  margin-top: 16px;
  margin-bottom: 16px;

  .map-curr {
    width: 100%;
    height: calc(100vh - 450px);

    background-image: url('https://manleylanddesign.com/wp-content/uploads/2017/05/google-placeholder.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Product from '~/components/Product'
import CircleToggle from '~/components/CircleToggle'
import ListFlex from '~/components/ListFlex'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Product,
    CircleToggle,
    ListFlex
  }
}
</script>
