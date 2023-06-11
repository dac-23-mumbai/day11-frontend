function addRecord() {
  let inputMessageRef = document.querySelector("#messageId");
  let message = inputMessageRef.value;

  let uri = `http://localhost:4000/addrecord?message=${message}`;

  // connect the backend, ajax
  // magic, star, superstar
  fetch(uri);

  // clear the box
  inputMessageRef.value = "";

  // refresh the page
  readOrFindAllRecord();
}

async function readOrFindAllRecord() {
  let uri = "http://localhost:4000/findAll";

  let res = await fetch(uri);
  let list = await res.json();
  console.log(list);

  // iternateion
  for (let item of list) {
    let parentRef = document.querySelector("#parent");
    let existingValue = parentRef.innerHTML;
    let newValue = `<h1>${item.message}</h1>`;

    parentRef.innerHTML = newValue + existingValue;
  }
}
