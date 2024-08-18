const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.log');
hiddenElements.forEach((el) => observer.observe(el));

ScrollReveal({ 
      reset: true,
      distance: '60px',
      duration: 2500,
      delay: 400 
    });

    ScrollReveal().reveal('.toggle', { delay: 600, origin: 'left'});
    ScrollReveal().reveal('.search', { delay: 600, origin: 'right'});
    ScrollReveal().reveal('.pic', { delay: 600 });
    ScrollReveal().reveal('.cont', { delay: 1900, origin: 'top'});
    ScrollReveal().reveal('.ab', { delay: 2500, origin: 'bottom'});
    ScrollReveal().reveal('.about', { delay: 600, origin: 'top'});
    ScrollReveal().reveal('.pic2', { delay: 900, origin: 'right'});
    ScrollReveal().reveal('.text', { delay: 1400, origin: 'left'});
    ScrollReveal().reveal('.heading', { delay: 800, origin: 'bottom'});
    // ScrollReveal().reveal('.card', { delay: 1400, origin: 'left'});






    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Engineer", "Freelancer", "designer", "Tech enthuisatic"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const wrapper = document.querySelector(".sliderWrapper");
  const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
