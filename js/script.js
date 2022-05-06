let btnSideBar = document.getElementById('btn-sidebar');
let ul = document.querySelector('ul');
let nav = document.querySelector('nav');
let btnExit = document.getElementById('btn-exit');
let btnSwitch = document.getElementById('btn-switch');
let body = document.querySelector('body');
let islight = true;
// getComputedStyle(document.documentElement).getPropertyValue('--background-grey');

btnSideBar.addEventListener('click', () => {
    ul.classList.add('nav-menu');
    btnExit.style.display = 'block';
    btnExit.style.zIndex = 1000;
});

btnExit.addEventListener('click', () => {
    ul.classList.remove('nav-menu');
    btnExit.style.display = 'none';
});

function switchTheme() {
    if (islight) {
        islight = false;
        // body.style.backgroundColor = '#222433';
        // document.documentElement.style.setProperty('--background-grey', '#222433');
    } else {
        islight = true;
        body.style.backgroundColor = '#f2f3f6';
    }
}



