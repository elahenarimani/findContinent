"use strict"
let countryName = "South Africa"
fetch('https://restcountries.com/v3.1/all')
   .then(result => result.json())
   .then(res => console.log(findContinent(res)));        
function findContinent(data){
   let result = data.find(item =>item.name.common ==="South Africa"); 
   return result.continents;
}