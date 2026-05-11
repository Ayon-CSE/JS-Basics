document.body.style.backgroundColor = 'black';
// generate a random color

function randomColor() {
  let hex = "0123456789ABCDEF";
  let c = "#";

  for (let i = 0; i < 6; i++) {
    c += hex[Math.round(Math.random() * 15)];
  }

  return c;
}

let intervalID;

document.querySelector("#start").addEventListener(
    "click", function (e) {
        if (!intervalID) {
            intervalID = setInterval(function () {
            document.body.style.backgroundColor = randomColor();
            }, 1000);
       }
    },
  false,
);

document.querySelector("#stop").addEventListener(
  "click", function (e) {
        clearInterval(intervalID);
        intervalID = null; // reset the intervalID to null after clearing the interval
  },
  false,
);
