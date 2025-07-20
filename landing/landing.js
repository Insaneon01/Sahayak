// JavaScript to handle modal open and close
document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// JavaScript to handle modal open and close
document.getElementById('openModalBtnL').addEventListener('click', function() {
    document.getElementById('modalL').style.display = 'flex';
});

document.getElementById('closeModalBtnL').addEventListener('click', function() {
    document.getElementById('modalL').style.display = 'none';
});
document.getElementById('menuToggle').addEventListener('click', function() {
    // Toggle the 'active' class on the <nav> element
    const nav = document.querySelector('nav');
    
    // Toggle the active class to show/hide the nav
    nav.classList.toggle('active');
  });
   