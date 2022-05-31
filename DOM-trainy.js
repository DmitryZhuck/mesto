const div = document.createElement("div");
div.classList.add("wrapper");
console.log(div);

const body = document.querySelector("body");
body.append(div);

const header = document.createElement("h1");
header.textContent = "DOM document object model";

div.insertAdjacentElement("beforebegin", header);

const ul = `
<ul>
<li>один</li>
<li>два</li>
<li>три</li>
</ul>
`;

div.innerHTML = ul;

// СОЗДАЕМ ИХОБРАЖЕНИЕ

const img = document.createElement("img");
img.src = `https://picsum.photos/240`;
img.width = 240;
img.classList.add("super");
img.alt = "Superman";
div.append(img);
console.log(img);

// СОЗДАЕМ pDIV

const elemHTML = `
<div class='pDiv'>
    <p>Парграф 1</p>
    <p>Парграф 2</p>
</div>
`;

const ulList = div.querySelector("ul");
ulList.insertAdjacentHTML("beforebegin", elemHTML);
const pDIV = document.querySelector(".pDiv");
pDIV.children[1].classList.add("text");
pDIV.children[0].remove();

// СОЗДАТЬ Ф-ЦИЮ КОТОРАЯ БУДЕТ ПРИНИМАТЬ НА ВХОД 3 ПАРАМЕТРА

const carList = [
  { brand: "tesla", year: 2015, color: "red" },
  { brand: "lexus", year: 2016, color: "silver" },
  { brand: "nissan", year: 2012, color: "black" },
];

const generateAutoCard = (brand, color, year) => {
  const curDate = new Date();
  const curYear = curDate.getFullYear();
  return `
    <div class="autoCard">
      <h2>${brand.toUpperCase()} ${year}</h2>
      <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто ${
    curYear - year
  } лет</p>
      <p>цвет авто: ${color}</p>
    
    <button type='button' class='btn'>Delete card</button>
    </div>
    `;
};

const carsDiv = document.createElement("div");
carsDiv.classList.add("autos");

const carsHTML = carList
  .map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
  })
  .join(" ");

carsDiv.innerHTML = carsHTML;
div.insertAdjacentElement("beforebegin", carsDiv);

console.log(carsDiv);

const buttons = document.querySelectorAll(".btn");
function handleClick(e) {
  const currentButton = e.currentTarget;
  currentButton.closest(".autoCard").remove();
}

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

const arrr = [1, 2, 3, 4, 5];

const fart = arrr.map((e) => {
  e * 2;
});

console.log(fart);
