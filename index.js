// Dom - document object model
const firstDiv = document.getElementById("div-id");

const allHeading = document.getElementsByClassName("h1-class");

setInterval(() => {
  let time =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();

  firstDiv.innerHTML = time;
}, 1000);

allHeading[0].style.backgroundColor = "red";
allHeading[1].style.backgroundColor = "green";

// console.log(document.body);
// console.log(document.doctype);

// const allHeadingQuery = document.querySelector(".h1-class");

// Events
const imgId = document.getElementById("img-id");
const handleEnter = () => {
  imgId.style.transform = "scale(1.5)";
};
const handleLeave = () => {
  imgId.style.transform = "scale(1)";
};
