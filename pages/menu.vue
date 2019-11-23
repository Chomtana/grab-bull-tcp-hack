<template>
  <div class="menu-page">
    <div class="headline" style="margin-bottom: 16px;">เมนู</div>
    <list-flex perRow="2">
      <div v-for="(menu, menui) in menus" :key="menui">
        <div style="position: relative;">
          <div style="position: absolute; top: 0px; right: 0px;">X</div>
          <div>
            <product :img="menu.img" :title="menu.name" :subtitle="menu.description" />
          </div>
        </div>
      </div>
    </list-flex>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import { mapState, mapMutations } from 'vuex'
import ListFlex from '~/components/ListFlex'
import Product from '~/components/Product'

export default {
  computed: mapState({
    menus: state => state.menus
  }),
  components: {
    ListFlex,
    Product
  },
  methods: {
    ...mapMutations({
      add_picked_menu: 'add_picked_menu'
    })
  }
}
</script>
