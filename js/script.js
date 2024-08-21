
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    var isMenuOpen = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', !isMenuOpen);
    mobileMenu.classList.toggle('block', isMenuOpen);

    // Toggle the icons
    var icons = this.querySelectorAll('svg');
    icons.forEach(icon => icon.classList.toggle('hidden'));
});

