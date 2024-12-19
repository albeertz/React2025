const daysToXmas = (date) => {
  const fechaReferencia = new Date('Dec 25, 2021')
  const fechaActual = date

  const diferencia = fechaReferencia - fechaActual
  const dias = diferencia / (1000 * 60 * 60 * 24)
  return (Math.ceil(dias))
}

console.log(daysToXmas(new Date('dec 23, 2021')))
console.log(daysToXmas(new Date('may 2, 2021')))
console.log(daysToXmas(new Date('Jan 1, 2022')))
console.log(daysToXmas(new Date('Dec 25, 2021')))
console.log(daysToXmas(new Date('Dec 26, 2021')))
