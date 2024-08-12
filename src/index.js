function updateTime() {
  let phoenixElement = document.querySelector("#phoenix");
  if (phoenixElement) {
    let phoenixDateElement = phoenixElement.querySelector(".date");
    let phoenixTimeElement = phoenixElement.querySelector(".time");
    let phoenixTime = moment().tz("America/Phoenix");

    phoenixDateElement.innerHTML = phoenixTime.format("MMMM Do YYYY");
    phoenixTimeElement.innerHTML = phoenixTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let athensElement = document.querySelector("#athens");
  if (athensElement) {
    let athensDateElement = athensElement.querySelector(".date");
    let athensTimeElement = athensElement.querySelector(".time");
    let athensTime = moment().tz("Europe/Athens");

    athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
    athensTimeElement.innerHTML = athensTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let shanghaiElement = document.querySelector("#shanghai");
  if (shanghaiElement) {
    let shanghaiDateElement = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    let shanghaiTime = moment().tz("Asia/Shanghai");

    shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = shanghaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

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

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
