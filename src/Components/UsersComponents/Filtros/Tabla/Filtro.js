export default function checkValue(filtro) {
  fetch(`http://localhost:3000/productos/categoria/${filtro.target.id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((error) => console.log('Hubo un error ' + error))
}
