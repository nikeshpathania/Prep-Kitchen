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

function openNav() {
  //document.getElementById("overlay").style.width = "250px";
  document.querySelector('.hid_icon').classList.add('hideMenu');
  document.querySelector('.closebtn').style.display= 'block';
}


function closeNav() {
 // document.getElementById("overlay").style.width  = "0";
 document.querySelector('.hid_icon').classList.remove('hideMenu');
 document.querySelector('.closebtn').style.display= 'none';
 
}


