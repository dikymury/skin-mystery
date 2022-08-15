<template>
  <div class="w-[147px] h-auto p-1 md:w-[70px]">
    <nuxt-link :to="item.link">
      <div class="w-full relative z-10 group">
        <div
          class="w-full relative min-h-[139px] md:min-h-0 md:h-[60px] md:rounded-md group-hover:shadow-lg rounded-2xl transition-all"
        >
          <img
            :alt="item.name"
            :src="item.image"
            class="w-full object-contain rounded-2xl md:h-[60px] md:rounded-md md:object-cover"
          />
        </div>
        <div
          v-if="item.name"
          class="text-lg text-gray-40 text-center md:text-xs md:h-auto h-[54px] line-clamp-2 sm:mt-1 mt-[13px]"
        >
          {{ item.name }}
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
          id: 0,
          name: "No Name",
          image: "",
          link: "",
        };
      },
    },
  },
};
</script>
