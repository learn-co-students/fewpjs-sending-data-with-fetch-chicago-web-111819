function main(){
    document.addEventListener('DOMContentLoaded', function(){
        formListener();
    })
};

function submitData(data) {

    const reqObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };

    fetch('http://localhost:3000/users', reqObj)
        .then(resp => resp.json())
        .then(data => renderFormData(data))
        .catch(function(error) {
            alert('CAUGHT ERROR')
            console.log(error.message)
        });
};

function formListener(){
    const form = document.querySelector('form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        const formData = {
            name: e.target[0].value,
            email: e.target[1].value
        };

        submitData(formData);
    });
};

function renderFormData(postedData){
    const renderDiv = document.querySelectorAll('div')[1]
    const userDiv = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerHTML = postedData.name
    userDiv.append(h2)

    const p1 = document.createElement('p')
    p1.innerHTML = postedData.email
    userDiv.append(p1)

    const p2 = document.createElement('p')
    p2.innerHTML = postedData.id
    userDiv.append(p2)

    renderDiv.append(userDiv)
}

main();