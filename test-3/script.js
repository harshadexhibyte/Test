// Implement a JavaScript queue using an array
// Create a class and queue methods in that class
class QueueMethods {
  constructor() {
    this.tempArray = [];
  }
  addData(data) {
    this.tempArray.push(data);
    return this.tempArray;
  }
  deleteData() {
    return this.tempArray.shift();
  }
  displayData() {
    return this.tempArray;
  }
}

queue = new QueueMethods();

console.log(queue.addData(10), "Add Data");
console.log(queue.displayData(), "Display Data");

console.log(queue.addData(20), "Add Data");
console.log(queue.displayData(), "Display Data");

console.log(queue.addData(30), "Add Data");
console.log(queue.displayData(), "Display Data");

console.log(queue.addData(40), "Add Data");
console.log(queue.displayData(), "Display Data");

console.log(queue.deleteData(), "Deleting Data");
console.log(queue.displayData(), "Display Data");

console.log(queue.deleteData(), "Deleting Data");
console.log(queue.displayData(), "Display Data");

console.log(queue.deleteData(), "Deleting Data");
console.log(queue.displayData(), "Display Data");

console.log(queue.deleteData(), "Deleting Data");
console.log(queue.displayData(), "Display Data");

const btnInsert = document.querySelector(".insert");

btnInsert.addEventListener("click", function (e) {
  const insertBox = document.querySelector(".insertBox").value;
  queue.addData(insertBox);
  const disdata = queue.displayData();
  document.querySelector(".insertBox").value = "";
  document.querySelector(".insertBox").focus();
  document.querySelector(".output").innerHTML = disdata;

  document.querySelector(".output").style.background = "greenyellow";
});

const btndelete = document.querySelector(".delete");
btndelete.addEventListener("click", function (e) {
  const insertBox = document.querySelector(".insertBox").value;
  queue.deleteData();
  const disdata = queue.displayData();
  document.querySelector(".output").innerHTML = disdata;
  document.querySelector(".output").style.background = "red";
});

const btndisplay = document.querySelector(".display");
btndisplay.addEventListener("click", function (e) {
  queue.displayData();
  const disdata = queue.displayData();
  document.querySelector(".outputDisplay").style.background = "yellow";
  document.querySelector(".outputDisplay").innerHTML = disdata;
});
