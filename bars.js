let containerElement = document.querySelector(".bars-container");

const generateRandomArray = () => {
    let array = [];
    let arrayLength = 100;
    let maxNumber = 100;

    for(let i = 0; i < arrayLength; i++){
        array[i] = Math.ceil(Math.random()*maxNumber);
    }

    return array;
}

const makeBar = (height) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("bars");
    newDiv.style.height = `${height}%`;
    return newDiv;
}

const makeBars = () => {
    let arr = generateRandomArray();
    arr.forEach((rand) => {
        let bar = makeBar(rand);
        containerElement.appendChild(bar);
    });
}

makeBars();
