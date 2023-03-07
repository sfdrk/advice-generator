
fetch("https://api.adviceslip.com/advice")
.then((res) => res.json())
.then(data => {
    initialData(data)
});

function initialData(data) {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(data => {
        displayAdvice(data);
    }); 
    function displayAdvice(data){
        console.log(data);
        let adviceBlock = document.querySelector(".card-block-content");
        adviceBlock.innerHTML = `
            <div class="advice-block">
                <p class="number">${"ADVICE # " + data.slip.id}</p>
                <p class="content">${data.slip.advice}</p>
            </div>
        `
    }  
}

let btn = document.querySelector(".btn");

btn.addEventListener("click",function(){
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(data => {
        displayAdvice(data);
    }); 
    function displayAdvice(data){
        console.log(data);
        let adviceBlock = document.querySelector(".card-block-content");
        adviceBlock.innerHTML = `
            <div class="advice-block">
                <p class="number">${"ADVICE # " + data.slip.id}</p>
                <p class="content">${data.slip.advice}</p>
            </div>
        `
    }
})