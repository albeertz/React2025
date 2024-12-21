const contains = (almacen, producto) => {
  for (const key in almacen) {
    if (typeof almacen[key] === 'object') {
      if (contains(almacen[key], producto)) {
        if (almacen[key] === producto) {
          console.log(true)
          console.log(almacen[key])
          console.log(producto)
          return true
        }
      }
    }
  }
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite'
    }
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta'
    }
  }
}

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }

}

contains(almacen, 'camiseta')
contains(otroAlmacen, 'gameboy')
contains(almacen, 'sprite')
contains(otroAlmacen, 'cd-rom')
