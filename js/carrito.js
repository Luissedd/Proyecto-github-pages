const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu'); 
const sidebar = document.querySelector('.aside-visible'); 


openMenuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});


closeMenuBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});
