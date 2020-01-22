// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Use `preload.js` to selectively enable features needed
// in the rendering process.

const Serialport = require('serialport')

mdc.autoInit();

const stopButton = document.querySelector('#stopButton');
stopButton.addEventListener('click', () => {
  alert('You clicked!');
});

const forwardButton = document.querySelector('#forwardButton');
forwardButton.addEventListener('click', () => {
  alert('You clicked!');
});

const backwardButton = document.querySelector('#backwardButton');
backwardButton.addEventListener('click', () => {
  alert('You clicked!');
});

const leftButton = document.querySelector('#leftButton');
leftButton.addEventListener('click', () => {
  alert('You clicked!');
});

const rightButton = document.querySelector('#rightButton');
rightButton.addEventListener('click', () => {
  alert('You clicked!');
});

Serialport.list().then(ports => {
  document.getElementById("port-list").innerHTML = `
  <h1>Detected Serial Ports</h1>
  <ul>
    ${ports.map(port => `<li>${port.comName}</li>`).join('')}
  </ul>
  `
})