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

    var bdate = document.getElementById('birthdate');
    bdate.addEventListener('submit', onSubmitBirthDate);
    
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
    document.getElementById('form-result').style.display = 'block';
}

const onSubmitBirthDate = (evt) => {
    evt.preventDefault();
    console.log(evt);
    const formData3 = new FormData(evt.target);
    const birthDateInput = Array.from(formData3.values());
    console.log(birthDateInput);
    
    const allMonths = {
        january: '1',
        february: '2',
        march: '3',
        april: '4',
        may: '5',
        june: '6',
        july: '7',
        august: '8',
        september: '9',
        october: '10',
        november: '11',
        december: '12'
    }
    
    const monthNumber = allMonths[birthDateInput[1]];
    const birthDateString = [];
    birthDateString.push(birthDateInput[0], monthNumber, birthDateInput[2]);
    const [year, month, day] = birthDateString;
    
    const getAge = () => {
        const today = new Date();
        const birthDateOutput = new Date(`${year}-${month}-${day}`);
        
        const daysInMonth = () => {
            const justMonth = new Date(year, month, 0);
            return justMonth.getDate();
        }
        console.log(daysInMonth());
        
        let y = today.getFullYear() - birthDateOutput.getFullYear();
        let m = today.getMonth() - birthDateOutput.getMonth();
        let d = today.getDate() - birthDateOutput.getDate();
        let dimCheck = day - daysInMonth();

        if(y < 0 || (y == 0 & m < 0) || (y == 0 & m == 0 & d < 0) || dimCheck > 0) {
            return `You have entered a wrong date!`;
        }
        
        if(y > 1) {
            if(m > 0 & d < 0) {
    
            }
            if(m == 0 & d < 0 || m < 0) {
                y--;
            }
            return `You are ${y} year(s) old`;
        }
        if(y == 1) {
            if(m == 0 & d < 0) {
                y--;
                if(y == 0) {
                    m--;
                    m = m + 12;
                    return `Your baby is ${m}+ month(s) old`;
                }
            }
            if(m > 0 & d < 0) {

            }
            if(m < 0) {
                y--;
                    if(y == 0) {
                        if(m < 0) {
                            m = m + 12;
                        }
                        if(m > 0 & d < 0) {
                            m--;
                                if(m == 0) {
                                    if(d < 0) {
                                        d = daysInMonth() - day + today.getDate();
                                    }
                                    return `Your baby is ${d} day(s) old`;
                                }
                        }
                        return `Your baby is ${m}+ month(s) old`;
                    }
            }
            return `You are ${y} year(s) old`;
        }
        
        if(y == 0) {
            if(m == 0 & (d == 0 || d > 0)) {
                return `Your baby is ${d} day(s) old`;
            }
            if(m > 0 & d < 0) {
                m--;
                    if(m == 0) {
                        if(d < 0) {
                            d = daysInMonth() - day + today.getDate();
                        }
                        return `Your baby is ${d} day(s) old`;
                    }
            }
            return `Your baby is ${m}+ month(s) old`;
        }
    }

    console.log(getAge());
    printAge = document.createElement('string');
    printAge.innerHTML = getAge();
    document.getElementById('age').appendChild(printAge);
    document.getElementById('age').style.display = 'block';
}

//
// const onSubmit3 = (evt) => {
//     evt.preventDefault();
//     console.log(evt);
//     const userFormData = new FormData(evt.target);
//     //toDo();
//     const userProfile = document.createElement('div');
//     userProfile.id = 'user-profile';
//     userFormData.forEach((value, key) => {
//         const userDataOutput = document.createElement('div');
//         userDataOutput.innerHTML = new Object(JSON.parse(JSON.stringify(`${key}: ${value}`)));
//         userProfile.appendChild(userDataOutput);
//     });
//      document.getElementById('form-result').appendChild(userProfile);
//      document.getElementById('form-result').style.display = 'block';
// }
//