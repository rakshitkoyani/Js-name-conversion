// first select input box
document.addEventListener("input",convert );
// var one = document.querySelector("input").value;

//function declaration
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

function toPascalCase(str){
  return (str.match(/[a-zA-Z0-9]+/g) || []).map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join('');
}

function SnakeCase(str){
  const strArr = str.split(' ');
  const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
   }, []);
   return snakeArr.join('_');
}

function toSnakeCase(str) {
  return str
    .split(" ")
    .map((character) => {
      if (character == character.toLowerCase()) {
        return "" + character.toUpperCase();
      } else {
        return character;
      }
    })
    .join("_");
}

function kebabCase(str){
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase();
}
function toKebabCase(str) {
  return str
    .split(" ")
    .map((character) => {
      if (character == character.toLowerCase()) {
        return "" + character.toUpperCase();
      } else {
        return character;
      }
    })
    .join("-");
}

function convert() {
var one = document.getElementById("text").value;
var cBtn = document.getElementById('convert-btn')
cBtn.addEventListener("click", ()=> {
  //camel case
  document.getElementById("camel-case").innerHTML = camelize(one);
//pascal case
  document.getElementById("pascal-case").innerText = toPascalCase(one);
//snake_case
  document.getElementById("snake-case").innerText = SnakeCase(one);
//screaming-snake_case
  document.getElementById("screaming-snake-case").innerText = toSnakeCase(one);
//kebab_case  
  let str5 = kebabCase(one);
  document.getElementById("kebab-case").innerText = str5;
//screaming-kebab_case
  let str6 = toKebabCase(one);
  document.getElementById("screaming-kebab-case").innerText = str6;
}
  )
}