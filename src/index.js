// Chicago
setInterval(function () {
  let phoenixElement = document.querySelector("#phoenix");
  if (phoenixElementElement) {
    let phoenixDateElement = document.querySelector(".date");
    let phoenixDateElementTimeElement = document.querySelector(".time");
    let phoenixTime = moment().tz();

    phoenixDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
    phoenixTimeElement.innerHTML = chicagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let athensElement = document.querySelector("#athens");
  if (athensElement) {
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
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
