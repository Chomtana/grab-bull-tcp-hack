<template>
  <div class="menu-page">
    <div class="headline" style="margin-bottom: 16px;">เมนู</div>
    <list-flex perRow="1">
      <div v-for="(menu, menui) in menus" :key="menui">
        <nuxt-link to="/pickmenu">
          <v-card @click="add_picked_menu(menu)">
            <div style="display: flex;">
              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="menu.img"></v-img>
              </v-avatar>

              <div>
                <v-card-title class="headline" v-text="menu.name"></v-card-title>
                <v-card-subtitle v-text="menu.description"></v-card-subtitle>
              </div>
            </div>
          </v-card>
        </nuxt-link>
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
