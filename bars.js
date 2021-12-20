class Bar {
  constructor() {
    this.value = Math.ceil(Math.random() * 100);
    this.element = this.makeBar(this.value);
  }

  makeBar = (height) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("bars");
    newDiv.style.height = `${height}%`;
    return newDiv;
  };
}

const makeBars = () => {
  const numberOfBars = 150;
  let array = [];
  for (let i = 0; i < numberOfBars; i++) {
    array[i] = new Bar();
  }

  return array;
};

let arrayOfBars = makeBars();

const renderBars = (array) => {
  const containerElement = document.querySelector(".bars-container");
  containerElement.innerHTML = "";
  array.forEach((el) => {
    containerElement.appendChild(el.element);
  });
};

renderBars(arrayOfBars);

const selectionSort = (array) => {
  //index of start of unsorted array
  let sortStart = 0;
  let storedObject;
  //iterates through entire array for sort
  for (let i = 0; i < array.length; i++) {
    let min = 1000000;
    let minIndex;

    //finds min in unsorted part of array
    for (let j = sortStart; j < array.length; j++) {
      if (array[j].value < min) {
        min = array[j].value;
        minIndex = j;
      }
    }
    //places min found above at end of sorted part of array and places number in sortStart in mins position //(the numbers swap position)
    storedObject = array[minIndex];
    array[minIndex] = array[sortStart];
    array[sortStart] = storedObject;

    renderBars(array);

    //increases start index of unsorted part of array by one
    sortStart++;
  }
};

selectionSort(arrayOfBars);