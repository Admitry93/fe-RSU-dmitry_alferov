"use strict";

//1
var now1 = new Date();

function getDay(enterDate) {
	var days = ['sunday', 'monday', 'tuesday', 'Wednesday', 'Thursday', 'friday', 'saturday'];
	return days[enterDate.getDay()]
}
console.log(getDay(now1));

//2
var now2 = new Date();
console.log(now2.toDateString());

//3
for (var year = 2014; year <= 2050; year++) {
	var firstJan = new Date(year, 0, 1);
	if (firstJan.getDay() === 0) {
		console.log("In " + year + " year - 1st Jan is Sunday!");
	}
}

//4
var now3 = new Date();
var now4 = new Date(now3.getFullYear(), 11, 31);
console.log(Math.round((now4 - now3) / 1000 / 86400));

//5
function is_array(inputArr) {
	if (toString.call(inputArr) === "[object Array]") {
		return true;
	}
	else {
		return false;
	}
}
console.log(is_array([1, 2, 4, 0]));
console.log(is_array('qwerty'));

//6
function cloneArr() {
	var arr1_6, arr2_6 = [1, 2, 3, 4, 10];
	arr1_6 = arr2_6.slice();
	arr1_6[2] = 'test';
	console.log(arr1_6);
	console.log(arr2_6);
}
console.log(cloneArr());

//7
var arr1_7 = [3, 'a', 'a', 2, 3, 'a', 3, 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i = 0; i < arr1_7.length; i++) {
	for (var j = i; j < arr1_7.length; j++) {
		if (arr1_7[i] == arr1_7[j]) m++;
		if (mf < m) {
			mf = m;
			item = arr1_7[i];
		}
	}
	m = 0;
}
console.log(item + " ( " + mf + " times )");

//8
function ucFirst(str) {
	var str2 = String;
	for (var i = 0; i < str.length; i++) {
		if (str[i].toUpperCase() == str[i]) {
			console.log(str[i].toLowerCase());
				} else {
				console.log(str[i].toUpperCase());
				}
			str2[i] = str[i];
			}
		}

ucFirst('Hello world');

//9
function removeDuplicates(str9) {
  var x,
      len=str9.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[str9[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var arr1_9 = ['test1', 'test2', 'test3', 'test4', 'test1', 'test4', 'test3'];
var result = removeDuplicates(arr1_9);
console.log(arr1_9);
console.log(result);

//10  не сделал
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arr1_10 = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < arr1_10.length; i++) {
	var r = getRandom(0, arr1_10.length - 1);
	arr1_10[i] = arr1_10[r];
}

console.log(arr1_10);

//11
var arr1_11 = [null, 1, 0, undefined, NaN,,,,,false,5];
var arr2_11 = [];
for (var i = 0; i < arr1_11.length; i++) {
	if (arr1_11[i]) {
		arr2_11. push(arr1_11[i]);
	}
}
console.log(arr2_11);

//12
var library = [ 
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
var library1 = [];
for (var i = 0; i < library.length; i++) {
	
	library1[i] = library[i].title;
}
console.log(library1.sort());

//13 использовал решение из 9 задания
var arr1_13 = [1, 2, 3];
var arr2_13 = [3, 4, 5];
var arr3_13 = [];
arr3_13 = arr1_13.concat(arr2_13);
console.log(removeDuplicates(arr3_13));

//14
var arr1_14 = [1, 2, 3, 4, 5];
function deleteItem(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (i == arr.indexOf(value)) {
			arr.splice(i, 1);
		}
	}
	console.log(arr1_14);
}
deleteItem(arr1_14, 2);

//15
var arr1_15 = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8'];
var len1_15 = arr1_15.length - 1;
var ran1_15 = getRandom(0, len1_15);
console.log(arr1_15[ran1_15]);

//16
var arr1_16 = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'];
function changePos(arr, elem, newPos) {
	var currentPos = arr.indexOf(elem);
	var newArr = arr;
	newArr.splice(currentPos, 1);
	newArr.splice(newPos, 0, elem);
	console.log(newArr);
}
changePos(arr1_16, 'test3', 0);

//17
var date1_17 = new Date(2016, 12, 1);
var date2_17 = new Date(2016, 12, 10);
var daysBetween = (date2_17 - date1_17) / 86400000;
console.log(daysBetween);

//18
function maxDate(all_dates) {  
var max_dt = all_dates[0],  
  max_dtObj = new Date(all_dates[0]);  
all_dates.forEach(function(dt, index)  
  {  
  if ( new Date( dt ) > max_dtObj)  
  {  
  max_dt = dt;  
  max_dtObj = new Date(dt);  
  }  
  });  
 return max_dt;  
  } 
  console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));

//19
var str1_19 = 'Hi all my name is Peter';
  function strInArr(str) {
  var arr1_19 = str1_19.split(' ');	
  console.log(arr1_19);
  }
strInArr(str1_19);

//20
var str1_20 = 'Hi all my name is Peter';
function capitalize(str) {
	var str2 = str.slice(1);
	str = str[0].toUpperCase() + str2;
	console.log(str);
}
capitalize(str1_20);

//21 сделал только с дефисами
var str1_21 = 'helo-world-new-mix-opa';

function camelize(str) {
  var arr = str.split('-');
  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
var newStr = arr.join('');
  console.log(newStr);

}
camelize(str1_21);

//22
var arr1_22 = [1, 2, 14, -10, 5, 3];
function arrayMax(arr) {
  var len = arr.length, max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  console.log(max);
  return max;
};
arrayMax(arr1_22);

//23
function arrayMin(arr) {
  var len = arr.length, min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  console.log(min);
  return min;
};
arrayMin(arr1_22);

//24
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
console.log(isNumeric('12px'));
console.log(isNumeric(NaN));
console.log(isNumeric('44'));
console.log(isNumeric(11));

//25
var array = [1, 2, 3, 4, 5, 6,];

for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
	console.log(sum);

//26
var person = {
	name: 'Mike',
	age: 40,
	haveCar: true
};
var i = 0;
for (var key in person) {
	i++;
}
console.log(i);

//27
for (var prop in person) {
	console.log(prop);
}