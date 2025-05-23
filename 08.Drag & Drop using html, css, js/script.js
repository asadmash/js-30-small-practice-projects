// take the ref of all list
let lists = document.getElementsByClassName("list");
// take ref of right box
let rightBox = document.getElementById("right");
// take ref of left box
let leftBox = document.getElementById("left");

// loop though all the list item
for (list of lists) {
  // make all the list items dragable
  list.addEventListener("dragstart", function (e) {
    // store the dragged item inside a variable
    let selected = e.target;
    console.log("🚀 ~ selected:", selected)

    // disable default drag behaviour of right box
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    // handle when something drop to the rightbox
    rightBox.addEventListener("drop", function () {
      // append the list item to the rightbox
      rightBox.appendChild(selected);
      // make the storage empty
      selected = null;
    });

    // disable default drag behaviour of left box
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    // handle when something drop to the rightbox
    leftBox.addEventListener("drop", function () {
      // append the list item to the leftbox
      leftBox.appendChild(selected);
      // make the storage empty
      selected = null;
    });
  });
}
