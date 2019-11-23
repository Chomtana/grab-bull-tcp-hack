<template>
  <div class="pickmenu-page">
    <header-with-back>MENU</header-with-back>
    <div class="my-2">
      <nuxt-link to="/menu_category">
        <v-btn large color="primary" style="width: 100%;">+ เพิ่มเมนู</v-btn>
      </nuxt-link>
      <list-flex perRow="1" gap="0">
        <div v-for="(menu, menui) in picked_menus" :key="menui">
          <div style="position: relative;">
            <div style="position: absolute; top: 8px; right: 12px; color: black; font-size:18pt; z-index: 1000;" @click="delete_picked_menu(menui)">X</div>
            <div>
              <product :img="menu.img" :title="menu.name" :subtitle="menu.amount+' '+menu.unit" :subtitle_right="menu.price+' บาท'" />
            </div>
          </div>
        </div>
      </list-flex>
    </div>

    <div class="pickmenu-footer">
      <div class="summary">
        {{total_price}} บาท
      </div>
      <hr style="border-color: black;" />
      <div class="actions">
        <nuxt-link to="/payment"><div class="chombtn pay-btn">ตกลง</div></nuxt-link>
        <div class="chombtn cancel-btn" @click="$router.back()">ยกเลิก</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .pickmenu-footer {
    position: fixed;
    bottom: 16px;
    width: calc(100% - 24px);

    .summary {
      text-align: right;
      font-size: 20pt;
      font-weight: bold;

      margin-bottom: 8px;

      color: black;
    }

    .actions {
      margin-top: 16px;

      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 16px;
    }
  }
</style>

<script>
import { mapState, mapMutations } from 'vuex'
import HeaderWithBack from '~/components/HeaderWithBack'
import ListFlex from '~/components/ListFlex'
import Product from '~/components/Product'

export default {
  computed: {
    ...mapState({
      picked_menus: state => state.picked_menus
    }),
    total_price() {
      return this.picked_menus.reduce((a,b)=>parseInt(a)+parseInt(b.price), 0);
    }
  },
  methods: {
    ...mapMutations({
      add_picked_menu: 'add_picked_menu',
      delete_picked_menu: 'delete_picked_menu'
    })
  },
  components: {
    HeaderWithBack,
    ListFlex,
    Product
  }
}
</script>
