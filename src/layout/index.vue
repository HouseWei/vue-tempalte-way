<template>
  <div class="app-wrapper">
    <div class="main-container">
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper
    @include clearfix
    position: relative
    height: 100%
    width: 100%

</style>
