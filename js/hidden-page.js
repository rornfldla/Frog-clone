document.querySelector('.hidden-space').addEventListener('click', function() {
    const hiddenPage = document.querySelector('.user-component__hidden-page');
    hiddenPage.style.visibility = 'visible';
    hiddenPage.style.zIndex = '10';
});

document.querySelector('.hidden-close').addEventListener('click', function() {
    const hiddenPage = document.querySelector('.user-component__hidden-page');
    hiddenPage.style.visibility = 'hidden';
    hiddenPage.style.zIndex = '-1';
});