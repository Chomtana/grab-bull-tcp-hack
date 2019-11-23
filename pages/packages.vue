<template>
  <div class="promotions-page">
    <header-with-back>Package</header-with-back>
    <list-flex perRow="1" gap="0">
      <div v-for="(menu, menui) in packages" :key="menui">
        <!--<nuxt-link :to="'/menu2/'+$route.params.category+'/'+menui">-->
          <div>
            <product :img="menu.img" :title="menu.title" :subtitle="menu.description" />
          </div>
        <!--</nuxt-link>-->
      </div>
    </list-flex>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import { mapState, mapMutations } from 'vuex';
import HeaderWithBack from '~/components/HeaderWithBack'
import ListFlex from '~/components/ListFlex'
import Product from '~/components/Product'

export default {
  components: {
    HeaderWithBack,
    ListFlex,
    Product
  },
  computed: mapState({
    menus: state => state.menus,
    packages: state => state.packages
  }),
  methods: {
    ...mapMutations({
      add_picked_menu: 'add_picked_menu'
    })
  }
}
</script>