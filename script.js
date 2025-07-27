let itemcontainer = document.querySelector('.itemcontainer');
let items = document.querySelectorAll('.item');
itemcontainer.addEventListener('click', function(event) {   
    if (event.target.classList.contains('item')) {
        event.target.style.textDecoration = 'line-through';
    }
});