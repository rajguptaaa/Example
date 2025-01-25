// const url = 'https://youtube138.p.rapidapi.com/auto-complete/?q=desp&hl=en&gl=US';
// async function apiHandle() {
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '4873f19498msh6f4de67b5626175p14c464jsnc00dc4a06f5f',
//       'x-rapidapi-host': 'youtube138.p.rapidapi.com'
//     }
//   };
//   try {
//     const response = await fetch(url, options);                                         NOT_WORKING
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);               
//   }
// }
// apiHandle();

// x ---------------------------------------------------------------------

const apiKey = '6b6b0bcffb84d6b59d9dacf3613efd4f';
const getData = async () => {
  const city = document.getElementById("input-box").value; // phele city name input liya
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const dataObj = await res.json();
    console.log(dataObj);
    displayData(dataObj);
}catch (err) {
    alert("Kuch to garbar hai! Daya");
  }
};
const handelSearch = () => {
  getData();
};
const displayData = (data) => {

  const prevResult = document.querySelector(".view-search");
  if (prevResult) prevResult.remove();

  const view = document.createElement("div");
  view.className = "view-search";
  view.innerHTML = `
    <h2>${data.name}:</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
        <p>Speed: ${data.wind.speed} KMPH</p>
  `;
  document.body.appendChild(view);
};

