//Поле в котором все выводится
const input = document.querySelector('.input');
//Сохраненная часть выражения для возведения в степень
const power = "";
//Вставить символ
const insert = (num) => {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}
//Очистить все поле
const clean = () => {
    input.textContent = "0";
    power = "";
}
//Удалить символ
const back = () => {
    const exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent === 0) {
        input.textContent = "0";
    }
}
//Посчитать выражение
const equal = () => {
    const exp = input.textContent;
    if (input.textContent.includes('^')) {
        const tmp = input.textContent.split('^')
        const num = power;
        const pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
}
const percent = () => {
    input.textContent = input.textContent / 100;
}
//Для добавления констант
const constant = (name) => {
    if (input.textContent === 0) {
        input.textContent = "";
    }
    if (name === "pi")
        input.textContent += Math.PI.toFixed(8);
    if (name === "e")
        input.textContent += Math.E.toFixed(8);
}
//Корень квадратный, в квадрат в -1 степень
const operation = (name) => {
    if (name === "sqrt")
        input.textContent = Math.sqrt(input.textContent);
    if (name ===  "sqr")
        input.textContent = Math.pow(input.textContent, 2);
    if (name === "^-1")
        input.textContent = Math.pow(input.textContent, -1);
    if (name === "^") {
        power = input.textContent;
        input.textContent += "^";
    }
}

//Факториал числа
const factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
const fact = () => {
    input.textContent = factorial(+eval(input.textContent));
}
//Тригонометрия 
const operation2 = (name1) => {
    if (name1 === 'sin'){
        input.textContent = Math.sin(input.textContent);
    } 
    if (name1 === 'cos'){
        input.textContent = Math.cos(input.textContent);
    } 
    if (name1 === 'tan'){
        input.textContent = Math.tan(input.textContent);
    } 
    if (name1 === 'ctg'){
        input.textContent = 1 / Math.tan(input.textContent); 
    }
}

