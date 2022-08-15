<template>
  <div class="flex gap-x-6 pt-[64px] pb-5 md:pt-5 md:pb-2">
    <div class="w-2/3 relative sm:hidden" style="width: calc(66.666667% - 8px)">
      <div
        class="w-full rounded-2xl shadow-[0_5px_16px_rgba(8,15,52,0.06)] bg-white"
      >
        <div class="w-full pt-6 px-6 pb-4 md:px-3 md:pt-3 md:pb-2">
          <h2 class="text-2xl text-black m-0 md:text-sm">Kategori Pilihan</h2>
        </div>
        <div
          class="w-full flex flex-wrap flex-row justify-between p-5 pt-0 md:p-2"
        >
          <CategoryItem v-for="x in listCategory" :key="x.id" :item="x" />
        </div>
      </div>
    </div>
    <div
      class="w-1/3 relative sm:hidden"
      style="width: calc(33.333333% - 16px)"
    >
      <div
        class="w-full rounded-2xl shadow-[0_5px_16px_rgba(8,15,52,0.06)] bg-white"
      >
        <div class="w-full pt-6 px-6 pb-4 md:px-3 md:pt-3 md:pb-2">
          <h2 class="text-2xl text-black m-0 md:text-sm">Kategori Unggulan</h2>
        </div>
        <div
          class="w-full flex flex-wrap flex-row justify-between p-5 pt-0 md:p-2"
        >
          <CategoryItem v-for="x in listUnggulan" :key="x.id" :item="x" />
        </div>
      </div>
    </div>
    <div class="w-full relative sm:block hidden">
      <div
        class="w-full rounded-2xl shadow-[0_5px_16px_rgba(8,15,52,0.06)] bg-white"
      >
        <div class="w-full pt-6 px-6 pb-4 md:px-3 md:pt-3 md:pb-2">
          <h2 class="text-2xl text-black m-0 md:text-sm">Kategori Pilihan</h2>
        </div>
        <div
          class="w-full flex flex-wrap flex-row justify-between p-5 pt-0 md:p-2 sm:justify-around"
        >
          <CategoryItem v-for="x in listCategory" :key="x.id" :item="x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
export default {
  components: { CategoryItem },
  data() {
    return {
      listCategory: [
        {
          id: 1,
          name: "Klub Pria",
          image: require("~/assets/img/components/category/fashion.jpg"),
          link: "#",
        },
        {
          id: 2,
          name: "Perawatan & Kosmetik",
          image: require("~/assets/img/components/category/cosmetic.jpg"),
          link: "#",
        },
        {
          id: 3,
          name: "Rahasia Wanita",
          image: require("~/assets/img/components/category/secret-women.jpg"),
          link: "#",
        },
        {
          id: 4,
          name: "E-Voucher",
          image: require("~/assets/img/components/category/e-voucher.jpg"),
          link: "#",
        },
      ],
      listUnggulan: [
        {
          id: 1,
          name: "Konsultasi Dokter",
          image: require("~/assets/img/components/category/konsultasi-dokter.jpg"),
          link: "#",
        },
        {
          id: 2,
          name: "",
          image: require("~/assets/img/components/category/cermin-ajaib.jpg"),
          link: "#",
        },
      ],
    };
  },
};
</script>
