// // Add your code here

function submitData(name, email) {

    
    let formData = {
        "name": name,
        "email": email
    };

    let configObj = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(response =>
            response.json()
        )
        .then(object => document.querySelector('body').innerHTML = object.id)
        .catch(putErrorInBody)

}



function putErrorInBody(error) {
    const body = document.querySelector('body')
    const ptag = document.createElement('p')
    ptag.innerHTML = error.message
    body.append(ptag)
}