import heroImg1 from "../assets/images/sliders/1.png"
import heroImg2 from "../assets/images/sliders/2.png"
import heroImg3 from "../assets/images/sliders/3.png"
import heroImg4 from "../assets/images/sliders/4.png"

import catImg1 from "../assets/images/categories/1.png"; // Earphone
import catImg2 from "../assets/images/categories/2.png"; // Watch
import catImg3 from "../assets/images/categories/3.png"; // Laptop
import catImg4 from "../assets/images/categories/4.png"; // Console
import catImg5 from "../assets/images/categories/5.png"; // Oculus/VR
import catImg6 from "../assets/images/categories/6.png"; // Speaker

export const heroSlider = [
  {
    id: 1,
    title: "Apple AirPods Max Wireless",
    desc: "Active Noise Cancelling, Transparency Mode, Spatial Audio for theater-like sound.",
    price: "$779.99",
    image: heroImg1,
    bg: "radial-gradient(50% 50% at 50% 50%, #C7F6D0 0%, #7CB9E8 100%)",
  },
  {
    id: 2,
    title: "Sony WH-1000XM5",
    desc: "Industry-leading noise cancellation with 30 hours of battery life and crystal clear calls.",
    price: "$399.99",
    image: heroImg2,
    bg: "radial-gradient(50% 50% at 50% 50%, #1e3a5f 0%, #0d1b2a 100%)",
  },
  {
    id: 3,
    title: "Bose QuietComfort Ultra",
    desc: "Breakthrough spatialized audio and world-class quiet for a more immersive experience.",
    price: "$429.00",
    image: heroImg3,
    bg: "radial-gradient(50% 50% at 50% 50%, #4a4e69 0%, #22223b 100%)",
  },
  {
    id: 4,
    title: "Beats Studio Pro",
    desc: "Fully custom acoustic platform with Personalized Spatial Audio and USB-C lossless audio.",
    price: "$349.99",
    image: heroImg4,
    bg: "radial-gradient(50% 50% at 50% 50%, #6d4c41 0%, #3e2723 100%)",
  },
];

export const categories = [
  {
    id: 1,
    subtitle: "Enjoy",
    title: "With",
    name: "EARPHONE",
    image: catImg1,
    bgColor: "#1a1a1a", // Black
    textColor: "white",
    gridSize: "col-sm-12 col-md-6 col-lg-3"
  },
  {
    id: 2,
    subtitle: "New",
    title: "Wear",
    name: "GADGETS",
    image: catImg2,
    bgColor: "#fdbd33", // Yellow
    textColor: "white",
    gridSize: "col-sm-12 col-md-6 col-lg-3"
  },
  {
    id: 3,
    subtitle: "Trend",
    title: "Devices",
    name: "LAPTOP",
    image: catImg3,
    bgColor: "#f42c37", // Red
    textColor: "white",
    gridSize: "col-sm-12 col-md-12 col-lg-6"
  },
  {
    id: 4,
    subtitle: "Best",
    title: "Gaming",
    name: "CONSOLE",
    image: catImg4,
    bgColor: "#cccccc", // Grey
    textColor: "white",
    gridSize: "col-sm-12 col-md-12 col-lg-6"
  },
  {
    id: 5,
    subtitle: "Play",
    title: "Game",
    name: "OCULUS",
    image: catImg5,
    bgColor: "#2dcc6f", // Green
    textColor: "white",
    gridSize: "col-sm-12 col-md-6 col-lg-3"
  },
  {
    id: 6,
    subtitle: "New",
    title: "Amazon",
    name: "SPEAKER",
    image: catImg6,
    bgColor: "#1376f4", // Blue
    textColor: "white",
    gridSize: "col-sm-12 col-md-6 col-lg-3"
  }
];