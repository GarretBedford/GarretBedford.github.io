
function button1Clicked() {
  document.getElementById('button-1').classList.toggle('was-clicked');
}

function image1Hover() {
  document.getElementById('image-1').classList.toggle('was-entered');
}

function windowLoaded() {
  console.log('loaded ok!');
  document.getElementById('button-1').addEventListener('click', button1Clicked);
  document.getElementById('image-1').addEventListener('mouseenter', image1Hover);
    document.getElementById('image-1').addEventListener('mouseleave', image1Hover);
}

window.onload = windowLoaded;
