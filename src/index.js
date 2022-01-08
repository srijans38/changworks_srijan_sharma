import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import confetti from 'canvas-confetti';

const myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

const myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true,
});

function pop(duration) {
  const end = Date.now() + duration;

  (function animate() {
    myConfetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
    });
    myConfetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(animate);
    }
  })();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export { myConfetti, pop };
