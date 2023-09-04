
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');

const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');

// for (var i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     if (current.length > 0) { 
//       current[0].className = current[0].className.replace(" active", "");
//     }
//     this.className += " active";
//     });
// }
const menu = document.getElementById('menu');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener("click", () => {
    menu.style.right = '0';
    menu.style.transitionDuration = '1s';
  });
close.addEventListener("click", () => {
  menu.style.right = '-200px';
  menu.style.transitionDuration = '1s';
  });

tab1.addEventListener('click', () => {
    tab1.classList.add('active');
    tab2.classList.remove('active');
    tab3.classList.remove('active');
    tab1.style.transitionDuration = '1s';
    // content3.style.zIndex = '-2';
    content3.style.opacity = '0';
    content3.style.transitionDuration = '1s';
    // content2.style.zIndex = '-3';
    content2.style.opacity = '0';
    content2.style.transitionDuration = '1s';
    // content1.style.zIndex = '3';
    content1.style.opacity = '1';
    content1.style.transitionDuration = 's';
});

tab2.addEventListener('click', () => {
    tab1.classList.remove('active');
    tab3.classList.remove('active');
    tab2.classList.add('active');
    tab2.style.transitionDuration = '1s';
    // content1.style.zIndex = '-4';
    content1.style.opacity = '0';
    content1.style.transitionDuration = '1s';
    // content2.style.zIndex = '3';
    content2.style.opacity = '1';
    content2.style.transitionDuration = '1s';
    // content3.style.zIndex = '-2';
    content3.style.opacity = '0';
    content3.style.transitionDuration = '1s';
});

tab3.addEventListener('click', () => {
    tab1.classList.remove('active');
    tab2.classList.remove('active');
    tab3.classList.add('active');
    tab3.style.transitionDuration = '1s';
    content1.style.opacity = '0';
    // content1.style.zIndex = '-5';
    content1.style.transitionDuration = '1s';
    // content2.style.zIndex = '-3';
    content2.style.opacity = '0';
    content2.style.transitionDuration = '1s';
    // content3.style.zIndex = '2';
    content3.style.opacity = '1';
    content3.style.transitionDuration = '1s';
});

function topFunction() {
    var top = document.getElementById('top');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};