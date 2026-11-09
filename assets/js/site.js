const menuBtn=document.querySelector('.menu-btn'),navLinks=document.querySelector('.nav-links');
menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);document.body.classList.toggle('menu-open',open)});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}));
const box=document.querySelector('.lightbox'),boxImg=box.querySelector('img');document.querySelectorAll('[data-zoom]').forEach(img=>img.addEventListener('click',()=>{boxImg.src=img.src;box.classList.add('open');box.setAttribute('aria-hidden','false')}));
function closeBox(){box.classList.remove('open');box.setAttribute('aria-hidden','true');boxImg.removeAttribute('src')};box.querySelector('button').addEventListener('click',closeBox);box.addEventListener('click',e=>{if(e.target===box)closeBox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
// Keyboard-accessible image zoom and escape-to-close menus
document.querySelectorAll('img[data-zoom]').forEach(img=>img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();img.click()}}));
