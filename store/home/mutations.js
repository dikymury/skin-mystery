export default {
  SET_SLIDERPRODUCTS(state, list) {
    state.sliderProducts = list;
  },
  SET_INFINITEPRODUCTS(state, list) {
    state.infiniteProductsPage = state.infiniteProductsPage + 1;
    state.infiniteProducts = [...state.infiniteProducts, ...list];
  },
};
