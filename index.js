function submitData(username, useremail) {
  const DATA_TYPES = ["application/json"];
  let url  = "http://localhost:3000/users";
  let data = {
    name: username,
    email: useremail
  };

  let reqConf = {
    method: "POST",
    headers: {
      "Content-Type": DATA_TYPES[0],
      "Accept": DATA_TYPES[0]
    },
    body: JSON.stringify(data)
  };
   
  let f = fetch(url, reqConf)
          .then(response => response.json())
          .then(user => display(user.id))
          .catch(error => display(error.message));

  return f;
}

function q(el) {
  return document.querySelector(el);
}

function qAll(el) {
  return document.querySelectorAll(el);
}

function display(item) {
  q("body").innerHTML = `<h1>${item}</h1><br>`; 
}