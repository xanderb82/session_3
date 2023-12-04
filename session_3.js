setTimeout(() => {
        document.getElementById('logo').remove()
    }, 3000)

window.addEventListener('load', function () {

    function onClickButton () {

        alert("Ouch! Don't Touch Me!");

    }

    var btn = document.getElementById('click-btn');
    btn.addEventListener('click', onClickButton);

    var form = document.getElementById('contact-form');
    form.addEventListener('submit', onSubmit2);
    
    console.log("Document is ready");
});

function toDo () {

    const list = document.getElementById('create-list');
    if(list) {
        list.parentNode.removeChild(list);
        console.log("Old data has been deleted")
    } else {

    }
}

const onSubmit2 = (evt) => {
    evt.preventDefault();
    console.log(evt);
    const formData = new FormData(evt.target);
    toDo();
    const createList = document.createElement('ul');
    createList.id = 'create-list';
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
        listItem = document.createElement('li');
        listItem.innerHTML = `${key}: ${value}`;
        createList.appendChild(listItem);
    });
    document.getElementById('form-result').appendChild(createList);
}