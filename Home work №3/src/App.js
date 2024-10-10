import React from 'react';
import MainPage from '../src/pages/mainPage/MainPage';
import AboutPage from '../src/pages/aboutPage/AboutPage';
import TodosPage from '../src/pages/todosPage/TodosPage';


function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutPage />
      <TodosPage />
    </div>
  );
}

export default App;
