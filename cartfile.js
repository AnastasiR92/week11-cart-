const cartItems = document.getElementsByClassName("priceItem");
const button = document.getElementById("addDiscount");
const totalItems = document.getElementById("totalprice");
let totalprice = 0;

function applyDiscount() {
        //создаем переменную i и устанавливаем ее начальное значение в 0. Затем мы проверяем, что i меньше длины массива cartItems (количество товаров в корзине). После каждой активности цикла увеличиваем значение i на 1.
for (let i = 0; i < cartItems.length; i++) {
          //создаем переменную item, которая содержит текст товара из priceItem в корзине
const item = cartItems[i];
          //создаем переменную price и преобразуем в число цену товара, которая находится во второй части массива item + с помощью replace удаляем "руб." из цены перед преобразованием в число. + parseFloat принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)
if (item.length >= 2) {
let price = parseFloat(item[1].replace("", "руб."));
price = price * 0.8; // применяем скидку 20%
        //обновляем текст товара в корзине, указывая название товара из первой части массива item и новую цену с примененной скидкой + с помощью toFixed округляем цены до двух знаков после запятой
cartItems[i].innerText = item[0] + " - " + price.toFixed(2) + " руб.";
        //добавляем цену с примененной скидкой к общей стоимости заказа, хранящейся в переменной total
totalprice += price;
        }}

//Выводим значение
totalItems.innerText = totalprice.toFixed(2) + " руб.";
    }

//Добавляем функцию-обработчик к событию клика на кнопку
button.addEventListener('click', applyDiscount);