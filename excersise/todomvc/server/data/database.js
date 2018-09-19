export class Todo {}
export class User {}

const VIEWER_ID = 'me';

const viewer = new User();
viewer.id = VIEWER_ID;

const usersById = {
    [VIEWER_ID]: viewer,
};

const todosById = {};
const todoIdsByUser = {
    [VIEWER_ID]: [],
};

let nextTodoId = 0;

export const getUser = id => usersById(id);
export const getViewer = () => getUser(VIEWER_ID);

export const addTodo = (text, complete) => {
    const todo = new Todo();
    todo.complete = !!complete;
    todo.id = `${nextTodoId++}`;
    todo.text = text;

    todosById[todo.id] = todo;
    todoIdsByUser[VIEWER_ID].push(todo.id);

    return todo.id;
};

export const changeTodoStatus = (id, complete) => {
    const todo = getTodo(id);
    todo.complete = complete;
};

export const getTodo = id => todosById[id];
export const getTodos = (status = 'any') => {
    const todos = todoIdsByUser[VIEWER_ID].map(id => todosById[id]);

    if (status === 'any') return todos;

    return todos.filter(todo => todo.complete === (status === 'completed'));
};

export const markAllTodos = complete => {
    const changedTodos = [];
    getTodos().map(todo => {
        if (todo.complete !== complete) {
            todo.complete = complete;
            changedTodos.push(todo);
        }
    });

    return changedTodos.map(todo => todo.id);
};

export const removeTodo = id => {
    const todoIndex = todoIdsByUser[VIEWER_ID].indexOf(id);

    todoIndex !== -1 && todoIdsByUser[VIEWER_ID].splice(todoIndex, 1);

    delete todosById[id];
};

export const removeCompletedTodos = () => {
    const todosToRemove = getTodos().filter(todo => todo.complete);
    todosToRemove.map(todo => removeTodo(todo.id));

    return todosToRemove;
};

export const renameTodo = (id, text) => {
    const todo = getTodo(id);
    todo.text = text;
};
