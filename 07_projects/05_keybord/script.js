window.addEventListener('keydown',(e)=>{
    document.getElementById('div1').innerHTML = `<table border="1px">
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key == " "? "Space" : e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`
})