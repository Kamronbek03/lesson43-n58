// Uyga vazifa ////////////////
// String //

// N1 //
// let n = +prompt("n=");
// function letters(n) {
//   let result = "";
//   if (n >= 1 || n <= 26) {
//     for (let i = 0; i < n; i++) {
//       result = result + String.fromCharCode(65 + i);
//     }
//     console.log(result);
//   } else {
//     console.log("Iltimos, 1 dan 26 gacha bo'lgan butun son kiriting!");
//   }
// }
// letters(n);

// N2 //
// function checkType() {
//   const input = prompt("Ma'lumot kiriting:");
//   if (input === null || input === "") {
//     console.log("0");
//     return;
//   }
//   if (!isNaN(input)) {
//     console.log("digit");
//   } else if (/^[a-zA-Z]+$/.test(input)) {
//     console.log("lotin");
//   } else {
//     console.log("0");
//   }
// }
// checkType();

// N3 //
// function printUTF16(str) {
//   if (str.length === 0) {
//     console.log("String kirirtilmagan!");
//     return;
//   }
//   console.log(str.charCodeAt(0), str.charCodeAt(str.length - 1));
// }
// printUTF16("Najot ta'lim!");

// N4 //
// function repeatChar(n, char) {
//   if (typeof char !== "string" || char.length !== 1 || n < 1) {
//     console.log("Error!");
//     return;
//   }
//   let result = char.repeat(n);
//   console.log(result);
// }
// repeatChar(9, "A");

// N5 //
// function reverseString(str) {
//   console.log(str.split("").reverse().join(""));
// }
// reverseString("Kamronbek");

// N6 //
// function getStringStars(str, n) {
//   let stars = "*".repeat(n);
//   console.log(str.split("").join(stars));
// }
// getStringStars("Computor", 3);

// N7 //
// function countDigits(str) {
//   let count = 0;
//   for (let char of str) {
//     if (!isNaN(char) && char !== " ") {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countDigits("1945-yil 2-jahon urushi tugagan");

// N8 //
// function countLatinCril(str) {
//   let latinCrilPattern = /[a-zа-яё]/g;
//   let matches = str.match(latinCrilPattern);
//   console.log(matches ? matches.length : 0);
// }
// countLatinCril("Привет Kamronbek");

// N9 //
// function toLowerCase(str) {
//   console.log(str.toLowerCase());
// }
// toLowerCase("Hello WORLD!");

// N10 //
// function swapCase(str) {
//   let swapped = [...str]
//     .map((char) => {
//       if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join("");
//   console.log(swapped);
// }
// swapCase("Hello WORLD!");

// N11 //
// function identifyNumber(str) {
//   if (/^-?\d+$/.test(str)) {
//     console.log(1);
//   } else if (/^-?\d+\.\d+$/.test(str)) {
//     console.log(2);
//   } else {
//     console.log(0);
//   }
// }
// identifyNumber("123");
// identifyNumber("123.45");
// identifyNumber("abs123");

// N12 //
// function getInverseNumber(n) {
//   let reversed = parseInt(n.toString().split("").reverse().join(""));
//   console.log(reversed * Math.sign(n));
// }
// getInverseNumber(12345);

// N13 //
// function evaluateExpression(expression) {
//   let result = eval(expression);
//   console.log(result);
// }
// evaluateExpression("7 + 3 - 2");

// N14 //
// function mergeStrings(N1, N2, S1, S2) {
//   let firstPart = S1.substring(0, N1);
//   let lastPart = S2.substring(S2.length - N2);
//   console.log(firstPart + lastPart);
// }
// mergeStrings(3, 2, "Hello", "World");

// N15 //
// function doubleCharacter(C, S) {
//   let doubled = S.split(C).join(C + C);
//   console.log(doubled);
// }
// doubleCharacter("o", "Hello World!");
