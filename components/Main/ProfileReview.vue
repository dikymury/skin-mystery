<template>
  <div class="absolute top-full left-1/2 -translate-x-1/2 pt-[28px]">
    <div class="bg-white rounded-2xl overflow-hidden p-6 min-w-[391px]">
      <div class="flex justify-between items-center w-full">
        <nuxt-link class="flex items-center gap-x-4 h-[55px]" to="#">
          <div class="relative h-[55px] w-[55px] rounded-full">
            <img
              class="h-full w-full object-cover"
              alt="user"
              src="~/assets/img/components/user.jpg"
            />
          </div>
          <div class="grid justify-between h-[55px]">
            <div
              class="text-sm text-black font-semibold text-ellipsis overflow-hidden whitespace-nowrap max-w-[120px]"
            >
              Annas Aisya
            </div>
            <div
              class="py-1 px-2 bg-blue-33 bg-opacity-10 rounded flex items-center gap-x-1"
            >
              <span class="icon-exp ice-12 ice-diamond-blue"></span>
              <span class="text-xs text-blue-33 font-semibold">
                Diamond Member
              </span>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          class="block relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-200 hover:before:bg-gray-200 hover:before:z-0 hover:before:blur"
          to="#"
        >
          <span class="icon-exp ice-24 ice-setting-blue relative z-10"></span>
        </nuxt-link>
      </div>
      <div
        class="pt-4 flex justify-between items-stretch w-full mt-4 border-t border-gray-ed"
      >
        <div class="max-w-1/2 w-max grid gap-y-4 content-start">
          <nuxt-link
            class="relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-100 hover:before:bg-gray-100 hover:before:z-0 hover:before:blur"
            to="#"
          >
            <div class="flex gap-x-4 items-center relative z-10">
              <span class="icon-exp ice-24 ice-voucher"></span>
              <span class="font-semibold text-base text-black">Voucher</span>
            </div>
          </nuxt-link>
          <nuxt-link
            class="relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-100 hover:before:bg-gray-100 hover:before:z-0 hover:before:blur"
            to="#"
          >
            <div class="flex gap-x-4 items-center relative z-10">
              <span class="icon-exp ice-24 ice-review"></span>
              <span class="font-semibold text-base text-black">
                Ulasan Produk
              </span>
            </div>
          </nuxt-link>
          <nuxt-link
            class="relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-100 hover:before:bg-gray-100 hover:before:z-0 hover:before:blur"
            to="#"
          >
            <div class="flex gap-x-4 items-center relative z-10">
              <span class="icon-exp ice-24 ice-order"></span>
              <span class="font-semibold text-base text-black">
                Pesanan Saya
              </span>
            </div>
          </nuxt-link>
        </div>
        <div class="w-[1px] bg-gray-ed h-auto"></div>
        <div class="max-w-1/2 w-max grid gap-y-4 content-start">
          <nuxt-link
            class="relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-100 hover:before:bg-gray-100 hover:before:z-0 hover:before:blur"
            to="#"
          >
            <div class="flex gap-x-4 items-center relative z-10">
              <span class="icon-exp ice-24 ice-store"></span>
              <span class="font-semibold text-base text-black">
                Toko Diikuti
              </span>
            </div>
          </nuxt-link>
          <nuxt-link
            class="relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-100 hover:before:bg-gray-100 hover:before:z-0 hover:before:blur"
            to="#"
          >
            <div class="flex gap-x-4 items-center relative z-10">
              <span class="icon-exp ice-24 ice-order"></span>
              <span class="font-semibold text-base text-black">
                Buku Alamat
              </span>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="pt-4 mt-4 border-t border-gray-ed w-full">
        <nuxt-link to="#">
          <div
            class="flex gap-x-4 items-center w-max relative before:absolute before:transition-all before:duration-400 before:ease-in-out before:top-0 before:left-0 before:w-full before:h-full before:rounded-full hover:before:shadow hover:before:shadow-gray-100 hover:before:bg-gray-100 hover:before:z-0 hover:before:blur"
          >
            <span class="icon-exp ice-24 ice-logout relative z-10"></span>
            <span class="font-semibold text-base text-black relative z-10">
              Keluar
            </span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
