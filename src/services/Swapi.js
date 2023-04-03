
const baseUrl = `https://swapi.dev/api/films/`;

export async function getFilms() {
  const getData = await fetch(baseUrl, {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return console.log(error);
    });
  return getData;
}
