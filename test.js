function afficherModal(id) {
  var modal = document.getElementById("myModal");
  var btn = document.getElementsByClassName("myBtn");
  modal.style.display = "block";

  document.querySelector(".modal-content .qty").value = 1;

  if (id == "magazine") {
    document.querySelector(".modal-content .title").innerHTML = "magazine";
    document.querySelector(".modal-content .price").innerHTML = "15€";
    document.querySelector(".modal-content .unite-price").value = "15";
  }
  if (id == "livre") {
    document.querySelector(".modal-content .title").innerHTML = "Livre";
    document.querySelector(".modal-content .price").innerHTML = "25€";
    document.querySelector(".modal-content .unite-price").value = "25";
  }
}

function calculeTotal() {
  var price = document.querySelector(".modal-content .unite-price").value;
  var qty = document.querySelector(".modal-content .qty").value;
  var total = qty * price;

  document.querySelector(".modal-content .price").innerHTML = total + "€";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
