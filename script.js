(function () {
  "use strict";

  const detailsForm = document.getElementById("destination_details_form");
  detailsForm.addEventListener("submit", handleformsubmit);

  function handleformsubmit(event) {
    event.preventDefault();
    const destName = event.target.elements["name"].value;
    const destLocation = event.target.elements["location"].value;
    const destPhoto = event.target.elements["photo"].value;
    const destDesc = event.target.elements["description"].value;

    for (let i = 0; i < detailsForm.length; i++) {
      detailsForm.elements[i].value = "";
    }

    const destcard = CreateDestinationCard(
      destName,
      destLocation,
      destPhoto,
      destDesc
    );

    const wishlistcontainer = document.getElementById("destinations_container");
    if (wishlistcontainer.children.length === 0) {
      document.getElementById("title").innerHTML = "My WishList";
    }

    document.querySelector("#destinations_container").appendChild(destcard);
  }

  function CreateDestinationCard(name, location, photoURL, description) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.setAttribute("alt", name);
    const constantphotoURL = "images/signpost.jpg";
    if (photoURL.length === 0) {
      //img.src = constantphotoURL;
      img.setAttribute("src", constantphotoURL);
    } else {
      img.setAttribute("src", photoURL);
    }
    card.appendChild(img);

    const cardbody = document.createElement("div");
    cardbody.className = "card-body";

    const cardtitle = document.createElement("h3");
    cardtitle.innerHTML = name;
    cardbody.appendChild(cardtitle);

    const cardsubtitle = document.createElement("h4");
    cardsubtitle.innerHTML = location;
    cardbody.appendChild(cardsubtitle);
    if (description.length !== 0) {
      const cardtext = document.createElement("p");
      cardtext.className = "card-text";
      cardtext.innerHTML = description;
      cardbody.appendChild(cardtext);
    }

    const cardbtn = document.createElement("button");
    cardbtn.innerHTML = "Remove";
    cardbtn.addEventListener("click", removeDestination);
    cardbody.appendChild(cardbtn);
    card.appendChild(cardbody);
    return card;
  }

  function removeDestination(event) {
    const card = event.target.parentElement.parentElement;
    card.remove();
  }
})();
