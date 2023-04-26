const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");
const imgElementsArray = images.map((image) => {
  return `<img src=${image.url} alt=${image.alt}>`;
});

gallery.insertAdjacentHTML("afterbegin", imgElementsArray.join(""));

gallery.style.display = "flex";
gallery.style.gap = "10px";
const imageContainer = document.querySelectorAll("img");
imageContainer.forEach(image => {
  image.style.width = "315px";
  image.style.height = "187px";
});



