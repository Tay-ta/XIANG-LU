//Xiang Lu
//200563938
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-section form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});