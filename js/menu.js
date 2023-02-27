const btnToggle = document.querySelector('.open-menu2')

btnToggle.addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
})