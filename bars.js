class Bar {
    constructor(){
        this.value = Math.ceil(Math.random()*100);
        this.element = this.makeBar(this.value);
    }

    makeBar = (height) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("bars");
        newDiv.style.height = `${height}%`;
        return newDiv;
    }
}

const makeBars = () => {
    const numberOfBars = 100;
    let array = [];
    for(let i = 0; i < numberOfBars; i++){
        array[i] = new Bar();
    }

    return array;
}

let arrayOfBars = makeBars();

const renderBars = (array) => {
    const containerElement = document.querySelector(".bars-container");
    containerElement.innerHTML = "";
    array.forEach(el => {
        containerElement.appendChild(el.element);
    });
}

renderBars(arrayOfBars);
