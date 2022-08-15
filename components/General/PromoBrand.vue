<template>
  <div class="pt-5 pb-5 w-full">
    <div
      class="w-full p-6 md:rounded-lg md:p-4 rounded-3xl shadow-[0_5px_16px_rgba(8,15,52,0.06)]"
    >
      <div class="w-full flex items-center justify-between pb-[13px]">
        <h2 class="font-bold text-2xl md:text-sm m-0">{{ promo.name }}</h2>
        <nuxt-link
          v-if="promo.link_more"
          class="text-brown-b5 font-semibold md:text-sm text-base hover:text-black transition-all"
          :to="promo.link_more"
        >
          <span class="pr-1">Lihat Semua</span>
          <span
            class="feather icon-chevron-right text-lg pr-1 md:text-sm"
          ></span>
        </nuxt-link>
      </div>
      <div class="w-full flex">
        <div class="w-1/3 md:hidden">
          <nuxt-link :to="promo.link_banner">
            <div
              class="w-full rounded-3xl hover:shadow-[0_2px_15px_rgba(118,118,118,0.23)] transition-all"
            >
              <img
                class="w-full object-contain rounded-3xl"
                alt="Promo Brand"
                :src="promo.banner"
              />
            </div>
          </nuxt-link>
        </div>
        <div class="w-2/3 pl-[38px] md:w-full md:pl-0">
          <div class="py-2 grid grid-cols-4 sm:grid-cols-2">
            <PromoBrandItem v-for="x in promo.items" :key="x.id" :item="x" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PromoBrandItem from "./PromoBrandItem.vue";
export default {
  components: { PromoBrandItem },
  props: {
    promo: {
      type: Object,
      default() {
        return {
          name: "Nama Judul",
          banner: require("~/assets/img/components/banner/promo-brand.jpg"),
          link_banner: "#",
          link_more: "#",
          items: [],
        };
      },
    },
  },
};
</script>
