
const selectDiv = document.querySelector("#selectDiv");

const inputDataObj = {
    mood: "",
    effort: ""
};

console.log(inputDataObj);


function step1Func () {
    selectDiv.innerHTML = `
    <h2>What are you in the mood for?</h2>
    <div id="buttonDiv">
        <button>Italian</button>
        <button>Asian</button>
        <button>Swedish</button>
    </div>
    `;

    const buttonDiv = selectDiv.querySelector("#buttonDiv");
    buttonDiv.addEventListener("click", (event) => {
        inputDataObj.mood = event.target.textContent;
        console.log("after click", inputDataObj);
        selectDiv.innerHTML = "";
        step2Func();
    });

};


function step2Func () {
    selectDiv.innerHTML = `
    <h2>How much effort are you ready to put in?</h2>
    <div id="buttonDiv">
        <button>No effort</button>
        <button>30 min</button>
        <button>1-2 hours</button>
    </div>
    `;

    const buttonDiv = selectDiv.querySelector("#buttonDiv");
    buttonDiv.addEventListener("click", (event) => {
        inputDataObj.effort = event.target.textContent;
        console.log("after 2 click", inputDataObj);
        selectDiv.innerHTML = "";
    })
};

step1Func();