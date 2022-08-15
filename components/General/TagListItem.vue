<template>
  <div class="p-2 w-full sm:p-1">
    <nuxt-link :to="item.link">
      <div
        class="w-full h-[72px] sm:h-[40px] rounded-2xl hover:shadow-[0_2px_15px_rgba(118,118,118,0.23)] transition-all duration-300 py-3 px-6 flex items-center bg-cover bg-no-repeat bg-center"
        :style="{ 'background-image': 'url(' + randomBg() + ')' }"
      >
        <span
          class="font-semibold text-base text-white sm:text-xs line-clamp-2"
        >
          {{ item.name }}
        </span>
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
          name: "Nama Tag",
          link: "#",
        };
      },
    },
  },
  methods: {
    randomBg() {
      const bg = [
        require("~/assets/img/components/tag/bg-1.jpg"),
        require("~/assets/img/components/tag/bg-2.jpg"),
        require("~/assets/img/components/tag/bg-3.jpg"),
        require("~/assets/img/components/tag/bg-4.jpg"),
        require("~/assets/img/components/tag/bg-5.jpg"),
        require("~/assets/img/components/tag/bg-6.jpg"),
      ];
      return bg[Math.floor(Math.random() * bg.length)];
    },
  },
};
</script>
