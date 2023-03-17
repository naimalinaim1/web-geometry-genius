// utilities
// get element by id
const getEl = (id) => document.getElementById(id);

// get element value by id
const getValue = (id) => Number(getEl(id).value);

// calculate
let indexNum = 0;
const calculateArea = (funName, firstID, secondID) => {
  // get input value
  const firstValue = getValue(firstID);
  const secondValue = getValue(secondID);
  // function call
  if (firstValue > 0 && secondValue > 0) {
    indexNum++;
    // clear input filed
    getEl(firstID).value = "";
    getEl(secondID).value = "";
    // call function
    eval(`${funName}`)(firstValue, secondValue);
  } else {
    alert("input positive number");
  }
};

// get two decimal
const twoDecimal = (value) => {
  return Number(value.toFixed(2));
};

// convert and display 
const convertAndDisplay = (itemName, value) => {
  const result = twoDecimal(value);
  displayArea(itemName, result);
};

// display calculate data
const displayArea = (itemName, value) => {
  const containerEl = getEl("calculate-area-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <tr>
        <th>${indexNum}</th>
        <td>${itemName}</td>
        <td><span>${value}</span> cm<sup>2</sup></td>
        <td><p class="bg-info text-white rounded-lg px-2 py-1 cursor-pointer">Convert to m<sup>2</sup></p></td>
    </tr>
    `;
  containerEl.appendChild(tr);
};
