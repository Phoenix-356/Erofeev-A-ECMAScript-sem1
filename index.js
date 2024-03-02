/*1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, 
решение задание должно состоять из одной строки*/
//const arr = [1, 5, 7, 9];
//const min = Math.min(...arr);
//console.log(min);

/*2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и 
decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
Значение счетчика должно быть доступно только через методы объекта, а не напрямую.*/

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log("Incremented: ", count);
    }

    function decrement() {
        count--;
        console.log("Decremented: ", count);
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
}

 //Пример использования
const counter = createCounter();
counter.increment(); // Вывод: Incremented: 1
counter.increment(); // Вывод: Incremented: 2
counter.increment(); // Вывод: Incremented: 3
counter.decrement(); // Вывод: Decremented: 2
counter.decrement(); // Вывод: Decremented: 1

console.log(counter.getCount()); // Вывод: 1


/*3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM 
и название класса в качестве 
аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.*/

   // Функция для поиска элемента по классу в дереве DOM
   function findElementByClass(rootElement, className) {
    // Если корневой элемент не существует, возвращаем null
    if (!rootElement) {
        return null;
    }

    // Проверяем, имеет ли корневой элемент указанный класс
    if (rootElement.classList && rootElement.classList.contains(className)) {
        return rootElement; // Возвращаем элемент, если класс найден
    }

    // Рекурсивно проверяем дочерние элементы корневого элемента
    if (rootElement.children) {
        for (let i = 0; i < rootElement.children.length; i++) {
            // Вызываем функцию рекурсивно для каждого дочернего элемента
            const foundElement = findElementByClass(rootElement.children[i], className);
            if (foundElement) {
                return foundElement; // Возвращаем элемент, если он найден в дочерних элементах
            }
        }
    }

    return null; // Возвращаем null, если ничего не найдено
}

// Находим корневой элемент
const rootElement = document.getElementById('root');
// Вызываем функцию поиска элемента по классу
const targetElement = findElementByClass(rootElement, 'article-content');
console.log(targetElement); // Выводим результат в консоль