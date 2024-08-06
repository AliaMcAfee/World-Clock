// Chicago
setInterval(function () {
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDateElement = document.querySelector(".date");
  let chicagoTimeElement = document.querySelector(".time");
  let chicagoTime = moment().format("h:mm:ss [<small>]A[</small>]");
  let chicagoDate = moment().format("MMMM Do YYYY");

  chicagoDateElement.innerHTML = chicagoDate;
  chicagoTimeElement.innerHTML = chicagoTime;
}, 1000);
