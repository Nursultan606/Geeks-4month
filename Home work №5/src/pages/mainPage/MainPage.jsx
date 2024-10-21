import React, { useState } from 'react';

function FirstPage() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddName = () => {
    if (inputValue.trim() !== '') {
      setNames([...names, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleEditName = (index) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = (index) => {
    if (inputValue.trim() !== '') {
      const updatedNames = [...names];
      updatedNames[index] = inputValue.trim();
      setNames(updatedNames);
      setEditingIndex(null);
      setInputValue('');
    }
  };

  return (
    <>
      <h2>Список имен</h2>
      <div>
        <input
          type="text"
          placeholder="Введите имя"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddName} disabled={inputValue.trim() === ''}>
          Добавить
        </button>
      </div>
      {names.length > 0 ? (
        <ul>
          {names.map((name, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={() => handleSaveEdit(index)}
                    disabled={inputValue.trim() === ''}
                  >
                    Сохранить
                  </button>
                </>
              ) : (
                <>
                  {name}
                  <button onClick={() => handleEditName(index)}>
                    Поменять
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Список пуст</p>
      )}
    </>
  );
}

export default FirstPage;