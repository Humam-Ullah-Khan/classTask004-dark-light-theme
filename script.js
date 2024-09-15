document.getElementById('theme').addEventListener('click', function() {
    var body = document.body;
    var button = document.getElementById('theme');

    if (body.classList.contains('night-theme')) {
        body.classList.remove('night-theme');
        button.textContent = 'Night Theme';
    } else {
        body.classList.add('night-theme');
        button.textContent = 'Day Theme';
    }
});
