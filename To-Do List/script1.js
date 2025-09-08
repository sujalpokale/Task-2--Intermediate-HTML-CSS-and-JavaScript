const addTaskBtn = document.getElementById('addTaskBtn');
const newtaskInput = document.getElementById('newtaskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
    const taskText = newtaskInput.value.trim();

    if (taskText === ''){
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delet-btn');

    deleteBtn.addEventListener('click', function()  {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    newtaskInput.value = '';
});