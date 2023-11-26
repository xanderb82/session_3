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
    form.addEventListener('submit', toDo);

 //   var resetForm = document.getElementById('contact-form');
 //   resetForm.addEventListener('submit', toDo);
 //   form.addEventListener(onSubmit2, toDo);

 //   var reset = document.getElementById('contact-form');
 //   reset.addEventListener('submit', resetForm);

 //   var reset = document.getElementById('form-result');
 //   reset.addEventListener('submit', toDo);
    
    console.log("Document is ready");
});

function toDo (evt) {

    evt.preventDefault();
    console.log(evt);
    const formData = new FormData(evt.target);
    const createList = document.createElement('ul');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
        const outputAdjust = () => {
            for(let i=0; i<formData.length; i++)
            {
                listItem = document.createElement('li');
                listItem.innerHTML = `${key}: ${value}`[i];
                createList.appendChild(listItem);
            }
            return listItem;
        }
    });
    document.getElementById('form-result').appendChild(createList);
//    console.log('Thank You');
//    const reset = getElementById('contact-form');
//    reset.addEventListener('submit', (evt) => {
//        document.getElementById('form-result').removeChild(createList);
//    });
//    document.getElementById('form-result').createList.empty();      
//    evt.preventDefault();
//    console.log(evt);
//    const createList = document.createElement('ul');
//    if (!ul === " ") {
//        document.getElementById('form-result').reset('ul');
//    } else {
//    const formData = new FormData(evt.target);
//    formData.forEach((value, key) => {
//    console.log(`${key}: ${value}`);
//    listItem.remove();
//    listItem.innerHTML.remove();
//    createList.removeChild(listItem);
//    });
//    document.getElementById('form-result').removeChild(createList);
}
 //   evt.preventDefault();
 //   console.log(evt);
 //   const formData = new FormData(evt.target);
 //   const createList = document.createElement('ul');
 //   document.getElementById('form-result').appendChild(createList);
 //   document.getElementById('form-result').removeChild(createList);
 //   formData.forEach((value, key) => {
 //       console.log(`${key}: ${value}`);
 //       listItem = document.createElement('li');
 //       listItem.innerHTML = `${key}: ${value}`;
 //       createList.appendChild(listItem);
 //   });
 //   document.getElementById('form-result').appendChild(createList);
//}

const onSubmit2 = (evt) => {
    evt.preventDefault();
    console.log(evt);
    const formData = new FormData(evt.target);
    const createList = document.createElement('ul');
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
        listItem = document.createElement('li');
        listItem.innerHTML = `${key}: ${value}`;
        createList.appendChild(listItem);
    });
    document.getElementById('form-result').appendChild(createList);
}