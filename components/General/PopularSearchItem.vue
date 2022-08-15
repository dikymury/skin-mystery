<template>
  <div class="w-full p-2 sm:p-1">
    <nuxt-link :to="item.link">
      <div
        class="w-full rounded-lg p-4 sm:p-2 sm:px-3 flex justify-between items-center hover:shadow-[0_2px_15px_rgba(118,118,118,0.23)] transition-all"
        :style="{ background: $randomColor() }"
      >
        <div class="w-max max-w-[50%] sm:max-w-[70%]">
          <h3
            class="text-black mb-1 sm:mb-0.5 text-ellipsis text-base font-semibold sm:text-xs"
          >
            {{ item.name }}
          </h3>
          <div class="text-sm text-[#616161] sm:text-xs">
            {{ item.sold }} Produk
          </div>
        </div>
        <div class="h-[66px] w-[66px] sm:w-[30px] sm:h-[30px]">
          <img
            class="w-full h-full object-contain"
            :alt="item.name"
            :src="item.image"
          />
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: "x",
          name: "Nama Keyword",
          image: require("~/assets/img/components/popular/2.png"),
          sold: "1rb+",
          link: "#",
        };
      },
    },
  },
};
</script>
