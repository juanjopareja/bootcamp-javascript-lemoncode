
// Hotels
var hotels = {
    Perla: {
        name: 'Perla',
        location: 'Mallorca',
        img: 'img/perlahotel.jpeg'
    },

    Senator: {
        name: 'Senator',
        location: 'Valencia',
        img: 'img/senatorhotel.jpg'
    },

    Expo: {
        name: 'Expo',
        location: 'Barcelona',
        img: 'img/expohotel.jpg'
    }
};

// Score
var hotelScore = {
    1: 
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>"
};

// Selected Hotel
var selectedHotel = prompt('¿Sobre qué hotel quieres hacer la reseña? (Perla, Senator o Expo)');
document.getElementById('hotel-name').innerHTML = "Hotel " + hotels[selectedHotel].name;
document.getElementById('hotel-location').innerHTML = "Localización: " + hotels[selectedHotel].location;
document.getElementById('image').src = hotels[selectedHotel].img;
console.log(selectedHotel);

// Scored Hotel
var selectedScore = prompt('¿Qué puntuación le das al hotel? (del 1 al 5)');
document.getElementById('score').innerHTML = hotelScore[selectedScore];

// Hotel Review
var hotelReview = prompt('Escribe tu opinión del hotel');
document.getElementById('hotel-review').innerHTML = hotelReview;

// Anonymous Review
var anomymousReview = confirm('¿Quieres que la reseña sea anónima?');
document.getElementById('anonymous').checked = anomymousReview;

// Show Results
document.getElementsByTagName('body')[0].style.opacity = 1;
