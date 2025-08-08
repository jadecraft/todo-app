
const darkIcon = document.getElementById('dark-mode');
const lightIcon = document.getElementById('light-mode');
const doneMode = document.get('done-mode');
const todoMode = document.querySelector('todo-mode');
const body = document.body;
const taskContainer = document.querySelector('.todo-task')

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline';
}

darkIcon.addEventListener('click', () => {
    body.classList.add('dark');
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline';
    localStorage.setItem('theme', 'dark'); 
});

lightIcon.addEventListener('click', () => {
    body.classList.remove('dark');
    darkIcon.style.display = 'inline';
    lightIcon.style.display = 'none';
    localStorage.setItem('theme', 'light'); 
});


doneMode.addEventListener('click', () => {
    taskContainer.classList.add('done');
    doneMode.style.display = 'inline';
    todoMode.style.display = 'none';
    localStorage.setItem('taskStatus', 'done');
});

todoMode.addEventListener('click', () => {
    taskContainer.classList.remove('done');
    todoMode.style.display = 'inline';
    doneMode.style.display = 'none';
    localStorage.setItem('taskStatus', 'todo');
})