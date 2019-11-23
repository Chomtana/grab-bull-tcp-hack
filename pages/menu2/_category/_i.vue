<template>
  <div class="menu-single-page">
    <header-with-back>{{$route.params.category}}</header-with-back>
    <div class="menu-detail-card">
      <div
        class="mx-auto product-container px-2 py-2"
        style="width: 100%; background-color: white;"
        v-if="menu"
      >
        <div class="product-img">
          <img :src="menu.img">
        </div>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1" style="color: black;">{{menu.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>

      <hr style="border-color: black;" />

      <div class="product-detail">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>

      <div class="product-amount">
        <span v-if="unit == 'แพ็ค'">
          {{menu.perpack}} ขวด / แพ็ค <br/>
          {{menu.price * menu.perpack}} บาท / แพ็ค
        </span>
        <span v-if="unit != 'แพ็ค'">
          {{menu.price}} บาท / {{unit}}
        </span>
      </div>
    </div>

    <div class="pickmenu-footer">
      <div class="amount-picker" style="margin-bottom: 16px;">
        <div style="display: grid; grid-template-columns: 70% 30%; grid-gap: 16px;">
          <div style="display: flex; width: 100%;">
            <div class="plus-minus-btn" @click="amount--;">-</div>
            <input type="text" style="flex-grow: 1; color: black; padding: 4px; text-align: right; border: 1px solid #ccc; background-color: white;" v-model="amount">
            <div class="plus-minus-btn" @click="amount++;">+</div>
          </div>
          <div style="display: flex; width: 100%;">
            <select v-model="unit" style="color: black; border: 1px solid #ccc; width: calc(100% - 20px); padding: 4px; background-color: white;">
              <option>แพ็ค</option>
              <option>ขวด</option>
              <option>กระป๋อง</option>
            </select>
          </div>
        </div>
      </div>
      <hr style="border-color: black;" />
      <div class="actions" style="margin-top: 16px;">
        <nuxt-link to="/pickmenu"><div class="chombtn pay-btn" @click="add_picked_menu({menu, amount, unit});">ตกลง</div></nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .menu-detail-card {
    background-color: white;
    border: 2px solid black;
    border-radius: 20px;

    padding: 16px;
  }

  .product-container {
    border-radius: 20px;

    display: grid;
    grid-template-columns: 30% 70%;

    color: black;

    .product-img {
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .product-detail {
    color: black;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .amountpicker {
    height: 36px;
  }

  .product-amount {
    color: saddlebrown;
    font-weight: bold;
    text-align: right;
    font-size: 18pt;

  }

  .plus-minus-btn {
    font-size: 24pt;
    width: 36px;
    height: 36px;

    color: black;
    border: 1px solid #ccc;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
  }

  .pickmenu-footer {
    position: fixed;
    left: 16px;
    bottom: 16px;
    width: calc(100% - 24px);
  }
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
  computed: {
    ...mapState({
      menus: state => state.menus
    }),
    menu() {
      console.log(this.menus[this.$route.params.category]);
      return this.menus[this.$route.params.category][this.$route.params.i];
    }
  },
  methods: {
    ...mapMutations({
      add_picked_menu: 'add_picked_menu'
    })
  },
  data() {
    return {
      amount: 1,
      unit: "แพ็ค"
    }
  }
}
</script>