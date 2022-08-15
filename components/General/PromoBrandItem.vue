<template>
  <div class="p-4 w-full md:p-2">
    <nuxt-link
      class="relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-100 hover:before:bg-gray-100 hover:before:z-0 hover:before:blur"
      :to="item.link"
    >
      <div class="w-full relative z-10 grid justify-items-center">
        <div class="w-full max-w-[123px] sm:max-w-[50px]">
          <img
            :alt="'product' + item.name"
            class="w-full h-full object-contain object-center"
            :src="item.product"
          />
        </div>
        <div class="w-full overflow-hidden rounded-3xl h-12 sm:h-6">
          <img
            :alt="'logo' + item.name"
            class="w-full h-full object-contain object-center"
            :src="item.logo"
          />
        </div>
        <div class="text-center md:text-xs line-clamp-2 text-[#CB3A31] text-lg">
          Diskon s/d 70%
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
          name: "Nama Brand",
          product: require("~/assets/img/components/promo/product-4.png"),
          logo: require("~/assets/img/components/promo/logo-4.png"),
          link: "#",
        };
      },
    },
  },
};
</script>
