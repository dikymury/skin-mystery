<template>
  <div class="p-2 w-full sm:p-1.5">
    <div
      class="w-full rounded-xl hover:shadow-[0_2px_15px_rgba(118,118,118,0.23)] transition-all duration-300"
    >
      <nuxt-link :to="'p/' + product.item_slug">
        <div
          class="w-full px-3 pt-3 pb-[13px] rounded-xl z-10 relative"
          :style="{ background: $randomColor() }"
        >
          <div
            v-if="product.discount_percent"
            class="absolute left-0 top-0 bg-gradientRed rounded-tl-xl rounded-br-xl h-8 px-[13px] text-lg text-white"
          >
            {{ product.discount_percent }}%
          </div>
          <div class="w-full overflow-hidden rounded-xl h-[165px]">
            <img
              class="w-full h-full object-cover"
              :alt="product.item_name"
              :src="product.item_image"
            />
          </div>
          <div class="w-full pt-3 min-h-[120px]">
            <h3 class="line-clamp-2 text-xs text-gray-40 mb-1">
              {{ product.item_name }}
            </h3>
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="font-catamaran text-xs text- text-[#0A0A0A] font-normal"
              v-html="$formatPrice(product.item_price)"
            ></div>
            <!-- eslint-enable -->
            <div
              v-if="product.discount_price"
              class="text-xs text-gray-9e truncate line-through"
            >
              Rp{{ $formatNumber(product.discount_price) }}
            </div>
            <div class="h-[18px] flex items-center">
              <div class="flex items-center pr-[6px]">
                <span class="icon-exp ice-star ice-12 mr-[3px]"></span>
                <span class="text-xs text-gray-40">
                  {{ product.item_rating }}
                </span>
              </div>
              <div class="flex items-center text-xs text-gray-40">
                {{ product.item_sold }} Terjual
              </div>
            </div>
            <div class="flex items-center">
              <span class="icon-exp ice-12 ice-pin-gray mr-[7px]"></span>
              <span class="text-xs text-gray-75 uppercase text-ellipsis">
                {{ product.store_city }}
              </span>
            </div>
          </div>
        </div>
      </nuxt-link>
      <div
        class="w-full rounded-xl bg-[#B54B0F] -mt-4 z-0 pt-6 pb-2 cursor-pointer"
      >
        <div class="flex items-center justify-center h-[18px]">
          <span class="icon-exp ice-14 ice-cart-white mr-1"></span>
          <span class="text-white text-xs">Kantongin</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {
          item_id: "uq4x0xotrw3txr201o02xpv0",
          item_sold: 0,
          item_name: "Nama Product",
          item_slug: "drceuracle5controlcleansingtoner-82592",
          item_price: 1,
          item_rating: 0,
          item_tags: [],
          category: "perawatan dan kecantikan",
          category_index: "none",
          category_group: "none",
          discount: false,
          discount_price: 0,
          discount_percent: 0,
          store_id: "uq3vsz4xosso2tot2v03220r",
          store_slug: "aaaaaaaaaaa",
          store_city: "Jakarta Selatan",
          store_province: "DKI Jakarta",
          item_image:
            "https://rapid-api.retas.dev/api/v2.0/store/ip/uq4x0xotrw3txr201o02xpv0/0?cache=1658650987.646504",
        };
      },
    },
  },
};
</script>
