async function myFunction(id) {
  let response = await fetch(endpoint + id);
  response = await response.json();
  console.log(response);
}
