// Search
function search() {
  var searchBar = document.getElementById('searchBar');

    document.querySelector('.icon-close').addEventListener('click', function(){
        document.getElementById('searchBar').style.display = "none";
    
    });

  document.querySelector('.search-icon').addEventListener('click', function() {
    searchBar.style.display = "block";
    
  })
}
search();

//  Menu Fixed

function fixedHeader() {
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

}
fixedHeader();

// function slideMenu() {
  
// var overlay = document.getElementById('overlay');
// var closeMenu = document.getElementById('close-menu');

// document.getElementById('open-menu').addEventListener('click', function() {
//     overlay.classList.add('show-menu');
//     console.log('clicked');
// });
// document.getElementById('close-menu').addEventListener('click', function() {
//     overlay.classList.remove('show-menu');
// });
// }
// slideMenu();


/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("overlay").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("overlay").style.width  = "0";
}