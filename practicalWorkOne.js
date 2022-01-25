
//0
let bool = true;
if (typeof(bool) == "boolean") {
    alert("Тип переменной - булево выражение");
} else {
    alert("Тип переменной точне не булево выражение");
}

//1
let userNumber = prompt("Введите цифру от 1 до 3", 1).trim();
switch (userNumber) {
    case "1":
        alert("Вы ввели единицу");
        break;
    case "2":
        alert("Вы ввели двойку");
        break;
    case "3":
        alert("Вы ввели тройку");
        break;
    default:
        alert("Введенное число не находится в диапазоне 1 - 3");
}

//2
let numbers = "";
for (let i = 1; i <= 40; i++) {
    numbers += " " + i;
}
alert(numbers);
numbers = "";

let index = 1;
while (index <= 40) {
    numbers += " " + index;
    index++;
}
alert(numbers);
numbers = "";
index = 1;

do {
    numbers += " " + index;
    index++;
} while (index <= 40);
alert(numbers);

//3 закомментирована, чтобы не блокировать остальные примеры
while(true){
    alert("Вирусная страница");
}


//4
let userResponse;
let userNum;
while (true){
    userResponse = prompt("Введите число, которое больше 5");
    userNum = Number(userResponse);
    if (!isNaN(userNum) && userNum > 5) {
        break;
    }
}
alert("Поздравляем, вы ввели число больше 5. Теперь живите с этим.");


//5
let evenNumbers = "";
for (let i = 8; i < 21; i++) {
    if (i % 2 == 0) {
        evenNumbers += " " + i;
    }
}
alert(evenNumbers);

//6
let unevenNumbers = "";
for (let i = 1; i < 8; i++) {
    if (i % 2 == 1 && i != 5) {
        unevenNumbers += " " + i;
    }
}
alert(unevenNumbers);