window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight) {
        document.querySelector('.intro').style.display = 'none'; // Hide the intro text
        document.querySelector('.content').style.display = 'block'; // Show the content text
    }
});
