export default (context, inject) => {
  const formatNumber = (value) => {
    const val = (value / 1).toFixed(0).replace(".", ",");
    const res = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return res;
  };
  inject("formatNumber", formatNumber);
};
