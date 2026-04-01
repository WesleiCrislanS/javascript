var agora = new Date()
var DiaSem = agora.getDay()
console.log(DiaSem)

switch (DiaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    default:
        console.log('Chega né')
}