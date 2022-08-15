<template>
  <div class="pt-3 w-full pb-1 md:pt-2">
    <div class="-ml-2 -mr-2">
      <client-only>
        <carousel v-bind="optionSlider" class="sliderProducts">
          <slide v-for="x in list" :key="x.id">
            <TagListItem :item="x" />
          </slide>
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import TagListItem from "./TagListItem.vue";
export default {
  components: { TagListItem },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      optionSlider: {
        loop: false,
        perPage: 5.8,
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
        this.optionSlider.perPage = 2.5;
      } else if (newVal <= 920) {
        this.optionSlider.perPage = 3.8;
      } else {
        this.optionSlider.perPage = 5.8;
      }
    },
  },
};
</script>
