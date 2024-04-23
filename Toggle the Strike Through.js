let checkboxWithLabelContainerEl = document.getElementById("checkBoxWithLabelContainer");
checkboxWithLabelContainerEl.classList.add("checkboxinput");
let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "checkbox";
checkboxWithLabelContainerEl.appendChild(checkBoxEl);


let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "I am a label";
labelEl.classList.add("ml-2");
labelEl.id = "checkboxLabel";
checkboxWithLabelContainerEl.appendChild(labelEl);

function onCheckboxStatusChange() {
    labelEl.classList.toggle("strike-through"); //checkboxLabelEl)
}

checkBoxEl.onclick = function() {
    onCheckboxStatusChange();
};