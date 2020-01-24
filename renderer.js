// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Use `preload.js` to selectively enable features needed
// in the rendering process.

const SerialPort = require('serialport')

mdc.autoInit();

var aSerialPort;

const stopButton = document.querySelector('#stopButton');
stopButton.addEventListener('click', () => {
  //alert('You clicked!');
  serialWrite("1");
});

const forwardButton = document.querySelector('#forwardButton');
forwardButton.addEventListener('click', () => {
  //alert('You clicked!');
  serialWrite("2");
});

const backwardButton = document.querySelector('#backwardButton');
backwardButton.addEventListener('click', () => {
  //alert('You clicked!');
  serialWrite("3");
});

const leftButton = document.querySelector('#leftButton');
leftButton.addEventListener('click', () => {
  //alert('You clicked!');
  serialWrite("4");
});

const rightButton = document.querySelector('#rightButton');
rightButton.addEventListener('click', () => {
  //alert('You clicked!');
  serialWrite("5");
});

// Load detected serial ports to a Select
const select = new mdc.select.MDCSelect(document.querySelector('.mdc-select'));

SerialPort.list().then(ports => {
  document.getElementById("portSelectionList").innerHTML = `
  <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>
  ${ports.map(port => `<li class="mdc-list-item" data-value="${port.comName}">${port.comName}</li>`).join('')}
  `
})

select.listen('MDCSelect:change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
  openSerialPort(select.value);
});

function openSerialPort(value) {
  aSerialPort = new SerialPort(value, {
    baudRate: 115200
  });
}

//Write to serial port

function serialWrite(output) {
    
  aSerialPort.write(output, function (err) {
      if (err) {
          return console.log('Error on write: ', err.message)
      }
      console.log('message written')
  })

  // Open errors will be emitted as an error event
  aSerialPort.on('error', function (err) {
      console.log('Error: ', err.message)
  })
}
