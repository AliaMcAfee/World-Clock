// Chicago
setInterval(function () {
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement.length) {
    let chicagoDateElement = document.querySelector(".date");
    let chicagoTimeElement = document.querySelector(".time");
    let chicagoTime = moment().tz();

    chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let athensElement = document.querySelector("#athens");
  if (athensElement.length) {
    let athensDateElement = document.querySelector(".date");
    let athensTimeElement = document.querySelector(".time");
    let athensTime = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
    athensTimeElement.innerHTML = athensTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
