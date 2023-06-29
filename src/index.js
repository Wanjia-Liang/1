if (document.readyState !== "loading") {
  console.log("Document is ready");
  click();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    click();
  });
}

function click() {
  const buttonPress = document.getElementById("my-button");
  const heading = document.getElementById("heading");
  buttonPress.addEventListener("click", function () {
    console.log("hello world");
    heading.textContent = "My notebook";
  });

  const addData = document.getElementById("add-data");
  const note1 = document.getElementById("note1");
  const note2 = document.getElementById("note2");
  addData.addEventListener("click", function () {
    note1.innerText = "This is some arbitrary text.";
    note2.innerText = document.getElementById("textbox").value;
  });
}
