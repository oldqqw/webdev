/*
    JavaScript: Синтаксический сахар

    a = a + 1 → a += 1
    a = a - 1 → a -= 1
    a = a * 2 → a *= 2
    a = a / 1 → a /= 1
    a = a + 'foo' → a += 'foo'

    Реализуйте функцию filterString(), принимающую на вход строку и символ,
    и возвращающую новую строку, в которой удален переданный символ во всех его позициях.
*/

const filterString = (str, rmSymbol) => {
    // str - входная строка
    // rmSymbol - символ, который удаляем из строки
    return str.split(rmSymbol).join('');
};