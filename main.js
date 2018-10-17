// from Joe's slack message

const h1 = (...props) => {
  console.log(props)
  return `<h1 class="${props[1]}">${props[0]}</h1>`
}