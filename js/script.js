// import images as relative image path won't work with vite/vercel.
import check from '/assets/check.svg'
import star from '/assets/star.svg'
import dessert9 from '/dessert-assets/dessert-9.png'
import dessert7 from '/dessert-assets/dessert-7.png'
import dessert1 from '/dessert-assets/dessert-1.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingDesserts = [
    'Banana Pudding',
    'Cherry Pie',
    'Tiramisu',
    'Chocolate Chip Cookie',
    'Strawberry Shortcake',
    'Vanilla Macaron'
];

const trendingDrinks = [
    "Vanilla Latte",
    "Cappuccino",
    "Caramel Macchiato",
    "Hot Chocolate",
    "Cafe au Lait",
    "Jasmine Tea",
]

const cards = [
    {
        imgSrc: dessert9,
        alt: "dessert-9",
        title: "Buttercream Cupcake",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: dessert7,
        alt: "dessert-7",
        title: "Original Sundae",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: dessert1,
        alt: "dessert-1",
        title: "Strawberry Cake",
        rating: "4.8",
        price: "$21.00"
    }
];