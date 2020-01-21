// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Use `preload.js` to selectively enable features needed
// in the rendering process.

const Serialport = require('serialport')
Serialport.list().then(ports => {
  document.getElementById("port-list").innerHTML = `
  <h1>Detected Serial Ports</h1>
  <ul>
    ${ports.map(port => `<li>${port.comName}</li>`).join('')}
  </ul>
  `
})