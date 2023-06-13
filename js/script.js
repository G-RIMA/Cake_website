// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import cake7 from '../assets/cake7.jpg'
import cake8 from '../assets/cake8.jpg'
import cake9 from '../assets/cake9.jpg'
import Aos from 'aos'
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingcakes = [
    'Swiss Rolls',
    'Chocolate Cake',
    'Passion Fruit Cake',
    'Orange Cake'   
];

const trendingDrinks = [
    "Cherry Pie",
    "Pumkin Pie",
    "Sweet Potato Pie",
    "Apple Pie",
]

const cards = [
    {
        imgSrc: cake9,
        alt: "cake9",
        title: "Chocolate Cake",
        rating: "4.8",
        price: "Ksh. 2000"
    },
    {
        imgSrc: cake7,
        alt: "cake7",
        title: "Christmas Cookies",
        rating: "4.8",
        price: "Ksh. 1900",
        active: true
    },
    {
        imgSrc: cake8,
        alt: "cake8",
        title: "Cherry Pie",
        rating: "4.8",
        price: "Ksh 1300"
    }
];