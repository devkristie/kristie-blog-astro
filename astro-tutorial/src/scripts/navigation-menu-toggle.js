const navigationMenu = document.querySelector('.menu');

navigationMenu?.addEventListener('click', () => {
    const isExpanded = navigationMenu.getAttribute('aria-expanded') === 'true';
    navigationMenu.setAttribute('aria-expanded', `${!isExpanded}`);
});