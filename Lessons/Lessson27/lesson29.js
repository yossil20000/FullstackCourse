const countriesApi = "https://corona.lmao.ninja/v2/countries";
const historicalApi = "https://corona.lmao.ninja/v2/historical";

let countries;
let countriesHistorical;
let containerBody = document.getElementById("containerBody");
const containerSummary = document.getElementById("containerSummary");
let containerCorona = document.getElementById("containerCorona");
const chart1 = document.getElementById("chartId");
  const chartTitle = document.getElementById("chartTitleId");
(async () => {
  countries = await getDataAsync(countriesApi);
  console.log("countries");
  console.log(countries[0]);
  countries.forEach((element) => {
    console.log(
      `${element.countryInfo._id},${element.country},${element.criticalPerOneMillion},${element.countryInfo.flag}`
    );
  });
  DrawCountries(countries);
})();

(async () => {
  countriesHistorical = await getDataAsync(historicalApi);
  console.log("Historical");
  console.log(countriesHistorical[0]);
})();

function DrawCountries(countries) {
  countries.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML = fillRow(element);

    containerBody.appendChild(tr);
    let item = document.getElementById(`${element.country}`);
    if (item) {
      item.addEventListener("click", SelectCountry);
    }
  });
}

function fillRow(country) {
  return `<td ><button id=${country.country} onClick=SelectCountry>${country.countryInfo._id}</button></td><td>${country.country}</td><td><img src=${country.countryInfo.flag} height=50px width=50px></img></td><td>${country.criticalPerOneMillion}</td>`;
}
function SelectCountry(e) {
  console.log(`Selected Country : ${e.target.id}`);
  let found = countriesHistorical.find(
    (item) => item.country.toUpperCase() == e.target.id.toUpperCase()
  );
  containerSummary.innerHTML = "";
  let h2 = document.createElement("h2");
  h2.innerText = `${e.target.id}`;
  containerSummary.appendChild(h2);
  let element = document.createElement("p");
  if (found) {
    console.log(`Found: ${found.country}`);
    console.log(`Key:${Object.keys(found.timeline.cases)[0]} Value:${Object.values(found.timeline.cases)[0]}`)
    var newArr = Object.keys(found.timeline.cases).map(function (k) {
      return found.timeline.cases[k];
    });
    element.innerHTML = `Country <b>${found.country}</b> On ${
      Object.keys(found.timeline.cases)[0]
    } Found: ${newArr[0]} cases `;

    

    console.log(newArr);
    console.log(Object.keys(found.timeline.cases));    console.log(found.timeline.cases["1/1/22"]);
    DrawChart(found.timeline.cases,"Cases");
  }
  else{
    element.innerHTML = `Country <b>${e.target.id}</b> No History Information`
  }
  containerSummary.appendChild(element);
  /*     if(item.country.toUpperCase() == e.target.id.toUpperCase())
    {
        console.log(`Found: ${item.country}`);
        return true;
    }
    else
    {
        return false;
    }
}); */
}

function DrawChart(data,title){
  
  chartTitle.innerText = title;
  chart1.innerHTML ="";
  let max = GetMaxFromKeyArray(data);
  let min = GetMinFromKeyArray(data);
  for(i = 0; i < Object.values(data).length; i++)
  {
    let colElement = document.createElement('div');
    colElement.className = "item";
    let itemDate = GetDate(Object.keys(data)[i]);
    let chartCol = AddChartCol((Object.values(data)[i] - min ) / (max -min) , itemDate.getDate());
    colElement.innerHTML = chartCol;
    chart1.appendChild(colElement);
    
  }
}
function AddChartCol(percent,title){
  let chartCol = `<div class=cCol style="height: ${50*percent}px";></div><div>${title}</div></div>`;
  return chartCol;
  
}
function GetMaxFromKeyArray(arr){
  let max= -Infinity;
/*   arr.forEach(function (i) {
      const { key, val } = i;
      if (val > max)
        max = val;
    }); */

    Object.values(arr).forEach(el => {
      
      if (el > max)
        max = el;
    });
  return max;
}

function GetMinFromKeyArray(arr){
  let min= Infinity;
/*   arr.forEach(function (i) {
      const { key, val } = i;
      if (val > max)
        max = val;
    }); */

    Object.values(arr).forEach(el => {
      
      if (el < min)
        min = el;
    });
  return min;
}
function GetDateFromArray(stringDate){
  stringDate.forEach( (d) => {
    if (!isNaN(Date.parse(d))) {
        console.log(new Date(d));
    }    
  });
}
function GetDate(stringDate){
  if (!isNaN(Date.parse(stringDate))) {
    //console.log(new Date(stringDate));
    return new Date(stringDate);
}
}

