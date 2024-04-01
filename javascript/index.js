let jakartaElement = document.querySelector("#jakarta");
let jakartaDateElement = jakartaElement.querySelector(".date");
let jakartaTimeElement = jakartaElement.querySelector(".time");
let jakartaTime = moment().tz("Asia/Jakarta");

jakartaDateElement.innerHTML = jakartaTime.format("MMMM Do YYYY");
jakartaTimeElement.innerHTML = jakartaTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

let singaporeElement = document.querySelector("#singapore");
let singaporeDateElement = singaporeElement.querySelector(".date");
let singaporeTimeElement = singaporeElement.querySelector(".time");
let singaporeTime = moment().tz("Asia/Singapore");

singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
singaporeTimeElement.innerHTML = singaporeTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

let kualalumpurElement = document.querySelector("#kualalumpur");
let kualalumpurDateElement = kualalumpurElement.querySelector(".date");
let kualalumpurTimeElement = kualalumpurElement.querySelector(".time");
let kualalumpurTime = moment().tz("Asia/Kuala_Lumpur");

kualalumpurDateElement.innerHTML = kualalumpurTime.format("MMMM Do YYYY");
kualalumpurTimeElement.innerHTML = kualalumpurTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

let bangkokElement = document.querySelector("#bangkok");
let bangkokDateElement = bangkokElement.querySelector(".date");
let bangkokTimeElement = bangkokElement.querySelector(".time");
let bangkokTime = moment.tz("Asia/Bangkok");

bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do YYYY");
bangkokTimeElement.innerHTML = bangkokTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

let phnompenhElement = document.querySelector("#phnompenh");
let phnompenhDateElement = phnompenhElement.querySelector(".date");
let phnompenhTimeElement = phnompenhElement.querySelector(".time");
let phnompenhTime = moment.tz("Asia/Phnom_Penh");

phnompenhDateElement.innerHTML = phnompenhTime.format("MMMM Do YYYY");
phnompenhTimeElement.innerHTML = phnompenhTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

let hanoiElement = document.querySelector("#hanoi");
let hanoiDateElement = hanoiElement.querySelector(".date");
let hanoiTimeElement = hanoiElement.querySelector(".time");
let hanoiTime = moment.tz("Asia/Ho_Chi_Minh");

hanoiDateElement.innerHTML = hanoiTime.format("MMMM Do YYYY");
hanoiTimeElement.innerHTML = hanoiTime.format("h:mm:ss [<small>]A[</small>]");

let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment.tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

let seoulElement = document.querySelector("#seoul");
let seoulDateElement = seoulElement.querySelector(".date");
let seoulTimeElement = seoulElement.querySelector(".time");
let seoulTime = moment.tz("Asia/Seoul");

seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small>]");

let beijingElement = document.querySelector("#beijing");
let beijingDateElement = beijingElement.querySelector(".date");
let beijingTimeElement = beijingElement.querySelector(".time");
let beijingTime = moment.tz("Asia/Shanghai");

beijingDateElement.innerHTML = beijingTime.format("MMMM Do YYYY");
beijingTimeElement.innerHTML = beijingTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
