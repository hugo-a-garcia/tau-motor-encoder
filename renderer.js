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

// Load detected serial ports to a Select
const select = new mdc.select.MDCSelect(document.querySelector('.mdc-select'));

Serialport.list().then(ports => {
  document.getElementById("portSelectionList").innerHTML = `
  <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>
  ${ports.map(port => `<li class="mdc-list-item" data-value="${port.comName}">${port.comName}</li>`).join('')}
  `
})

select.listen('MDCSelect:change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});