document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input-area input");
  const button = document.querySelector(".input-area button");
  const taskList = document.querySelector(".buttonul");

  function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
      alert("Digite uma tarefa!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);

    input.value = ""; 
    input.focus();
  }

  button.addEventListener("click", addTask);

  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.remove();  
    }
  });
});
