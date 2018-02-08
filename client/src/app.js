const populateList = function(countries) {
  countries.forEach(function(country){
    const ul = document.querySelector('#countries')
    li = document.createElement('li')
    li.innerText = country.name
    ul.appendChild(li)
  })
}

const onRequestComplete = function(data) {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);
  populateList(countries)
}

const makeRequest = function() {
  const request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/api/countries");
  request.addEventListener('load', onRequestComplete);
  request.send();
}

const app = function() {
  makeRequest();
}

window.addEventListener('load', app);
