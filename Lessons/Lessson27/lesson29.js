const countriesApi = "https://corona.lmao.ninja/v2/countries";
const historicalApi = "https://corona.lmao.ninja/v2/historical";

let countries;
let countriesHistorical;
let containerBody = document.getElementById("containerBody");
let containerCorona = document.getElementById("containerCorona");
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
  containerCorona.innerHTML = "";
  let h2 = document.createElement("h2");
  h2.innerText = `${e.target.id}`;
  containerCorona.appendChild(h2);
  let element = document.createElement("p");
  if (found) {
    console.log(`Found: ${found.country}`);
    var newArr = Object.keys(found.timeline.cases).map(function (k) {
      return found.timeline.cases[k];
    });
    element.innerHTML = `Country <b>${found.country}</b> On ${
      Object.keys(found.timeline.cases)[0]
    } Found: ${newArr[0]} cases `;

    

    console.log(newArr);
    console.log(Object.keys(found.timeline.cases));
    console.log(found.timeline.cases["1/1/22"]);
  }
  else{
    element.innerHTML = `Country <b>${e.target.id}</b> No History Information`
  }
  containerCorona.appendChild(element);
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
