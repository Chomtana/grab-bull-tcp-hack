<template>
  <div class="menu-category-page">
    <header-with-back>SELECT</header-with-back>
    <nuxt-link :to="'/menu2/'+menu_name" class="menu-btn" v-for="(menu_list, menu_name) in menus" :key="menu_name">
      {{menu_name}}
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
  .menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;

    margin-bottom: 16px;

    color: black;

    padding: 24px;

    border-radius: 20px;

    -webkit-box-shadow: 3px 3px 15px -2px rgba(68,68,68,0.54);
    -moz-box-shadow: 3px 3px 15px -2px rgba(68,68,68,0.54);
    box-shadow: 3px 3px 15px -2px rgba(68,68,68,0.54);
  }
</style>

<script>
import { mapState } from 'vuex';
import HeaderWithBack from '~/components/HeaderWithBack'

export default {
  components: {
    HeaderWithBack
  },
  computed: mapState({
    menus: state => state.menus
  })
}
</script>