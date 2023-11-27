const link = () => {
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = e.currentTarget as HTMLElement;
      const targetId = target.getAttribute("href");

      // Check if targetId is not null
      if (targetId) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
};

export default link;
