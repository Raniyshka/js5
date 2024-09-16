'use strict';

// let n = prompt('Зп', 'salary');
// let user = {
//     name: 'Raniya',
//     'pets name': 'Arsy',
//     [n] : 500000
// };
// user.age = 50;
// user.name = 'Amir'
// console.log(user.salary)
// console.log('sdf' in user)
// console.log('name' in user)
// console.log(user)
// console.log(user.name)
// delete user.name
// console.log(user)

// console.log(user['pets name'])

// for(let key in user){
//     console.log(key)
//     console.log(user[key])
//     console.log(key, user[key])
// }




//КОПИРОВАНИЕ
// let a = 7;
// let b = a;

// let user = {name: 'Raniya'}
// let user2 = user;
// user.age = 30;
// console.log(user2)

// let user = {name: 'Raniya'}
// let user2 = {};

// for(let key in user){
//     user2[key] = user[key]
// }

// Object.assign(user2, user) //этот метод клонирует. сначала объект, в user2 из user
// let user3 = Object.assign({}, user)
// user.age = 20
// console.log(user2)





//СТРОКИ

// let str = 'Hello'
// console.log(str.length)
// console.log(str[0])
// console.log(str.at(-1))

// for(let letter of str){
//     console.log(letter)
// }

// console.log(str.toUpperCase());
// console.log(str[0].toLowerCase());

// console.log(str.indexOf('ell')) //1
// console.log(str.indexOf('sedk')) //-1
// console.log(str.includes('ell')) //true

// let str2 = str.slice(0, 2) // (He) с нулевого по второй не включительно поддерживается отриц знач-я
// let str4 = str.slice(-4, -1) // (ell)первое значение должно быть меньше второго
// let str3 = str.substring(1, 3) // (el) первое знач мб больше второго
// let str5 = str.substr(1,2) //(el)
// console.log(str2, str3, str4)
// console.log(str5)




// let arr = [1,2,3, 'Cat', {name:'Raniya'}, function(){alert('hi')}];
// // console.log(arr)
// // console.log(arr.at(-2)) //{name:'Raniya'}
// arr[0] = 'lol'
// console.log(arr)
// console.log(arr.length) //6
//push - метод добавляет в конец
//shift - удаляет из начала
//pop - удаляет из конца
//unshift - добавляет в начало

// arr.push(1999)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(1999)
// console.log(arr)
// arr.shift()
// console.log(arr)

// for(let i = 0; i<arr.length;i++){ //здесь можно получить эл-ты вместе с индексом, для объектов
//     console.log(arr[i])
// }
// for(let elem of arr){ //получаем эл-ты без индекса, для строк и масивов
//     console.log(elem)
// }

// let arr = ['apple', 'cucumber', 'water', 'milk'];
// delete arr[1] //cucumber превращает в empty, оставляя длину массива той же
// arr.splice(1,1) // удаляет эл-т впринципе, меняя длину массива (с какого эл-та, сколько эл-тов удалить)
// console.log(arr)
// arr.splice(1,1, 'carrot', 'seees', 'skdfk') // удаляет заменяя 
// console.log(arr)

// let arr2 = arr.slice(0,2) //оставит apple, cucumber
// let arr3 = arr.concat(arr2, [23, 374283], 'skjhfks')
// console.log(arr2)
// console.log(arr3)

// arr.forEach((item, index, arr)=>{
//     alert(`у ${item} index: ${index}, в массиве: ${arr}`)
// })

// arr.forEach((item, index)=>{
//     alert(`у ${item} index: ${index}`)
// })

// console.log(arr.indexOf('sefwef')) //-1, тк такого нет
// console.log(arr.includes('dslologl')) // false





// let users = [
//     {id:1, name:'Ban'},
//     {id:2, name:'Sam'},
//     {id:3, name:'Jim'},
// ];
// let user = users.find(item => item.id == 2) //один item - это один объект, ищем объект
// let userNew = users.filter(item => item.id>1)
// console.log(user.name) // Sam
// console.log(userNew) // вывело строку с Sam, Jim




// let arr = ['apple', 'cucumber', 'water', 'milk'];
// let lengths = arr.map(item => item.length)
// console.log(lengths) //выводит через запятую длину каждого эл-ьа массива, т.е. 5,8,5,4

// let nums = [23,5,15]; //сортирует цифры, но как строки, те 15,23,5 (по первой цифре)
// console.log(nums.sort())
// console.log(nums.sort((a, b) => a - b)) // сортирует цифры правильно, те 5,15,23

// split - разделить строку на массив
// join - сделать из массива строку

// let names = 'Alina, Raniya, Maria';
// let arr = names.split(', ');
// console.log(arr)

// let str = arr.join(', ');
// console.log(str)



// let arr = [2,3,5,7];
// let result = arr.reduce((sum, item) => sum+item, 0); // 0 - начальн знач
// console.log(result)




//1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let summ = Object.values(salaries).reduce((sum, item) => sum + item, 0);
console.log(summ);

//2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj){
    for(let i in obj){
        if(typeof obj[i] === 'number'){
            obj[i] *= 2;
        }
    }
  }
  
  multiplyNumeric(menu);
  console.log(menu);
  


//3
let calculator = {
    a:0,
    b:0,
    read(){
        this.a = +prompt('Введите число', 1);
        this.b = +prompt('Введите число', 2);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
    
  };
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );


//4
let stoim = '$120';

function extractCurrencyValue(str){
    return str.replace('$', '');
}

alert(extractCurrencyValue(stoim));

//5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

alert( names ); // Вася, Петя, Маша

//6
function getAverageAge(users){
    if(users.length == 0){
        return 0;
    }

    let totalAge = users.reduce((total,user) => total + user.age, 0);
    return totalAge / users.length;
}

//данные из 5 задания
alert(getAverageAge(users));
  