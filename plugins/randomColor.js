export default (context, inject) => {
  const randomColor = () => {
    const bg = [
      "#F5ECE8",
      "#FBE7E8",
      "#FCF9EA",
      "#F1F6E7",
      "#E9F2FF",
      "#DBDBDB",
    ];
    return bg[Math.floor(Math.random() * bg.length)];
  };
  inject("randomColor", randomColor);
};
