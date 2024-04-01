const imageContainer = document.getElementById('random-cat-image');
const button = document.getElementById('random-cat-button');

button.onclick = () => {
  fetchRandomCat();
};

async function fetchRandomCat() {
  disableButton();

  fetch('https://cataas.com/cat')
    .then(response => { return response.blob() })
    .then(blob => {
      const image = URL.createObjectURL(blob);
      imageContainer.setAttribute('src', image);
      enableButton();
    });
};

function disableButton() {
  button.disabled = true;
};

function enableButton() {
  button.disabled = false;
}