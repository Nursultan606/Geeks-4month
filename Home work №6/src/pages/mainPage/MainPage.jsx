import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [users, setUsers] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setUsers([...users, data]);
    reset();
  };

  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const handleClearTable = () => {
    setUsers([]);
  };

  return (
    <div>
      <h2>Форма регистрации пользователей</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
          {errors.name && <span>Это поле обязательно</span>}
        </div>
        <div>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            {...register('username', { required: true })}
          />
          {errors.username && <span>Это поле обязательно</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>Это поле обязательно</span>}
        </div>
        <div>
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: true })}
          />
          {errors.phone && <span>Это поле обязательно</span>}
        </div>
        <div>
          <label htmlFor="website">Сайт:</label>
          <input
            type="url"
            id="website"
            {...register('website')}
          />
        </div>
        <button type="submit">Создать</button>
      </form>
      <h2>Список пользователей</h2>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Имя пользователя</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Сайт</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <button onClick={() => handleDeleteUser(index)}>
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Таблица пуста</p>
      )}
      <button onClick={handleClearTable}>Очистить таблицу</button>
    </div>
  );
}

export default App;


