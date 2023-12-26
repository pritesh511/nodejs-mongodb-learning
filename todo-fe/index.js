const inputField = document.getElementById("titleInput");
const titleError = document.getElementById("titleError");
const addTodoBtn = document.getElementById("addTodoBtn");
const listWrap = document.getElementById("listWrap");
const API_URL = "http://localhost:3000";

inputField.addEventListener("change", (event) => {
  inputField.value = event.target.value;
});

window.onload = async function () {
  const allList = await getAllTodos();
  allList.data.forEach((item) => {
    const li = document.createElement("ol");
    li.className = "todo-item";
    li.innerHTML = item.title;
    listWrap.appendChild(li);
  });
};

addTodoBtn.addEventListener("click", () => {
  if (inputField.value != "") {
    createTodo();
    inputField.value = "";
    location.reload();
  } else {
    titleError.innerHTML = "Please enter title";
  }
});

async function createTodo() {
  const todo = {
    title: inputField.value,
    iscompleted: false,
  };
  try {
    const todoReques = await fetch(API_URL + "/todo", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const requestRes = todoReques.json();
    return requestRes;
  } catch (err) {
    console.log("err", err);
  }
}

async function getAllTodos() {
  try {
    const todoReques = await fetch(API_URL + "/todo", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const requestRes = todoReques.json();
    return requestRes;
  } catch (err) {
    console.log("err", err);
  }
}
