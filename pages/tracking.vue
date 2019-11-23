<template>
  <div class="promotions-page">
    <header-with-back>Status</header-with-back>
    <list-flex perRow="1" gap="0">
      <div v-for="menui in 3" :key="menui">
        <nuxt-link :to="'/tracking_single'">
          <div>
            <product img="https://static.thenounproject.com/png/72-200.png" :title="'#TR2019000'+(Math.floor(Math.random()*8000 + 1000))" subtitle="10 นาที" />
          </div>
        </nuxt-link>
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