<template>
  <div class="menu-page">
    <header-with-back>PAYMENT</header-with-back>
    <list-flex perRow="2" gap="16">
      <div v-for="(payment, paymenti) in payments" :key="paymenti">
        <nuxt-link to="/tracking_single">
          <div class="payment-card">
            <img :src="payment.img">
          </div>
        </nuxt-link>
      </div>
    </list-flex>
  </div>
</template>

<style lang="scss" scoped>
  .payment-card {
    padding: 24px;

    border-radius: 20px;
    background-color: white;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>

<script>
import { mapState, mapMutations } from 'vuex'
import ListFlex from '~/components/ListFlex'
import Product from '~/components/Product'
import HeaderWithBack from '~/components/HeaderWithBack'

export default {
  computed: mapState({
    menus: state => state.menus,
    payments: state => state.payments
  }),
  components: {
    ListFlex,
    Product,
    HeaderWithBack
  },
  methods: {
    ...mapMutations({
      add_picked_menu: 'add_picked_menu'
    })
  }
}
</script>
