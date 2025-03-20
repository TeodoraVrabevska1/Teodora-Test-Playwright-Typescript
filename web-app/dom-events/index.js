// get elements by tag name
document.getElementsByTagName("h1")[0];
//get h1 tag by css selector
document.querySelector("#list");
//create DOM element
var paragraph = document.createElement("p");
paragraph.textContent = "This is our created paragraph";
//get element by class name
var addItemsContent = document.getElementsByClassName("add-items");
console.log("addItemsContent:", addItemsContent);
//append element in the HTML structure
addItemsContent[0].append(paragraph);
//remove element in the HTML structure
var spanEl = document.getElementsByTagName("span")[0];
spanEl.remove();
//add ebent listener on keyboard press
document.addEventListener("keypress", function (event) {
    console.log("Kay pressed", event.key);
});
//Add and remove list items
var itemInput = document.querySelector("#itemInput");
var addButton = document.querySelector("#addButton");
var list = document.querySelector("#list");
function addListItem() {
    var listItem = document.createElement("li");
    var listItemValue = itemInput.value;
    paragraph.remove();
    if (listItemValue !== "" && listItemValue !== "") {
        //Added input value as list item text
        listItem.textContent = listItemValue;
        //Display list item on the screen
        list.append(listItem);
        //Clear input vaue after adding
        itemInput.value = "";
        itemInput.focus();
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        listItem.append(deleteBtn);
        deleteBtn.style.margin = "5px";
        deleteBtn.addEventListener("click", function () {
            listItem.remove();
        });
    }
}
addButton.addEventListener("click", function () {
});
itemInput.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
    }
});
itemInput.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
    }
});
