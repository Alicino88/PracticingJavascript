let cardbuttons = document.querySelectorAll(".card button");
let modalInner = document.querySelector(".modal-inner");
let modalOuter = document.querySelector(".modal-outer");

/*the event object (often called either e or event) is passed automatically to the event handler or callBackFunction. To access it we must include it as a first parameter.
It provides a lot of useful information about the event. In this case it will tell us which button we have clicked on*/
function handleCardButtonClick(event) {
  let button = event.currentTarget;
  /*closest is a method similar to querySelector exept it looks "up" instead of "down" for the closest element with the class .card*/
  let card = button.closest(".card");
  /*below how to grab the source of the image, description and title*/
  let imgSrc = card.querySelector("img").src;
  let description = card.dataset.description;
  console.log(description);
  let title = card.querySelector("h2").textContent;
  /*below the grabbed info are rendered inside the modal*/
  modalInner.innerHTML = `
  <img width="600" height="600" src="${imgSrc.replace(
    "200",
    "600"
  )}" alt="${title}" />
  <p>${description}</p>
  `;
  /*to show the modal we add the class of open to the outer modal element*/
  modalOuter.classList.add("open");
}

/*below we attach an event to all the single buttons using the method forEach*/
cardbuttons.forEach((button) =>
  button.addEventListener("click", handleCardButtonClick)
);

/*function to hide the modal*/
function closeModal() {
  modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", function (event) {
  /*by adding the exlamation mark we turn the variable into a boolean
    if we click on the modal the boolean will be true*/
  /*if, the element you are clicking on has a class of modal-inner, then it is true otherwise false*/
  let isOutside = !event.target.closest(".modal-inner");
  console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
