const inputField = document.getElementById("titleInput");
const titleError = document.getElementById("titleError");
const addTodoBtn = document.getElementById("addTodoBtn");
const deleteIcon = document.getElementById("deleteIcon");
const listWrap = document.getElementById("listWrap");
const API_URL = "http://localhost:3000";

inputField.addEventListener("change", (event) => {
  inputField.value = event.target.value;
});

window.onload = async function () {
  const allList = await getAllTodos();
  allList.data.forEach((item) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");

    li.className = "todo-item";
    li.setAttribute("id", "todoItem");
    span.innerHTML = item.title;

    img.src =
      "https://img.freepik.com/premium-vector/red-cross-mark-icon-negative-choice-symbol-sign-app-button_744955-339.jpg?w=740";
    img.className = "cross-icon";
    img.addEventListener("click", function () {
      const deleteTodoItem = deleteTodo(item._id);
      console.log(deleteTodoItem);
      location.reload();
    });

    li.appendChild(span);
    li.appendChild(img);
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

async function deleteTodo(id) {
  console.log(id);
  try {
    const deleteTodo = await fetch(API_URL + `/todo?id=${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = deleteTodo.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}
