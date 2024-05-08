let logo = document.getElementById("logo");
let navigation = document.getElementById("navbar");
window.onscroll = function () {

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navigation.style.backgroundColor = "white";
    navigation.style.color = "black";
    navigation.classList.add('border-bottom-black')
    logo.innerHTML = '<img src="./imgs/nb01.png" alt="">';
  } else {
    navigation.style.backgroundColor = "";
    navigation.style.color = "white";
    navigation.classList.remove('border-bottom-black')
    logo.innerHTML = '<img src="./imgs/nb02.png" alt="">';
  }

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }

};



