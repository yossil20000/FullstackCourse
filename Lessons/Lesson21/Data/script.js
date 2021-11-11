// console.log(scoolList.result.records);

scoolList.result.records.forEach(scoolItem => {
    var row = document.createElement('tr');
    var scoolId = document.createElement('td');
    var area = document.createElement('td');
    var adress = document.createElement('td');
    var schoolName = document.createElement('td');
    var personName = document.createElement('td');
    scoolId.textContent = scoolItem.cod_beit_sefer; // <td>  ${scoolitem} </td> 
    area.textContent = scoolItem.ezor;   // <td>  ${area} </td> 
    adress.textContent = scoolItem.ktovet;  // <td>  ${ktovet} </td> 
    schoolName.textContent = scoolItem.shem_beit_sefer;  // <td>  ${shem_beit_sefer} </td> 
    personName.textContent = scoolItem.menahel;  // <td>  ${menahel} </td> 
    row.appendChild(scoolId)
    row.appendChild(area)
    row.appendChild(adress)
    row.appendChild(schoolName)
    row.appendChild(personName)
    
});


// scoolList.result.records.forEach(addRow);

// function addRow(scoolItem){
//     var row = document.createElement('tr');
//     var scoolId = document.createElement('td');
//     var area = document.createElement('td');
//     var adress = document.createElement('td');
//     var schoolName = document.createElement('td');
//     var personName = document.createElement('td');

//     scoolId.textContent = scoolItem.cod_beit_sefer; // <td>  ${scoolitem} </td> 
//     area.textContent = scoolItem.ezor;   // <td>  ${area} </td> 
//     adress.textContent = scoolItem.ktovet;  // <td>  ${ktovet} </td> 
//     schoolName.textContent = scoolItem.shem_beit_sefer;  // <td>  ${shem_beit_sefer} </td> 
//     personName.textContent = scoolItem.menahel;  // <td>  ${menahel} </td> 

//     row.appendChild(scoolId)
//     row.appendChild(area)
//     row.appendChild(adress)
//     row.appendChild(schoolName)
//     row.appendChild(personName)

//     document.getElementsByTagName('tbody')[0].appendChild(row);

// }





{/* <tr>
<td> 1</td>
<td> ירושלים</td>
<td> דרך חברון 20</td>
<td> אור ירוק</td>
<td> משה</td>
</tr> */}
