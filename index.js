// Active menu
function openNav() {
  document.getElementById("menu-list").classList.toggle("show-menu");
}

function closeNav() {
  document.getElementById("menu-list").classList.remove("show-menu");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu')) {

    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-menu')) {
        openDropdown.classList.remove('show-menu');
      }
    }
  }
}


// Initial seima 
const mySlide = new Siema({
    draggable: false
});

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySlide.prev());
next.addEventListener('click', () => mySlide.next());

const branding = document.getElementById('branding');
const marketing = document.getElementById('marketing');
const media = document.getElementById('media');
const developer = document.getElementById('developer');

branding.addEventListener('click', () => mySlide.goTo(0));
marketing.addEventListener('click', () => mySlide.goTo(1));
media.addEventListener('click', () => mySlide.goTo(2));
developer.addEventListener('click', () => mySlide.goTo(3));


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Works dropdown categories
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
