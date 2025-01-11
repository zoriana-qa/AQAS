function isEven(number) {
if (number%2 === 0 )
     {
    console.log ("Це парне число")
}
else {
    console.log ("Це непарне число")
}
}
isEven(5);


function greeting(time) {
    if (time < 12) {
        console.log ("Доброго ранку")
    }
    else if (time >=12 && time <18) {
    console.log ("Доброго дня")
    }    
    else if (time >=18)
    {console.log ("Доброго вечора")}
}
greeting (18);


function exam(mark) {
    if (mark >= 50) {
        console.log ("Тест складено")
    }
    else if (mark < 50) {
        console.log("Тест завалено")
    }
}
exam (12);


function voting (age) {
    if (age >=18) {
        console.log ("Ви можете голосувати!")
    }
    else {
        console.log ("Ви ще не можете голосувати")
    }
}
voting ("13");


function numbers (a, b) {
if (a>b) {
    console.log ("Перше число більше за друге")
}
else if (b>a) {
    console.log ("Друге число більше за перше")
}
else if (a ===b ){
    console.log ("Числа рівні")
}
}
numbers (2, 4)


function lights (color) {
    if (color === 'red') {
        console.log ('Стій')
    }
    else if (color === 'orange') {
        console.log ('Почекай')
    }
    else if  (color === 'green') {
        console.log ('Можеш переходити')
    }
}
lights ('green')


function value (value) {
    if (value > 0) {
        console.log ("Число додатнє")
    }
    else if (value <0){
        console.log ("Число відʼємне")
    }
    else if (value === 0) {
        console.log ("Вітаю, це нуль!")
    }
}
numbers (0)

