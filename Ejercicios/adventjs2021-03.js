const carta1 = 'peluche (bici [coche) bici coche balón'
const carta2 = 'bici coche (balón) bici coche peluche'

const esValida = (carta) => {
  const pila = []
  let dentroDeParentesis = false

  for (let i = 0; i < carta.length; i++) {
    const char = carta[i]

    // Si encontramos un paréntesis de apertura
    if (char === '(') {
      pila.push(char)
      dentroDeParentesis = true
      //
    } else if (char === ')') {
      // Si no hay paréntesis de apertura para emparejar, la cadena es inválida
      if (pila.length === 0) {
        return false
      }
      pila.pop()
    }

    // Comprobamos que dentro de paréntesis no haya otros tipos de paréntesis
    if (dentroDeParentesis === true) {
      if (char === '[' || char === ']' || char === '{' || char === '}') {
        return false
      }
    }
  }

  // Si queda algo en la pila significa que hay paréntesis no cerrados
  return pila.length === 0 && !carta.includes('()')
}

console.log(esValida(carta1))
console.log(esValida(carta2))
