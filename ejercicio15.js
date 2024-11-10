const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

const count = (arr) => {
    let result = new Array();
    for (let element of arr) {
        if (element.includes('Camiseta')) {
            result.push(element)
        }
    }
    return result
}

console.log(count(products))