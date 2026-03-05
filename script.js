const list = document.getElementById("infi-list");

let count = 1;

// function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + count++;
    list.appendChild(li);
  }
}

// add 10 items initially
addItems(10);

// detect scroll
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});