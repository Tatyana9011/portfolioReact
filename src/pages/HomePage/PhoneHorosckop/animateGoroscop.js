
const animateGoroscop = (rootNode) => {
  const elemAll = rootNode.querySelectorAll(`.pulse`);
  elemAll.forEach((elem, i) => {
    elem.animate(
      {
        transform: [`rotate(${i === 1 ? -10 : 10}deg)`],
      },
      {
        direction: "alternate",
        duration: 3000,
        iterations: Infinity,
      }
    );
  });

  const elemAllStars = rootNode.querySelectorAll(".phone_image_goroscop__star");
  elemAllStars.forEach((elem, i) => {
    elem.animate(
      {
        transform: [`rotate(${i === 1 ? -10 : 10}deg)`],
      },
      {
        direction: "alternate",
        duration: 5000,
        iterations: Infinity,
      }
    );
  });
};

export default animateGoroscop;