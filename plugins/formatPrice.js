export default (context, inject) => {
  const formatPrice = (value) => {
    const val = (value / 1).toFixed(0).replace(".", ",");
    const res = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const l = res.split(".").shift();
    const r = res.slice(l.length);
    return "Rp<span class='text-[32px] font-bold'>" + l + "</span>" + r;
  };
  inject("formatPrice", formatPrice);
};
