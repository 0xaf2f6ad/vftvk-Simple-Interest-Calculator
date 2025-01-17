// all the relevant elements
const amountField = document.getElementById("principal");
const rateRangeField = document.getElementById("rate");
const ratePercentageTxt = document.getElementById("rate-percentage");
const yearsField = document.getElementById("years");
const computeBtn = document.querySelector(".compute-btn");
const computeForm = document.getElementById("compute-form");

const resultTxts = {
  container: document.querySelector(".result-info-container"),
  a: document.getElementById("r1-txt"),
  b: document.getElementById("r2-txt"),
  c: document.getElementById("r3-txt"),
  d: document.getElementById("r4-txt"),
};

// helper functions
const computeInterest = () => {
  const principal = parseFloat(amountField.value);
  const rate = parseFloat(rateRangeField.value);
  const years = parseFloat(yearsField.value);
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear + years;

  if (principal === 0) {
    alert("Enter a number greater than 0");
    amountField.focus();
    return;
  }
  if (principal < 0) {
    alert("Enter a number positive number");
    amountField.focus();
    return;
  }

  const interest = principal * (rate / 100) * years;

  resultTxts.container.style.display = "block";
  resultTxts.a.innerHTML = `${principal}`;
  resultTxts.b.innerHTML = `${rate}%`;
  resultTxts.c.innerHTML = `${interest}`;
  resultTxts.d.innerHTML = `${totalYears}`;
};

const addYearsToYearsSelect = (years) => {
  yearsField.innerHTML = "";
  for (let i = 0; i < years; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    option.text = i + 1;
    yearsField.appendChild(option);
  }
};

// event listeners
computeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  computeInterest(e);
});

rateRangeField.addEventListener("change", () => {
  ratePercentageTxt.innerText = `${rateRangeField.value}%`;
});

document.addEventListener("DOMContentLoaded", () => {
  addYearsToYearsSelect(10);
});
