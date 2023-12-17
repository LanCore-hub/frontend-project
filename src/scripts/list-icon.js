function toogleIconColor(element) {
  var icons = document.querySelectorAll('.list-icon');
  icons.forEach(function (icon) {
    var gElement = icon.querySelector('g');
    if (gElement) {
      gElement.setAttribute('stroke', icon === element ? '#ea1313' : '#000');
    }
  });
}
window.toogleIconColor = toogleIconColor;

const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');

var wrappers = document.querySelectorAll('.inretesting-states__wrapper');
var blogs = document.querySelectorAll('.blog');

function changeIconList() {
  wrappers.forEach(function (wrapper) {
    wrapper.style.display = 'contents';
  });
  blogs.forEach(function (blog) {
    blog.style.flexDirection = 'row';
  });
  icon2.disabled = true;
  icon1.disabled = false;
}

function changeIconGrid() {
  wrappers.forEach(function (wrapper) {
    wrapper.style.display = 'grid';
  });
  blogs.forEach(function (blog) {
    blog.style.flexDirection = 'column';
  });
  icon1.disabled = true;
  icon2.disabled = false;
}

icon1.addEventListener('click', changeIconList);
icon2.addEventListener('click', changeIconGrid);
