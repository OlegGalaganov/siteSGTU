
//1
let firstArray = [1, 2, 3, 4, 5, 6];
let secondArray = new Array(1, 2, 3);
let thirdArray = [
    [1, 2, 3],
    [4, 5, 6]
]

//2
alert(firstArray[4]);
firstArray[4] = 9;

//3 "выведите ее значение при наведении на любой элемент" Наведение на странице? 
let arrLength = firstArray.length;
let arrDiv = document.getElementById("arr");
let popupText = document.getElementById("popupText");
arrDiv.textContent = firstArray;
popupText.textContent = arrLength;

function showPopup(evt) {
    let arrPos = arrDiv.getBoundingClientRect();
    popup.style.left = (arrPos.left + 170) + "px";
    popup.style.top = (window.scrollY + arrPos.top - 50) + "px";
    popup.style.display = "block";
}
function hidePopup(evt) {
    popup.style.display = "none";
}

arrDiv.addEventListener("mouseover", showPopup);
arrDiv.addEventListener("mouseout", hidePopup);

//3 Или имеется ввиду вывод через цикл длину массива при прохождении по каждому элементу?
firstArray.forEach(element => {
    alert(arrLength);
});

//4
let allElements = "";
for(let i = 0; i < arrLength; i++) {
    allElements += " " + firstArray[i];
}
alert(allElements);
//5
let firstArrForUnite = [1, 2, 3, 4];
let secondArrForUnite = [5, 6, 7, 8];
let unitedArray  = firstArrForUnite.concat(secondArrForUnite);
let unitedArrStr = "";
for(let i = 0; i < unitedArray.length; i++) {
    unitedArrStr += " " + unitedArray[i];
}
alert(unitedArrStr);

//6
let deletedElement = unitedArray.pop();
alert("1" + deletedElement);

//7 Повторяется?
let newDeletedElement = unitedArray.pop();
alert("2" + newDeletedElement);

//8
unitedArray.unshift(1);

//9
const date = new Date();
alert(date);

//10
const monthNames = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
alert(date.getDay() + " " + monthNames[date.getMonth()] + " " + date.getFullYear());

//11
function randomUpToFifty() {
    const firstElement = Math.floor(Math.random() * 50 + 1);
    const secondElement = Math.floor(Math.random() * 50 + 1);
    return firstElement * secondElement;
}
alert(randomUpToFifty());