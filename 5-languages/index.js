let lang = prompt('Ваш язык?').toLowerCase();


switch(lang) {
    case 'en' :
        console.log('Hello!')
        break
    case 'ru':
        console.log('Privet')
        break
    case 'null' :
        console.log('I do not know you language')
    default: 
        console.log('I do not know you language')
}