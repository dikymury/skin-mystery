<template>
  <div class="w-full pt-1 pb-5 md:pb-1">
    <div class="-ml-2 -mr-2 flex pb-3 flex-wrap flex-row">
      <div v-for="x in list" :key="x.item_id" class="w-1/6 sm:!w-1/2 md:w-1/4">
        <ProductItem :product="x" />
      </div>
    </div>
    <div class="flex pt-3 justify-center" @click="loadMore()">
      <div
        class="w-[270px] h-12 rounded-2xl md:h-10 md:w-[200px] md:text-sm border border-solid border-[#B54B0F] flex justify-center items-center cursor-pointer text-[#B54B0F] text-base font-semibold"
      >
        Muat Lebih Banyak
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: { ProductItem },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    loadMore() {
      this.$emit("loadMore");
    },
  },
};
</script>
