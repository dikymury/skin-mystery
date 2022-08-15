<template>
  <div class="main-container">
    <SplitBanner />
    <div class="main-content pb-28 md:pb-2">
      <CategoryHighlight />
      <FullBanner :item="bannerFirst" />
      <SliderProducts :dataslider="SliderPro" />
      <PopularSearch :popular="PopulerSearchData" />
      <FullBanner :item="bannerSecond" />
      <PromoBrand :promo="PromoBrandData" />
      <TagList :list="listTag" />
      <InfiniteProducts :list="listInfiniteProducts" @loadMore="loadInfinite" />
    </div>
  </div>
</template>

<script>
import SplitBanner from "~/components/General/SplitBanner.vue";
import CategoryHighlight from "~/components/General/CategoryHighlight.vue";
import FullBanner from "~/components/General/FullBanner.vue";
import SliderProducts from "~/components/General/SliderProducts.vue";
import PopularSearch from "~/components/General/PopularSearch.vue";
import PromoBrand from "~/components/General/PromoBrand.vue";
import TagList from "~/components/General/TagList.vue";
import InfiniteProducts from "~/components/General/InfiniteProducts.vue";
export default {
  components: {
    SplitBanner,
    CategoryHighlight,
    FullBanner,
    SliderProducts,
    PopularSearch,
    PromoBrand,
    TagList,
    InfiniteProducts,
  },
  fetch({ store }) {
    return (
      store.dispatch("home/getSliderProducts") &&
      store.dispatch("home/getInfiniteProducts")
    );
  },
  data() {
    return {
      bannerFirst: {
        id: "1",
        name: "Banner Full",
        image: require("~/assets/img/components/banner/banner-full-watsons.jpg"),
        link: "#",
      },
      bannerSecond: {
        id: "2",
        name: "Banner Full",
        image: require("~/assets/img/components/banner/banner-full-promo.jpg"),
        link: "#",
      },
      SliderPro: {
        name: "Perawatan Wajah Terlaris",
        link: "#",
        items: [
          {
            id: 1,
            name: "Kompor Listrik Mini 500W Kompor Masak Elektrik Portable Travel Camping - Putih",
            image: require("~/assets/img/components/products/1.jpg"),
            price: 250000,
            discountPrice: 30000,
            discountPercent: 30,
            rating: "4,5",
            sold: 29,
            location: "Kota Jakarta Utara",
          },
          {
            id: 2,
            name: "Kompor Listrik Mini 500W Kompor Masak Elektrik Portable Travel Camping - Putih",
            image: require("~/assets/img/components/products/2.jpg"),
            price: 450000,
            discountPrice: 80000,
            discountPercent: 20,
            rating: "4",
            sold: 22,
            location: "Kota Jakarta Selatan",
          },
          {
            id: 3,
            name: "Kompor Listrik Mini 500W Kompor Masak Elektrik Portable Travel Camping - Putih",
            image: require("~/assets/img/components/products/3.jpg"),
            price: 450000,
            discountPrice: 0,
            discountPercent: 0,
            rating: "5",
            sold: 12,
            location: "Bandung",
          },
          {
            id: 4,
            name: "Kompor Listrik Mini 500W Kompor Masak Elektrik Portable Travel Camping - Putih",
            image: require("~/assets/img/components/products/4.jpg"),
            price: 250000,
            discountPrice: 30000,
            discountPercent: 30,
            rating: "4,5",
            sold: 29,
            location: "Kota Jakarta Utara",
          },
          {
            id: 5,
            name: "Kompor Listrik Mini 500W Kompor Masak Elektrik Portable Travel Camping - Putih",
            image: require("~/assets/img/components/products/5.jpg"),
            price: 450000,
            discountPrice: 80000,
            discountPercent: 20,
            rating: "4",
            sold: 22,
            location: "Kota Jakarta Selatan",
          },
          {
            id: 6,
            name: "Kompor Listrik Mini 500W Kompor Masak Elektrik Portable Travel Camping - Putih",
            image: require("~/assets/img/components/products/6.jpg"),
            price: 450000,
            discountPrice: 0,
            discountPercent: 0,
            rating: "5",
            sold: 12,
            location: "Bandung",
          },
          {
            id: 7,
            name: "Kompor Listrik Mini 500W Kompor Masak Elektrik Portable Travel Camping - Putih",
            image: require("~/assets/img/components/products/2.jpg"),
            price: 350000,
            discountPrice: 80000,
            discountPercent: 20,
            rating: "4",
            sold: 22,
            location: "Kota Jakarta Selatan",
          },
          {
            id: 8,
            name: "Kompor Listrik Mini 500W Kompor Masak Elektrik Portable Travel Camping - Putih",
            image: require("~/assets/img/components/products/1.jpg"),
            price: 150000,
            discountPrice: 0,
            discountPercent: 0,
            rating: "5",
            sold: 12,
            location: "Bandung",
          },
        ],
      },
      PopulerSearchData: {
        name: "Pencarian Populer",
        items: [
          {
            id: 1,
            name: "Serum",
            image: require("~/assets/img/components/popular/1.png"),
            sold: "3rb+",
            link: "#",
          },
          {
            id: 2,
            name: "Facial Wash",
            image: require("~/assets/img/components/popular/2.png"),
            sold: "1rb+",
            link: "#",
          },
          {
            id: 3,
            name: "Toner",
            image: require("~/assets/img/components/popular/3.png"),
            sold: "1rb+",
            link: "#",
          },
          {
            id: 4,
            name: "Cleanser",
            image: require("~/assets/img/components/popular/4.png"),
            sold: "900+",
            link: "#",
          },
          {
            id: 5,
            name: "Face Mist",
            image: require("~/assets/img/components/popular/5.png"),
            sold: "500+",
            link: "#",
          },
        ],
      },
      PromoBrandData: {
        name: "Promo Brand",
        link_more: "#",
        banner: require("~/assets/img/components/banner/promo-brand.jpg"),
        link_banner: "#",
        items: [
          {
            id: 1,
            name: "Innisfree",
            product: require("~/assets/img/components/promo/product-1.png"),
            logo: require("~/assets/img/components/promo/logo-1.png"),
            link: "#",
          },
          {
            id: 2,
            name: "Innisfree",
            product: require("~/assets/img/components/promo/product-2.png"),
            logo: require("~/assets/img/components/promo/logo-2.png"),
            link: "#",
          },
          {
            id: 3,
            name: "Innisfree",
            product: require("~/assets/img/components/promo/product-3.png"),
            logo: require("~/assets/img/components/promo/logo-3.png"),
            link: "#",
          },
          {
            id: 4,
            name: "Innisfree",
            product: require("~/assets/img/components/promo/product-4.png"),
            logo: require("~/assets/img/components/promo/logo-4.png"),
            link: "#",
          },
          {
            id: 5,
            name: "Innisfree",
            product: require("~/assets/img/components/promo/product-5.png"),
            logo: require("~/assets/img/components/promo/logo-5.png"),
            link: "#",
          },
          {
            id: 6,
            name: "Innisfree",
            product: require("~/assets/img/components/promo/product-6.png"),
            logo: require("~/assets/img/components/promo/logo-6.png"),
            link: "#",
          },
          {
            id: 7,
            name: "Innisfree",
            product: require("~/assets/img/components/promo/product-7.png"),
            logo: require("~/assets/img/components/promo/logo-7.png"),
            link: "#",
          },
          {
            id: 8,
            name: "Innisfree",
            product: require("~/assets/img/components/promo/product-8.png"),
            logo: require("~/assets/img/components/promo/logo-8.png"),
            link: "#",
          },
        ],
      },
      listTag: [
        {
          id: 1,
          name: "For You",
          link: "#",
        },
        {
          id: 2,
          name: "Deals Belanja Cantik",
          link: "#",
        },
        {
          id: 3,
          name: "Diskon Spesial",
          link: "#",
        },
        {
          id: 4,
          name: "Serum",
          link: "#",
        },
        {
          id: 5,
          name: "Toner",
          link: "#",
        },
        {
          id: 6,
          name: "Moisturizer",
          link: "#",
        },
        {
          id: 7,
          name: "Lip Tint",
          link: "#",
        },
        {
          id: 8,
          name: "Face Wash Viral",
          link: "#",
        },
        {
          id: 9,
          name: "Masker Glowing Citayam",
          link: "#",
        },
      ],
    };
  },
  computed: {
    listSliderProducts() {
      return this.$store.state.home.sliderProducts;
    },
    listInfiniteProducts() {
      return this.$store.state.home.infiniteProducts;
    },
  },
  created() {
    this.SliderPro.items = this.$store.state.home.sliderProducts;
  },
  methods: {
    loadInfinite() {
      this.$store.dispatch("home/getInfiniteProducts");
    },
  },
  head() {
    return {
      title: process.env.nameApp,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "title",
          content: process.env.nameDesc,
        },
        {
          hid: "description",
          name: "description",
          content: process.env.descApp,
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: process.env.nameApp,
        },
        {
          property: "og:description",
          content: process.env.descApp,
        },
        { property: "og:url", content: process.env.urlApp },
        {
          property: "og:image",
          content: process.env.urlApp + "/icon.png",
        },
        { property: "og:locale", content: "id_ID" },
        { property: "og:site_name", content: process.env.nameApp },
        {
          property: "keywords",
          content: process.env.descApp,
        },

        { property: "fb:app_id", content: "58767959566756" },
        { name: "application-name", content: process.env.nameApp },
        {
          name: "twitter:title",
          content: process.env.nameApp,
        },
        {
          name: "twitter:description",
          content: process.env.descApp,
        },

        {
          itemprop: "name",
          content: process.env.nameApp,
        },
        {
          itemprop: "description",
          content: process.env.descApp,
        },
        {
          itemprop: "image",
          content: process.env.urlApp + "/icon.png",
        },
        { p: "og:image", c: process.env.urlApp + "/icon.png" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        { rel: "canonical", href: process.env.urlApp },
      ],
    };
  },
};
</script>
