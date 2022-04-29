function priceChange() {
  let toggleSwitch = document.getElementById("toggleSwitch");
  let price1 = document.getElementsByClassName("price1");
  let price2 = document.getElementsByClassName("price2");

  for (let i = 0; i < price1.length; i++) {
    if (toggleSwitch.checked == true) {
      price1[i].style.display = "block";
      price2[i].style.display = "none";
    } else if (toggleSwitch.checked == false) {
      price1[i].style.display = "none";
      price2[i].style.display = "block";
    }
  }
}
priceChange();