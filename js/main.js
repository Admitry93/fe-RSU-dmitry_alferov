"use strict";
var age = 25, name = "Mike";
console.log(age);
console.log(name);

function area() {
var height = prompt('Введите высоту', '');
var base = prompt('Введите основание', '');
	return((0.5 * +base) * +height);
}
console.log(area());

// циклы с разворотом массива
function reverseFor() {
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], newArr = [], j, i;
	for (i = arr.length; i > 0; i--) {
  	j = arr.length - i;
  	newArr[i] = arr[j];
	}
console.log(newArr);
}
reverseFor();

function reverseWhile() {
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], newArr = [], i = arr.length, j, k;
	while (i > 0) {
		k = i--;
		j = arr.length - k;
		newArr[i] = arr[j];
	}
	console.log(newArr);
}
reverseWhile();

function revereseDoWhile() {
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], newArr = [], i = arr.length, j, k;
	do {
		k = i--;
		j = arr.length - k;
		newArr[i] = arr[j];
	}
	while (i > 0);
	console.log(newArr);
}
revereseDoWhile();

//префикс, постфикс
var ten = 10, tenTwo = 10;
	console.log(ten++ + ' - Постфиксная форма, возвращает значение до увеличения');
	console.log(++tenTwo + ' - Префиксная форма, возвращает значение после увеличения');

//проверка числа +, -, 0
function positiveCheck () {
	var x = +prompt('Введите число', '');
	if (x > 0) {
		console.log('Число положительное');
	}
	else if (x == 0) {
		console.log('Число равно нулю');
	}
	else {
		console.log('Число отрицательное');
	}
}
positiveCheck();

//факториал
var factor = +prompt('Введите число для вычисления факториала', '');
function factorial(factor) {
  return (factor != 1) ? factor * factorial(factor - 1) : 1;
}
console.log(factorial(factor));