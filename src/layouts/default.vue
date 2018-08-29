<template>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      scenesVistited: {thing: 'thing'},
    }
  },
  components: {
    index

  },
  methods: {
    openURL
  },
  props:{
    //'scenesVisted': this.scenesVistited,
  }
}
</script>

<style>
</style>
