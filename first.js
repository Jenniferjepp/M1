
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
    });

};


function step2Func () {

}

step1Func();