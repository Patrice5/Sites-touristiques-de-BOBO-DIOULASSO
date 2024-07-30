// Exemple d'animation au survol
document.querySelector('.search-form button').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

document.querySelector('.search-form button').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
