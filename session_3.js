setTimeout(() => {
        document.getElementById('logo').remove()
    }, 3000)

window.addEventListener('load', function () {
    
    console.log("Document is ready")

    function onClickButton () {

    alert("Ouch! Don't Touch Me!");

    }

    var btn = document.getElementById('click-btn');
    btn.addEventListener('click', onClickButton);

})