"use strict";



// let date = new Date();

// console.log(date);

// console.log(date.getFullYear());

// console.log(date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getHours() + ":" + date.getMinutes());

// console.log (typeof date);


// var name  = "test";
//
// var name  = "salam";
//
// var name  = "sagol";
//
// console.log (name);





// if (true) {
//   var age = 60;
// }

// console.log(age);



// function test() {
//   var age = 55;

// console.log(age);

// }

//test();



let address = "Ehmedli";



// function search(str) {
//   for (let i = 0; i < address.length; i++) {
//     if (address[i] == "s") {
//       return true;
//     }
//   }
//   return false;
// }


// console.log(search(address) ? "Found" : "Not Found");
// console.log(address.length);
// console.log(address.includes("m"));

// console.log(address[0]);

// console.log(address.at(0));

// console.log(address.charAt(0));

// console.log(address.at(0));




// console.log(address.charCodeAt(0));

// document.querySelector("button").addEventListener("keydown", function (e) {

//   if (e.keyCode == 38) {
//     console.log("yuxari");
//   } else if (e.keyCode == 13) {
//     console.log("enter");
//   }

// })





// console.log(address.slice(1,3));

// console.log(address.substring(1,3));

// console.log(address.slice(1,3));
// console.log(address.substr(1,3));


let str = "Resul, yaxshi, oglandi";

// let str2 = " Amma emmameleri var";

// console.log(address.replace("E", "A"));


// console.log(str.replace("oglandi", "kishidir"));

// console.log(str.replaceAll("l", "s"));

// console.log(str.toLowerCase());

// console.log(str.toLocaleLowerCase());

// console.log(str.toUpperCase());

// console.log(str.toLocaleUpperCase());

// let res = str.concat(str2);

// console.log(res);




// console.log(str.trim());

// console.log(str.trimStart());

// console.log(str.trimEnd());


// console.log(str.startsWith("r".toUpperCase()));

// let result = str.split("");

// let result = str.split(",");

// console.log (result);


// for (const item  of result) {
//   console.log (item);
// }

// let text = "HELLO WORLD";

// text[0] = "";


// let arr = [1,2,3];

// arr[0] = 10;

// console.log(arr);




// const SUCCES_MESSAGE = "Registered seccessfully";
// const ERROR_MESSAGE = "This email already used";



// let user = {
//   name: "Ramil",
//   surname: "Allahverdiyev",
//   email: "qoshqar@email.russs",
//   password: "Ramil123"
// }


// function register(user) {

//   let emails = getEmails();

//   if (user.name == "") {
//     return "Dont empty";
//   }

//   for (const email of emails) {
//     if (user.email == email) {
//       return ERROR_MESSAGE;
//     }
//   }
//   return SUCCES_MESSAGE;
// }

// let result  = register(user);

// console.log(result);

// function getEmails() {
//   let emails = "cavid@gmail.com,resul@gmail.com,ramil99@code.edu.az,qoshqar@mail.ru";
//   return emails.split(',');
// }





// const strToUpper = (str) => {
//   return str.at(0).toUpperCase() + str.slice(1);
//   // return str.replace(str[0],str[0].toUpperCase());
// }


// console.log (strToUpper("azerbaycan"));




//array



let names = ["Anar", "Resul", "Musa", "Murad", "Lale", "Qoshqar"];

// console.log(names[0]);
// console.log(names.length);
// console.log(names[names.length-1]);
// console.log(names.reverse());
// names.sort();
// console.log(names);
// console.log(names.join(","));
// console.log(names.toString());
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);
// console.log(children);

// names.push("Mahir");

// names.pop();
// names.unshift("salam");
// names.shift();

// console.log(names);



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.entries();
// for (const item of res) {
//   console.log(item);
// }


// let nums = [1, 5, 10, 20, 44];


// console.log(nums.every(m=>m>10));

// nums.fill(100, 0, 2);
// console.log(nums);

// console.log(names.filter(m=>m.includes("r")));

// let result = nums.find(m => m > 5);

// let result = nums.find(m => m > 5);

// console.log(result);

// console.log(nums.findIndex(m => m > 5));


// let text = "ABCDEFG";

// let arr = new Set(["sa","sa","as"]);

// console.log(text.split(""));

// const myArr = Array.from("BCD",m=>m+"a");

// console.log(myArr)




// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.includes("Mango"));




// console.log(index);

// function search(searchText) {
//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   let index = fruits.indexOf(searchText);

//   if (index == -1) {
//     console.log("Notfound");
//     return;
//   }


//   console.log("Seccess");
// }

// search("Batttttnana");




// let nums = [1, 5, 44, 10, 20, 44];

// console.log(nums.lastIndexOf(44));




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = Array.isArray(fruits)

// console.log(result);





// function checkArray(data) {
//   return Array.isArray(data);
// }

// let nums = "sasasasa"

// console.log(checkArray(nums));




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();


// for (const key of keys) {
//   console.log(key);
// }



// const numbers = [175, 50, 25];

// let result = numbers.reduce((total,current) => (total+current),100);

// console.log(result);




// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// function findOddNums(arr) {
  // return arr.filter(m=>m%2==1).reduce((total, current) => total + current);

//   let oddArr = [];

//   for (const item of arr) {
//     if (item % 2 == 1) {
//       oddArr.push(item);
//     }
//   }
//   return oddArr.reduce((total, current) => total + current);
// }



// console.log(findOddNums(nums));





// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const myArr = fruits.valueOf();

// console.log(myArr);