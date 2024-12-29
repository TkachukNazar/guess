window.onload = function () {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onmouseover = showAnswer;
    images[i].onmouseout = showBlur;
  }
};

const pictures = {
  one: "Liza",
  two: "Girl",
};
function showAnswer(event) {
  let image = event.target;
  let name = image.id;
  name = name + ".jpg";
  image.src = "images/" + name;
}

function showBlur(event) {
  let image = event.target;
  let name = image.id;
  name = name + "blur.jpg";
  image.src = "images/" + name;
}
