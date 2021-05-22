console.log("file atteched");

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
//   "..." is used tp saperate object Ex, cities="data" would be cities=[[{},{},..],...] , cities="...data" would be cities=[{},{},...]

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    let regEx = new RegExp(wordToMatch, "gi");
    return place.city.match(regEx) || place.state.match(regEx);
  });
}

function displayMatch() {
  // if (regEx.lenght == 0) {
  //         `       <li>Filter for a city</li>
  //         <li>or a state</li>
  //         </ul>`;
  // }

  let matchesArray = findMatches(this.value, cities);
  let html = matchesArray
    .map((place) => {
      let regEx = new RegExp(this.value, "gi");
      let cityName = place.city.replace(
        regEx,
        `<span class="hl">${this.value}</span>`
      );
      let stateName = place.state.replace(
        regEx,
        `<span class="hl">${this.value}</span>`
      );
      return `<li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${place.population}</span>
            </li>`;
    })
    .join("");

  suggestions.innerHTML = html;
}
let searchInput = document.querySelector(".search");
let suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatch);
searchInput.addEventListener("keyup", displayMatch);
