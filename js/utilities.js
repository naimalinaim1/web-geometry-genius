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
  const uniqueDeleteId = "delete" + itemName + value;
  const uniqueConvertID = "convert" + itemName + value;
  const convertOption = "option" + itemName + value;
  const disableId = "disabled" + itemName + value;
  tr.innerHTML = `
    <tr>
        <td><strong>${indexNum}</strong> ${itemName}</td>
        <td><span id="${uniqueConvertID}">${value}</span> <span id="${convertOption}">cm</span><sup>2</sup></td>
        <td><p id="${disableId}" onclick="convertCmToMeter('${uniqueConvertID}','${convertOption}', '${value}', '${disableId}')" class="bg-info text-white rounded-lg px-2 py-1 cursor-pointer">Convert to m<sup>2</sup></p></td>
        <td><i id="${uniqueDeleteId}" class="fa-solid fa-xmark text-red-500 cursor-pointer text-xl"></i></td>
    </tr>
    `;
  containerEl.appendChild(tr);
  // delete element
  deleteUserCalculation(uniqueDeleteId);
};

// delete one element user calculation result
const deleteUserCalculation = (eleId) => {
  document.getElementById(eleId).addEventListener("click", (e) => {
    e.target.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode
    );
  });
};

// convert cm to meter
const convertCmToMeter = (eleId, optionID, value, disableId) => {
  value = twoDecimal(value / 100);
  getEl(optionID).innerText = "m";
  getEl(eleId).innerText = value;
  getEl(disableId).setAttribute('disabled', true);
  getEl(disableId).classList.add('bg-gray-500');
};
