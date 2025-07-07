  function showPopup(title, price, img) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-price').textContent = price;
    document.getElementById('popup-img').src = img;
    document.getElementById('popup').style.display = 'flex';
  }
function showIntroPopup() {
  document.getElementById("introPopup").style.display = "flex";
}

function goToMenu() {
  hidePopup();
  document.getElementById("menu").scrollIntoView({ behavior: 'smooth' });
}
  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }
