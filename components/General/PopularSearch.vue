<template>
  <div class="pt-5 pb-5 w-full md:pt-2 md:pb-2">
    <div
      class="p-6 md:p-3 w-full bg-white rounded-2xl shadow-[0_5px_16px_rgba(8,15,52,0.06)]"
    >
      <div class="w-full">
        <h2 class="font-bold text-2xl md:text-sm m-0">{{ popular.name }}</h2>
      </div>
      <div class="pt-2 md:pt-0 -ml-2 -mr-2 flex flex-row flex-wrap">
        <div v-for="x in popular.items" :key="x.id" class="w-1/5 md:w-1/2">
          <PopularSearchItem :item="x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PopularSearchItem from "./PopularSearchItem.vue";
export default {
  components: { PopularSearchItem },
  props: {
    popular: {
      type: Object,
      default() {
        return {
          name: "Nama Judul",
          items: [],
        };
      },
    },
  },
};
</script>
