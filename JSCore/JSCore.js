/*let a;
a = true + false;
console.log(a);*/

//1.1.14
/* const defaultTo = (value, defaultValue) => {
   return (isNaN(value) || value == null || undefined) ? defaultValue : value;
}
 или этот кусок кода тоже рабочий
if (isNaN(value) || value == null || undefined) {
    return defaultValue;
   } else return value;

console.log(defaultTo(null, 10)); */

//1.1.16
/* function compareWithPrecision(a, b, precision) {
    return Math.abs(a - b) <= precision;
}

console.log(compareWithPrecision(0.1 + 0.2, 0.3, 0.0001)) //true */

//1.1.18
/* function capitalize(str){
    return str.toLowerCase().replace(/(\b\w)/gi,function(m){return m.toUpperCase();});
}

const str = 'sOme one ranDoM sTRING';
console.log(capitalize(str)); // Some Random String */

//1.1.19
/* const reverseLongWords = (str) => {
    return str.replace(/\w{5,}/g, word => word.split('').reverse().join(''));    
};

console.log(reverseLongWords('Hey fellow warriors')); // Hey wollef sroirraw */

//1.1.21
function wrapInParagraph(str){
    return str.split(/\n/).map(line => `<p>${line}</p>` + `${<br></br>}`).join('');
}

const text = `Some
simple multiline
text`;

console.log(wrapInParagraph(text)); // <p>Some</p>
// <p>simple multiline</p>
// <p>text</p>