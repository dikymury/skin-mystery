<template>
  <div class="w-full pt-5 pb-5">
    <nuxt-link :to="item.link">
      <div class="w-full hover:shadow-lg rounded-2xl md:rounded-md">
        <img
          :alt="item.name"
          :src="item.image"
          class="w-full rounded-2xl md:rounded-md"
        />
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
          name: "Banner Full",
          image: "-",
        };
      },
    },
  },
};
</script>
