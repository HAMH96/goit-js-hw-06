const categories = document.querySelectorAll("#categories > li");
const numberOfCategories = categories.length;
console.log(`Number of categories:${numberOfCategories}`); 
categories.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.innerHTML}`);
    console.log(`Elements: ${category.getElementsByTagName("li").length}`);
});
