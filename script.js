//changes the desktop and mobile versions
const wind = window.innerWidth

function desktopMobile(w) {
  const desk = document.getElementById("desktop");
  const mob = document.getElementById("mobile");
  if (w > 1100) {
    desk.style.display = "block"
    
  }
  else {
    mob.style.display = "block"
  }
}

desktopMobile(wind)

//defines current month
const month = ["january","february","march","april","may","june","july","august","september","october","november","december"];
const d = new Date();
let current_month = month[d.getMonth()];

//changes the opening view to the current month ON DESKTOP
function currentMonthDisplay(mon) {
  const currentMonthDiv = document.getElementById(mon);
  currentMonthDiv.classList.add("show");
  currentMonthDiv.classList.add("active")
  const currentMonthTab = document.getElementById(mon + "-tab");
  currentMonthTab.classList.add("active")
}
currentMonthDisplay(current_month)



//changes the div that displays
function changeDisplay(div, divList) {
  for (const element of divList) {
    if (div === element) {
      element.style.display = "flex"
    } else {
      element.style.display = "none"
    }
  }
}

//JANUARY
const janDivMentor = document.getElementById("jan-div-mentor");
const janDivPoverty = document.getElementById("jan-div-poverty");
const janDivSlavery = document.getElementById("jan-div-slavery");
const janDivNewYear = document.getElementById("jan-div-newyear");
const janDivBraille = document.getElementById("jan-div-braille");
const janDivOrthodox = document.getElementById("jan-div-orthodox");
const janDivMaghi = document.getElementById("jan-div-maghi");
const janDivMartin = document.getElementById("jan-div-martin");
const janDivReligion = document.getElementById("jan-div-religion");
const janDivEducation = document.getElementById("jan-div-education");
const janDivMahayana = document.getElementById("jan-div-mahayana");
const janDivHolocaust = document.getElementById("jan-div-holocaust");

const janDivList = [janDivMentor, janDivPoverty, janDivSlavery, janDivNewYear, janDivBraille, janDivOrthodox,
                    janDivMaghi, janDivMartin, janDivReligion, janDivEducation, janDivMahayana, janDivHolocaust]

const janMentor = document.getElementById("jan-mentor")
const janPoverty = document.getElementById("jan-poverty")
const janSlavery = document.getElementById("jan-slavery")
const janNewYear = document.getElementById("jan-newyear")
const janBraille = document.getElementById("jan-braille")
const janOrthodox = document.getElementById("jan-orthodox")
const janMaghi = document.getElementById("jan-maghi")
const janMartin = document.getElementById("jan-martin")
const janReligion = document.getElementById("jan-religion")
const janEducation = document.getElementById("jan-education")
const janMahayana = document.getElementById("jan-mahayana")
const janHolocaust = document.getElementById("jan-holocaust")

janMentor.addEventListener("click", function() {
  changeDisplay(janDivMentor, janDivList)
})
janPoverty.addEventListener("click", function() {
  changeDisplay(janDivPoverty, janDivList)
})
janSlavery.addEventListener("click", function() {
  changeDisplay(janDivSlavery, janDivList)
})
janNewYear.addEventListener("click", function() {
  changeDisplay(janDivNewYear, janDivList)
})
janBraille.addEventListener("click", function() {
  changeDisplay(janDivBraille, janDivList)
})
janOrthodox.addEventListener("click", function() {
  changeDisplay(janDivOrthodox, janDivList)
})
janMaghi.addEventListener("click", function() {
  changeDisplay(janDivMaghi, janDivList)
})
janMartin.addEventListener("click", function() {
  changeDisplay(janDivMartin, janDivList)
})
janReligion.addEventListener("click", function() {
  changeDisplay(janDivReligion, janDivList)
})
janEducation.addEventListener("click", function() {
  changeDisplay(janDivEducation, janDivList)
})
janMahayana.addEventListener("click", function() {
  changeDisplay(janDivMahayana, janDivList)
})
janHolocaust.addEventListener("click", function() {
  changeDisplay(janDivHolocaust, janDivList)
})



