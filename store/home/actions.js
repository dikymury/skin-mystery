export default {
  getSliderProducts({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get("/unstable/v2.0/store/find/items?page=1&item_limit=10")
        .then((response) => {
          if (response.data.status_code === 200) {
            commit("SET_SLIDERPRODUCTS", response.data.data.items);
          }
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getInfiniteProducts({ commit, state }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(
          "/unstable/v2.0/store/find/items?item_limit=12&page=" +
            state.infiniteProductsPage
        )
        .then((response) => {
          if (response.data.status_code === 200) {
            commit("SET_INFINITEPRODUCTS", response.data.data.items);
          }
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
