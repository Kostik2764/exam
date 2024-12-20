const ex1 = (num) => {
    return num**7 * 6 / 12
}

console.log(ex1(9))
console.log(ex1(0))
console.log(ex1(5))
console.log(ex1(8))
console.log(ex1(65747))
console.log(ex1(2))


console.log('') // просто отступы
console.log('') // просто отступы


const ex2 = (str1, str2) => {
    return str1 + str2 
}

console.log(ex2('da', 'do'))
console.log(ex2('Пап', 'очка'))
console.log(ex2('kil', 'ling'))


console.log('') // просто отступы
console.log('') // просто отступы


const ex3 = (text) => {
    const str = text.toUpperCase()
    return str
}

console.log(ex3('wow'))
console.log(ex3('password'))


console.log('') // просто отступы
console.log('') // просто отступы


const ex4 = (word) => {

    let rightWord = ''

    for (let i = 0; i < word.length; i = i + 1) {
        
        if (word[i] === 'a') {
           rightWord = rightWord + 'A'
        } else {
            rightWord = rightWord + word[i]
        }
    }

    return rightWord
}

console.log(ex4('asuara'))
console.log(ex4('tyhtnvvvvvvvvvvvvvtgh'))
console.log(ex4('AAAAAaaaaaa'))


console.log('') // просто отступы
console.log('') // просто отступы


const ex5 = (str1, str2, i) => {
    return str1.slice(0, i) + str2 + str1.slice(i, str1.length) 
}

console.log(ex5('Mo', 'mmy', 2))
console.log(ex5('Hel', 'lowen', 3))
console.log(ex5('Zenles', ' Zone', 6))
