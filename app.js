const todoInput = document.getElementById("todo-input");
const addTodo = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

let tareas = []

addTodo.addEventListener("click", function() {
    let texto = todoInput.value;
    let objeto = {
        descripcion: texto,
        estado: "Pendiente"
    }
    tareas.push(objeto);
    desplegarInfo();
});

function desplegarInfo(){
    todoList.innerHTML="";
    tareas.forEach(element => {
        todoList.innerHTML+= `
        <div
               class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition duration-300">
               <input type="checkbox" class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
               <span class="flex-1 text-gray-700">${element.descripcion}</span>
               <div class="flex gap-2">
                  <button class="text-blue-500 hover:text-blue-700 transition duration-300" title="Editar tarea">
                     <i class="fas fa-pencil-alt"></i>
                  </button>
                  <button class="text-red-500 hover:text-red-700 transition duration-300" title="Eliminar tarea">
                     <i class="fas fa-trash"></i>
                  </button>
               </div>
        </div>
`
    });
}
