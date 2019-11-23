<template>
  <v-layout
    column
    justify-start
  >
    <v-layout
      row
      justify-center
      align-center
      style="width:100%;"
    >
      <product />
    </v-layout>
    <v-layout
      row
      justify-space-around
      style="width:100%;"
    >
      <circle-toggle text="จ" />
      <circle-toggle text="อ" />
      <circle-toggle text="พ" />
      <circle-toggle text="พฤ" />
      <circle-toggle text="ศ" />
      <circle-toggle text="ส" />
      <circle-toggle text="อา" />
    </v-layout>
    <list-flex>
      <div>dasdsa</div>
      <div>jksdsjkd</div>
      <div>kjlj</div>
      <div>kjlj</div>
      <div>kjlj</div>
      <div>kjlj</div>
    </list-flex>
  </v-layout>
</template>

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
