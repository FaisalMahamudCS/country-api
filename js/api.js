fetch('https://restcountries.com/v3.1/all')
.then(response =>response.json())
.then(data =>display(data))

function display(data){
    var divs=document.getElementById('country');
    for(country of data){
console.log(country.name.common)
var div=document.createElement('div');
div.classList.add('col')
div.innerHTML=
`<div class="col">
<div class="card">
  <img src="${country.flags.png}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
    <h5 class="card-title">${country.name.common}</h5>
    <p class="card-text">Capital: ${country.capital} <br>
    TimeZone ${country.timezones}
    </p>
  </div>
</div>`
divs.appendChild(div);
    }

}

function search(){
    var cntry=document.getElementById('names').value;
    console.log(cntry);
    var url=`https://restcountries.com/v3.1/name/${cntry}`
    console.log(url)
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayNation(data))
}

function displayNation(data){
    var divi=document.getElementById('nations')
    data.forEach(nation => {
        var divs=document.createElement('div');
        divs.innerHTML=`
        <div class="card" style="width: 18rem;">
  <img src="${nation.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Name: ${nation.name.common}</h5>
    <p class="card-text text-center">Capital ${nation.capital}</p>
    <p class="card-text text-center">Continent ${nation.continents}</p>

  </div>
</div>
        `
        divi.appendChild(divs);  
    });
  

}
//https://restcountries.com/v3.1/name/{name}