import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CourseProvider } from './contexts/CourseContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles.css';

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <CourseProvider>
      <App />
    </CourseProvider>
  </DndProvider>,
  document.getElementById('root')
);
