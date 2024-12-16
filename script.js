// Ouvre le menu latéral
function openNav() {
  document.getElementById("mySidenav").style.width = "250px"; // Largeur du menu
}

// Ferme le menu latéral
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const themeToggle = document.getElementById('themeToggle');
const closebtn = document.getElementById('closebtn');

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    // Mode sombre
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
  } else {
    // Mode clair
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
  }
});

// Code pour fermer le menu (si nécessaire)
closebtn.addEventListener('click', function() {
  document.querySelector('.sidenav').style.width = '0';
});


