const categoriesList = document.querySelectorAll("ul#categories li.item");
let categoriesCount = categoriesList.length;
console.log(`Number of categories: ${categoriesCount}`);



const categoriesList = document.getElementById("categories");
const categoriesCount = categoriesList.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoriesCount}`);

categoriesList.querySelectorAll("li.item").forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const itemsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});

//1
let categoriesLiElements = document.querySelectorAll("ul#categories li.item");
let categoriesCount = categoriesLiElements.length;
//в тегу з айди categories шукаемо теги li з класом item -> NodeList - псевдомасив елементів
console.log(
  `Кількість категорій у тегу ul#categories дорівнює ${categoriesCount} `
);
// let categoriesCount = document.querySelectorAll("ul#categories li.item").length;
// console.log(`Кількість категорій у тегу ul#categories дорівнює ${categoriesCount}`);
//2
categoriesLiElements.forEach((categorie, i) => {
  let categorieHeading = categorie.children[0]; //посилання на заголовок категорії
  let subList = categorie.children[1]; //спочатку знаходимо лінк на ul, а потім знаходимо дочірні елементи ul
  let subListItemsCount = subList.children.length;

  console.log(
    `Заголовок категорії номер ${i + 1} є ${categorieHeading.textContent}`
  );
  console.log(
    `Кількість елементів у категорії ${categorieHeading.textContent} дорівнює ${subListItemsCount} `
  );
  categorieHeading.classList.add("main_heading");
  categorie.classList.add("main_list_item_bg");
  //   categorieHeading.style.cssText = `
  //         font-weight: 600!important;
  //         font-size: 24px;
  //         line-height: 32px;
  //         letter-spacing: 0.04em;
  //         color: #2E2F42;
  //     `;
});
