import React from 'react';

function Todo({ todo, deleteTodo, updateTodo, isEditing, editingTodoTitle, setEditingTodoTitle, setEditingTodoId }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '300px',
            alignItems: 'center',
            marginTop: '10px'
        }}>
            {isEditing ? (
                <input
                    type="text"
                    value={editingTodoTitle}
                    onChange={(e) => setEditingTodoTitle(e.target.value)}
                />
            ) : (
                <h3>{todo.title}</h3>
            )}
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            {isEditing ? (
                <button onClick={() => updateTodo(todo.id)}>Update</button>
            ) : (
                <button onClick={() => {
                    setEditingTodoId(todo.id);
                    setEditingTodoTitle(todo.title);
                }}>Update</button>
            )}
        </div>
    );
}

export default Todo;