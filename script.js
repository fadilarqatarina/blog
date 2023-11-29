let btn = document.querySelector(".submit-btn");

const btnPressed = function () {
  function applyTransform() {
    btn.style.transform = "translateY(-7px)";
  }

  function resetTransform() {
    btn.style.transform = btn.style.transform = "translateY(0)";
  }

  btn.addEventListener("click", function () {
    applyTransform();
    setTimeout(resetTransform, 400);
  });
};

btnPressed();
