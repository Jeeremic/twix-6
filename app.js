var change = document.querySelector('.change-img');
var change2 = document.querySelector('.change-img2');

change.addEventListener('click', toggleTheme);
change2.addEventListener('click', toggleTheme);

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
}

function toggleTheme(e) {
    e.preventDefault();
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
       change.classList.remove('invisible');
       change.classList.add('visible');
       change2.classList.remove('visible');
       change2.classList.add('invisible');
   } else {       
       setTheme('theme-dark');
       change.classList.remove('visible');
       change2.classList.remove('invisible');
       change.classList.add('invisible');
       change2.classList.add('visible');
   }
}
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');   
       change.classList.add('invisible');
       change2.classList.remove('visible');    
   } else {
       setTheme('theme-light');
       change2.classList.remove('visible');
       change2.classList.add('invisible');

   }
})();
