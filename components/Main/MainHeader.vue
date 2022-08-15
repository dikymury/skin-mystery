<template>
  <header class="w-full fixed top-0 left-0 z-20">
    <div
      class="w-full flex items-center justify-between bg-gray-fb h-[48px] py-[12px] px-[32px] sm:h-[30px] sm:py-[2px] sm:px-4"
    >
      <nuxt-link to="#">
        <div
          class="flex gap-x-2 items-center hover:text-gray-700 text-gray-500 transition-all duration-300"
        >
          <span class="icon-exp ice-16 ice-phone-gray"></span>
          <span class="text-base sm:hidden sm:text-xs">
            Download Skin Mystery App
          </span>
          <span class="text-base hidden sm:block sm:text-xs">Download App</span>
        </div>
      </nuxt-link>
      <div class="flex items-center gap-x-4">
        <nuxt-link to="#">
          <div
            class="flex items-center gap-x-2 hover:text-gray-700 text-gray-500 transition-all duration-300"
          >
            <span class="icon-exp ice-16 ice-store-gray"></span>
            <span class="text-base sm:text-xs">Daftar Official Store</span>
          </div>
        </nuxt-link>
        <nuxt-link to="#" class="md:hidden">
          <div
            class="flex items-center gap-x-2 hover:text-gray-700 text-gray-500 transition-all duration-300"
          >
            <span class="icon-exp ice-16 ice-mail-gray"></span>
            <span class="text-base">help@skinmystery.com</span>
          </div>
        </nuxt-link>
        <nuxt-link to="#" class="md:hidden">
          <div
            class="flex items-center gap-x-2 hover:text-gray-700 text-gray-500 transition-all duration-300"
          >
            <span class="icon-exp ice-16 ice-faq-gray"></span>
            <span class="text-base">FAQ</span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div
      class="w-full flex gap-x-6 content-between h-[69px] bg-white py-4 px-14 sm:py-1 sm:px-4 sm:h-[48px]"
    >
      <div class="relative h-9 sm:hidden">
        <img
          :alt="nameApp"
          class="object-contain h-full w-auto"
          src="~/assets/img/logo/logo.png"
        />
      </div>
      <div class="flex-auto flex items-center gap-x-6">
        <nuxt-link
          class="text-gray-400 text-sm sm:hidden hover:text-gray-700"
          to="#"
        >
          Kategori
        </nuxt-link>
        <div class="relative w-full">
          <form action="#" class="relative">
            <input
              class="w-full py-[6px] text-base text-gray-700 pl-4 pr-10 rounded-lg border border-solid border-gray-100 bg-gray-fb h-9 focus:shadow-md transition-all duration-300 ease-in-out"
              placeholder="Cari produk di Skin Mystery"
              type="text"
            />
            <button
              class="m-0 p-[2px] absolute top-1/2 right-4 -translate-y-1/2"
            >
              <span class="icon-exp ice-18 ice-search-black"></span>
            </button>
          </form>
        </div>
        <div class="flex items-center gap-4">
          <nuxt-link to="#">
            <div
              class="relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-500 hover:before:bg-gray-200 hover:before:z-0 hover:before:blur"
            >
              <span
                class="icon-exp ice-20 ice-notification-black z-1 relative"
              ></span>
              <div
                class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-f4 bg-opacity-30"
              >
                <div
                  class="absolute bg-red-f4 h-[6px] w-[6px] z-2 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                ></div>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="#">
            <div
              class="relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-500 hover:before:bg-gray-200 hover:before:z-0 hover:before:blur"
            >
              <span class="icon-exp ice-20 ice-cart-black z-1 relative"></span>
            </div>
          </nuxt-link>
          <nuxt-link to="#">
            <div
              class="relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-500 hover:before:bg-gray-200 hover:before:z-0 hover:before:blur"
            >
              <span class="icon-exp ice-20 ice-chat-black z-1 relative"></span>
            </div>
          </nuxt-link>
        </div>
        <div class="items-center gap-10 w-max hidden md:flex">
          <div
            class="flex group gap-2 relative items-center w-max after:absolute after:transition-all after:duration-400 after:ease-in-out after:top-0 after:left-0 after:w-full after:h-full after:rounded-full hover:after:shadow hover:after:shadow-gray-100 hover:after:bg-gray-100 hover:after:z-0 hover:after:blur"
          >
            <div class="overflow-hidden h-6 w-6 relative rounded-full z-10">
              <img
                class="object-cover h-full w-full"
                alt="user"
                src="~/assets/img/components/user.jpg"
              />
            </div>
          </div>
        </div>
        <div
          class="flex items-center gap-10 w-max md:hidden"
          @mouseover="setProfilePreview(true)"
          @mouseleave="setProfilePreview(false)"
        >
          <div
            class="flex group gap-2 relative items-center w-max after:absolute after:transition-all after:duration-400 after:ease-in-out after:top-0 after:left-0 after:w-full after:h-full after:rounded-full hover:after:shadow hover:after:shadow-gray-100 hover:after:bg-gray-100 hover:after:z-0 hover:after:blur"
          >
            <div class="overflow-hidden h-6 w-6 relative rounded-full z-10">
              <img
                class="object-cover h-full w-full"
                alt="user"
                src="~/assets/img/components/user.jpg"
              />
            </div>
            <div
              class="md:hidden text-base z-10 relative text-gray-40 text-ellipsis max-w-[90px] overflow-hidden whitespace-nowrap"
            >
              Annas Aisya
            </div>
            <transition name="fade">
              <ProfileReview v-if="profilePreview" />
            </transition>
          </div>
          <nuxt-link
            class="md:hidden relative w-max before:absolute before:top-0 before:-left-4 before:h-full before:w-[1px] before:bg-gray-200"
            to="#"
          >
            <div
              class="flex relative gap-2 items-center after:absolute after:transition-all after:duration-400 after:ease-in-out after:top-0 after:left-0 after:w-full after:h-full after:rounded-full hover:after:shadow hover:after:shadow-gray-100 hover:after:bg-gray-100 hover:after:z-0 hover:after:blur"
            >
              <div class="overflow-hidden h-8 w-8 relative z-10">
                <img
                  class="object-contain h-full w-full"
                  alt="user"
                  src="~/assets/img/components/store.png"
                />
              </div>
              <div
                class="text-base text-gray-40 relative z-10 text-ellipsis max-w-[90px] overflow-hidden whitespace-nowrap"
              >
                Toko
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ProfileReview from "~/components/Main/ProfileReview.vue";
export default {
  components: { ProfileReview },
  computed: {
    nameApp() {
      return process.env.nameApp;
    },
    profilePreview() {
      return this.$store.state.profilePreview;
    },
  },
  methods: {
    setProfilePreview(val) {
      this.$store.commit("SET_PROFILE_PREVIEW", val);
      this.$store.commit("SET_ISBLOCK", val);
    },
  },
};
</script>
