<template>
  <div class="w-full pt-5 pb-5">
    <div class="w-full flex items-center justify-between pb-2">
      <h2 class="font-bold text-2xl md:text-sm m-0">{{ dataslider.name }}</h2>
      <nuxt-link
        v-if="dataslider.link"
        class="text-brown-b5 font-semibold text-base hover:text-black transition-all md:text-sm"
        :to="dataslider.link"
      >
        <span class="pr-1">Lihat Semua</span>
        <span class="feather icon-chevron-right text-lg pr-1 md:text-sm"></span>
      </nuxt-link>
    </div>
    <div class="-ml-2 -mr-2">
      <client-only>
        <carousel v-bind="optionSlider" class="sliderProducts">
          <slide v-for="x in dataslider.items" :key="x.id">
            <ProductItem :product="x" />
          </slide>
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
  props: {
    dataslider: {
      type: Object,
      default() {
        return {
          name: "Slider Products",
          link: "#",
          items: [],
        };
      },
    },
  },
  data() {
    return {
      optionSlider: {
        loop: false,
        perPage: 6,
        paginationEnabled: false,
        navigationEnabled: true,
        autoplay: false,
        navigationPrevLabel: "<i class='feather icon-chevron-left'></i>",
        navigationNextLabel: "<i class='feather icon-chevron-right'></i>",
      },
    };
  },
  computed: {
    getWindow() {
      return this.$store.state.sizeWindow;
    },
  },
  watch: {
    getWindow(newVal) {
      if (newVal <= 640) {
        this.optionSlider.perPage = 2;
      } else if (newVal <= 920) {
        this.optionSlider.perPage = 4;
      } else {
        this.optionSlider.perPage = 6;
      }
    },
  },
};
</script>
