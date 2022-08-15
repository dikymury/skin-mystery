<template>
  <div
    :style="{
      'background-image': `url(${require('@/assets/img/components/banner-bg.png')})`,
    }"
    class="w-full bg-no-repeat bg-cover bg-center py-10 bg-gray-f3 sm:py-3"
  >
    <div class="main-content flex gap-x-6 sm:hidden">
      <div class="w-2/3 relative" style="width: calc(66.666667% - 8px)">
        <client-only>
          <carousel v-bind="optionBanner1" class="slider-cust">
            <slide v-for="x in 5" :key="x">
              <nuxt-link to="#">
                <div class="w-full rounded-2xl overflow-hidden">
                  <img
                    alt="banner 1"
                    src="~/assets/img/components/banner/banner-1.jpg"
                  />
                </div>
              </nuxt-link>
            </slide>
          </carousel>
        </client-only>
      </div>
      <div
        class="w-1/3 rounded-2xl overflow-hidden"
        style="width: calc(33.333333% - 16px)"
      >
        <nuxt-link to="#">
          <img
            alt="banner promo"
            src="~/assets/img/components/banner/banner-static.jpg"
          />
        </nuxt-link>
      </div>
    </div>
    <div class="main-content hidden gap-x-6 sm:flex">
      <div class="w-full relative">
        <client-only>
          <carousel v-bind="optionBanner1" class="slider-cust">
            <slide v-for="x in 5" :key="x">
              <nuxt-link to="#">
                <div class="w-full rounded-2xl overflow-hidden">
                  <img
                    alt="banner 1"
                    src="~/assets/img/components/banner/banner-1.jpg"
                  />
                </div>
              </nuxt-link>
            </slide>
          </carousel>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionBanner1: {
        loop: true,
        perPage: 1,
        paginationEnabled: true,
        navigationEnabled: true,
        autoplay: true,
        navigationPrevLabel: "<i class='feather icon-chevron-left'></i>",
        navigationNextLabel: "<i class='feather icon-chevron-right'></i>",
      },
    };
  },
};
</script>
