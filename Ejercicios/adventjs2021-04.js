const createXmasTree = (height) => {
  let arbol = ''
  for (let i = 1; i <= height; i++) {
    const espacios = height - i
    const asteriscos = 2 * i - 1
    // console.log('_'.repeat(espacios) + '*'.repeat(asteriscos) + '_'.repeat(espacios))
    arbol += ('_'.repeat(espacios) + '*'.repeat(asteriscos) + '_'.repeat(espacios))
    arbol += '\n'
  }

  for (let i = 1; i <= 2; i++) {
    const espacios = height - 1
    const almohaditas = 1
    arbol += ('_'.repeat(espacios) + '#'.repeat(almohaditas) + '_'.repeat(espacios))
    if (i < 2) {
      arbol += '\n'
    }
  }

  return arbol
}

console.log(createXmasTree(5))
console.log(createXmasTree(20))
