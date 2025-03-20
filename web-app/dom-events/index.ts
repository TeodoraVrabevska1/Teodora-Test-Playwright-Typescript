// get elements by tag name
document.getElementsByTagName("h1")[0];

//get h1 tag by css selector
document.querySelector("#list");

//create DOM element
const paragraph: HTMLParagraphElement = document.createElement("p");

paragraph.textContent = "This is our created paragraph";

//get element by class name
const addItemsContent: HTMLCollectionOf<Element> =
  document.getElementsByClassName("add-items");
console.log("addItemsContent:", addItemsContent);

//append element in the HTML structure
addItemsContent[0].append(paragraph);

//remove element in the HTML structure
const spanEl: HTMLSpanElement = document.getElementsByTagName("span")[0];
spanEl.remove();

//add ebent listener on keyboard press
document.addEventListener("keypress", (event: KeyboardEvent) => {
  console.log("Kay pressed", event.key);
});

//Add and remove list items

const itemInput = document.querySelector("#itemInput") as HTMLInputElement;
const addButton = document.querySelector("#addButton") as HTMLButtonElement;
const list = document.querySelector("#list") as HTMLUListElement;

function addListItem(){
    const listItem: HTMLElement = document.createElement("li");
    const listItemValue: string | number = itemInput.value;
  
    paragraph.remove();
      
      if (listItemValue !== "" && listItemValue !== "") {
          //Added input value as list item text
  
          listItem.textContent = listItemValue;
  
          //Display list item on the screen
  
          list.append(listItem);
      
  
          //Clear input vaue after adding
          itemInput.value = "";
          itemInput.focus();
  
          const deleteBtn: HTMLButtonElement = document.createElement("button");
          deleteBtn.textContent = "Delete";
          listItem.append(deleteBtn);
  
          deleteBtn.style.margin = "5px";
  
          deleteBtn.addEventListener("click", () => {
              listItem.remove();
          })
      }
}

addButton.addEventListener("click", () => {

});
itemInput.addEventListener("keypress", (event) => {
if (event.key === 'Enter') {
 
}
})

itemInput.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        
    }
})
