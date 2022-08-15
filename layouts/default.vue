<template>
  <div class="main-wrapper">
    <MainHeader />
    <Nuxt />
    <MainBlock v-if="isBlock" />
  </div>
</template>

<script>
import MainHeader from "~/components/Main/MainHeader.vue";
import MainBlock from "~/components/Main/MainBlock.vue";

export default {
  components: { MainHeader, MainBlock },
  computed: {
    isBlock() {
      return this.$store.state.isBlock;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    handleWindowResize() {
      this.$store.commit("SET_SIZEWINDOW", window.innerWidth);
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/main.scss";
</style>
