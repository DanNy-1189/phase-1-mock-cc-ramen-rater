// write your code here

document.addEventListener('DOMContentLoaded', fetchData());

function fetchData () {
    fetch ('http://localhost:3000/ramens')
    .then (resp => resp.json())
    .then (ramens => {
        renderRamenImage(ramens);
        console.log(ramens);
    });
};

function renderRamenImage(ramens) {
    ramens.forEach(ramen => {
        const div = document.getElementById('ramen-menu');
        const img = document.createElement('img');
        div.append(img);
        img.classList = 'ramen-image';
        img.src = ramen.image
        img.addEventListener('click', () => {
            renderRamenDetail(ramen);
        });
   });
};

function renderRamenDetail(ramen) {
    const image = document.querySelector('.detail-image');
    image.src = ramen.image;

    const h2 = document.querySelector('.name');
    h2.textContent = ramen.name;

    const h3 = document.querySelector('.restaurant');
    h3.textContent = ramen.restaurant;

    const span = document.querySelector('span');
    span.textContent = ramen.rating;

    const p = document.getElementById('comment-display');
    p.textContent = ramen.comment;
};

function addRamen() {
    const form = document.getElementById('new-ramen');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newName = document.getElementById('new-name').value;
        const newRestaurant = document.getElementById('new-restaurant').value;
        const newImage = document.getElementById('new-image').value;
        const newRating = document.getElementById('new-rating').value;
        const textArea = document.getElementById('new-comment').value;

        const div = document.getElementById('ramen-menu');

        const newRamenImage = document.createElement('img');
        newRamenImage.classList = 'ramen-image';
        newRamenImage.src = newImage;
        div.append(newRamenImage);

        newRamenImage.addEventListener('click', () => {
            const newRamen = {
                image: newImage,
                name: newName,
                restaurant: newRestaurant,
                rating: newRating,
                comment: textArea
            };
            renderRamenDetail(newRamen);
        });
        form.reset();
    }); 
};
addRamen()
