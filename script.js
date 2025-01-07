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
const janDivChineseNewYear = document.getElementById("jan-div-chinesenewyear");

const janDivList = [janDivMentor, janDivPoverty, janDivSlavery, janDivNewYear, janDivBraille, janDivOrthodox,
                    janDivMaghi, janDivMartin, janDivReligion, janDivEducation, janDivMahayana, janDivHolocaust, janDivChineseNewYear]

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
const janChineseNewYear = document.getElementById("jan-chinesenewyear")

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
janChineseNewYear.addEventListener("click", function() {
  changeDisplay(janDivChineseNewYear, janDivList)
})

//FEBRUARY
const febDivHeart = document.getElementById("feb-div-heart");
const febDivBlackHistory = document.getElementById("feb-div-blackhistory");
const febDivFreedom = document.getElementById("feb-div-freedom");
const febDivRosa = document.getElementById("feb-div-rosa");
const febDivInternet = document.getElementById("feb-div-internet");
// const febDivChineseNewYear = document.getElementById("feb-div-chinesenewyear");
const febDivScience = document.getElementById("feb-div-science");
const febDivEpilepsy = document.getElementById("feb-div-epilepsy");
// const febDivMardi = document.getElementById("feb-div-mardi");
// const febDivAsh = document.getElementById("feb-div-ash");
const febDivValentines = document.getElementById("feb-div-valentines");
const febDivNirvana = document.getElementById("feb-div-nirvana");
const febDivCancer = document.getElementById("feb-div-cancer");
const febDivJustice = document.getElementById("feb-div-justice");
const febDivRamadan = document.getElementById("feb-div-ramadan");
const febDivEthnic = document.getElementById("feb-div-ethnic");
const febDivShivratri = document.getElementById("feb-div-shivratri")

const febDivList = [febDivEthnic, febDivHeart, febDivBlackHistory, febDivFreedom, febDivRosa, febDivInternet, 
                     febDivScience, febDivEpilepsy, febDivValentines, febDivNirvana, febDivCancer, febDivJustice, 
                     febDivShivratri, febDivRamadan]

const febHeart = document.getElementById("feb-heart")
const febBlackHistory = document.getElementById("feb-blackhistory")
const febFreedom = document.getElementById("feb-freedom")
const febRosa = document.getElementById("feb-rosa")
const febInternet = document.getElementById("feb-internet")
// const febChineseNewYear= document.getElementById("feb-chinesenewyear")
const febScience = document.getElementById("feb-science")
const febEpilepsy = document.getElementById("feb-epilepsy")
// const febMardi = document.getElementById("feb-mardi")
// const febAsh = document.getElementById("feb-ash")
const febValentines = document.getElementById("feb-valentines")
const febNirvana = document.getElementById("feb-nirvana")
const febCancer = document.getElementById("feb-cancer")
const febJustice = document.getElementById("feb-justice")
const febRamadan = document.getElementById("feb-ramadan")
const febEthnic = document.getElementById("feb-ethnic")
const febShivratri = document.getElementById("feb-shivratri")

febHeart.addEventListener("click", function() {
  changeDisplay(febDivHeart, febDivList)
})
febBlackHistory.addEventListener("click", function() {
  changeDisplay(febDivBlackHistory, febDivList)
})
febFreedom.addEventListener("click", function() {
  changeDisplay(febDivFreedom, febDivList)
})
febRosa.addEventListener("click", function() {
  changeDisplay(febDivRosa, febDivList)
})
febInternet.addEventListener("click", function() {
  changeDisplay(febDivInternet, febDivList)
})
//febChineseNewYear.addEventListener("click", function() {
//changeDisplay(febDivChineseNewYear, febDivList)
//})
febScience.addEventListener("click", function() {
  changeDisplay(febDivScience, febDivList)
})
febEpilepsy.addEventListener("click", function() {
  changeDisplay(febDivEpilepsy, febDivList)
})
// febMardi.addEventListener("click", function() {
//  changeDisplay(febDivMardi, febDivList)
// })
// febAsh.addEventListener("click", function() {
//   changeDisplay(febDivAsh, febDivList)
// })
febValentines.addEventListener("click", function() {
  changeDisplay(febDivValentines, febDivList)
})
febNirvana.addEventListener("click", function() {
  changeDisplay(febDivNirvana, febDivList)
})
febCancer.addEventListener("click", function() {
  changeDisplay(febDivCancer, febDivList)
})
febJustice.addEventListener("click", function() {
  changeDisplay(febDivJustice, febDivList)
})
febRamadan.addEventListener("click", function() {
   changeDisplay(febDivRamadan, febDivList)
  })
febEthnic.addEventListener("click", function() {
  changeDisplay(febDivEthnic, febDivList)
})
febShivratri.addEventListener("click", function() {
  changeDisplay(febDivShivratri, febDivList)
})

//MARCH
// Get references to the div elements for each observance
const marDivDevelopmental = document.getElementById("mar-div-developmental");
const marDivGender = document.getElementById("mar-div-gender");
const marDivGreek = document.getElementById("mar-div-greek");
const marDivIrish = document.getElementById("mar-div-irish");
const marDivColon = document.getElementById("mar-div-colon");
const marDivKidney = document.getElementById("mar-div-kidney");
const marDivSclerosis = document.getElementById("mar-div-sclerosis");
const marDivWomen = document.getElementById("mar-div-women");
const marDivEmployee = document.getElementById("mar-div-employee");
// const marDivMaha = document.getElementById("mar-div-maha");
const marDivWomensDay = document.getElementById("mar-div-womensday");
const marDivPi = document.getElementById("mar-div-pi");
// const marDivRamadan = document.getElementById("mar-div-ramadan");
const marDivEqual = document.getElementById("mar-div-equal");
const marDivPatrick = document.getElementById("mar-div-patrick");
const marDivDown = document.getElementById("mar-div-down");
const marDivPurim = document.getElementById("mar-div-purim");
//const marDivPalm = document.getElementById("mar-div-palm");
const marDivHoli = document.getElementById("mar-div-holi");
const marDivSlave = document.getElementById("mar-div-slave");
// const marDivFriday = document.getElementById("mar-div-friday");
const marDivTransgender = document.getElementById("mar-div-transgender");
// const marDivEaster = document.getElementById("mar-div-easter");
const marDivLaylat = document.getElementById("mar-div-laylat");
const marDivEidalfitr = document.getElementById("mar-div-eidalfitr");
 
// Create an array of all the div elements for easy iteration
const marDivList = [marDivPurim, marDivHoli, marDivDevelopmental, marDivGender, marDivGreek, marDivIrish, marDivColon, 
                    marDivKidney, marDivSclerosis, marDivWomen, marDivEmployee, marDivWomensDay,
                    marDivPi, marDivEqual, marDivPatrick, marDivDown, 
                    marDivSlave, marDivTransgender, marDivLaylat, marDivEidalfitr  ]

// Get references to the list items (observances) that will trigger the display of the corresponding divs
const marDevelopmental = document.getElementById("mar-developmental")
const marGender = document.getElementById("mar-gender")
const marGreek = document.getElementById("mar-greek")
const marIrish = document.getElementById("mar-irish")
const marColon = document.getElementById("mar-colon")
const marKidney = document.getElementById("mar-kidney")
const marSclerosis = document.getElementById("mar-sclerosis")
const marWomen = document.getElementById("mar-women")
const marEmployee = document.getElementById("mar-employee")
// const marMaha = document.getElementById("mar-maha")
const marWomensDay = document.getElementById("mar-womensday")
const marPi = document.getElementById("mar-pi")
// const marRamadan = document.getElementById("mar-ramadan")
const marEqual = document.getElementById("mar-equal")
const marPatrick = document.getElementById("mar-patrick")
const marDown = document.getElementById("mar-down")
const marPurim = document.getElementById("mar-purim")
//const marPalm = document.getElementById("mar-palm")
const marHoli = document.getElementById("mar-holi")
const marSlave = document.getElementById("mar-slave")
const marLaylat = document.getElementById("mar-laylat")
const marEidalfitr = document.getElementById("mar-eidalfitr")

// const marFriday = document.getElementById("mar-friday")
const marTransgender = document.getElementById("mar-transgender")
// const marEaster = document.getElementById("mar-easter")


// Add event listeners to each list item to handle click events
marDevelopmental.addEventListener("click", function() {
  changeDisplay(marDivDevelopmental, marDivList) // Display the corresponding div and hide others
})
marGender.addEventListener("click", function() {
  changeDisplay(marDivGender, marDivList)
})
marGreek.addEventListener("click", function() {
  changeDisplay(marDivGreek, marDivList)
})
marIrish.addEventListener("click", function() {
  changeDisplay(marDivIrish, marDivList)
})
marColon.addEventListener("click", function() {
  changeDisplay(marDivColon, marDivList)
})
marKidney.addEventListener("click", function() {
  changeDisplay(marDivKidney, marDivList)
})
marSclerosis.addEventListener("click", function() {
  changeDisplay(marDivSclerosis, marDivList)
})
marWomen.addEventListener("click", function() {
  changeDisplay(marDivWomen, marDivList)
})
marEmployee.addEventListener("click", function() {
  changeDisplay(marDivEmployee, marDivList)
})
//marMaha.addEventListener("click", function() {
//  changeDisplay(marDivMaha, marDivList)
//})
marWomensDay.addEventListener("click", function() {
  changeDisplay(marDivWomensDay, marDivList)
})
marPi.addEventListener("click", function() {
  changeDisplay(marDivPi, marDivList)
})
// marRamadan.addEventListener("click", function() {
//  changeDisplay(marDivRamadan, marDivList)
//})
marEqual.addEventListener("click", function() {
  changeDisplay(marDivEqual, marDivList)
})
marPatrick.addEventListener("click", function() {
  changeDisplay(marDivPatrick, marDivList)
})
marDown.addEventListener("click", function() {
  changeDisplay(marDivDown, marDivList)
})
marPurim.addEventListener("click", function() {
  changeDisplay(marDivPurim, marDivList)
})
//marPalm.addEventListener("click", function() {
//  changeDisplay(marDivPalm, marDivList)
//})
marHoli.addEventListener("click", function() {
  changeDisplay(marDivHoli, marDivList)
})
marSlave.addEventListener("click", function() {
  changeDisplay(marDivSlave, marDivList)
})
//marFriday.addEventListener("click", function() {
//  changeDisplay(marDivFriday, marDivList)
//})
marTransgender.addEventListener("click", function() {
  changeDisplay(marDivTransgender, marDivList)
})
//marEaster.addEventListener("click", function() {
//  changeDisplay(marDivEaster, marDivList)
//})
marLaylat.addEventListener("click", function() {
  changeDisplay(marDivLaylat, marDivList)
})
marEidalfitr.addEventListener("click", function() {
  changeDisplay(marDivEidalfitr, marDivList)
})





// DECEMBER
const decDivAidsMonth = document.getElementById("dec-div-aidsmonth");
const decDivHumanMonth = document.getElementById("dec-div-humanmonth");
const decDivDisabilities = document.getElementById("dec-div-disabilities");
const decDivVolunteer = document.getElementById("dec-div-volunteer");
const decDivGenocide = document.getElementById("dec-div-genocide");
const decDivHumanDay = document.getElementById("dec-div-humanday");
const decDivSolstice = document.getElementById("dec-div-solstice");
const decDivChristmas = document.getElementById("dec-div-christmas");
const decDivHanukkah = document.getElementById("dec-div-hanukkah");
const decDivBoxing = document.getElementById("dec-div-boxing");
const decDivKwanzaa = document.getElementById("dec-div-kwanzaa");
const decDivNewYearsEve = document.getElementById("dec-div-newyearseve");
const decDivAidsDay = document.getElementById("dec-div-aidsday");


const decDivList = [decDivAidsMonth, decDivHumanMonth, decDivDisabilities, decDivVolunteer, decDivGenocide, 
                    decDivHumanDay, decDivSolstice, decDivChristmas, decDivHanukkah, decDivBoxing, decDivKwanzaa, 
                    decDivNewYearsEve, decDivAidsDay]

const decAidsMonth = document.getElementById("dec-aidsmonth")
const decHumanMonth = document.getElementById("dec-humanmonth")
const decAidsDay = document.getElementById("dec-aidsday")
const decDisabilities = document.getElementById("dec-disabilities")
const decVolunteer = document.getElementById("dec-volunteer")
const decGenocide = document.getElementById("dec-genocide")
const decHumanDay = document.getElementById("dec-humanday")
const decSolstice = document.getElementById("dec-solstice")
const decChristmas = document.getElementById("dec-christmas")
const decHanukkah = document.getElementById("dec-hanukkah")
const decKwanzaa = document.getElementById("dec-kwanzaa")
const decNewYearsEve = document.getElementById("dec-newyearseve")
const decBoxing = document.getElementById("dec-boxing")

decAidsMonth.addEventListener("click", function() {
  changeDisplay(decDivAidsMonth, decDivList)
})
decHumanMonth.addEventListener("click", function() {
  changeDisplay(decDivHumanMonth, decDivList)
})
decAidsDay.addEventListener("click", function() {
  changeDisplay(decDivAidsDay, decDivList)
})
decDisabilities.addEventListener("click", function() {
  changeDisplay(decDivDisabilities, decDivList)
})
decVolunteer.addEventListener("click", function() {
  changeDisplay(decDivVolunteer, decDivList)
})
decGenocide.addEventListener("click", function() {
  changeDisplay(decDivGenocide, decDivList)
})
decHumanDay.addEventListener("click", function() {
  changeDisplay(decDivHumanDay, decDivList)
})
decSolstice.addEventListener("click", function() {
  changeDisplay(decDivSolstice, decDivList)
})
decChristmas.addEventListener("click", function() {
  changeDisplay(decDivChristmas, decDivList)
})
decHanukkah.addEventListener("click", function() {
  changeDisplay(decDivHanukkah, decDivList)
})
decKwanzaa.addEventListener("click", function() {
  changeDisplay(decDivKwanzaa, decDivList)
})
decNewYearsEve.addEventListener("click", function() {
  changeDisplay(decDivNewYearsEve, decDivList)
})
decBoxing.addEventListener("click", function() {
  changeDisplay(decDivBoxing, decDivList)
})



const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const currentMonthNumber = new Date();

const displayTab = document.getElementById("display-tab");
displayTab.innerText = monthList[currentMonthNumber.getMonth()];

const janTab = document.getElementById("january-mobile-tab");
const febTab = document.getElementById("february-mobile-tab");
const marTab = document.getElementById("march-mobile-tab");
const aprTab = document.getElementById("april-mobile-tab");
const mayTab = document.getElementById("may-mobile-tab");
const junTab = document.getElementById("june-mobile-tab");
const julTab = document.getElementById("july-mobile-tab");
const augTab = document.getElementById("august-mobile-tab");
const sepTab = document.getElementById("september-mobile-tab");
const octTab = document.getElementById("october-mobile-tab");
const novTab = document.getElementById("november-mobile-tab");
const decTab = document.getElementById("december-mobile-tab");

janTab.addEventListener("click", function() {
  displayTab.innerText = "January"
})
febTab.addEventListener("click", function() {
  displayTab.innerText = "February"
})
marTab.addEventListener("click", function() {
  displayTab.innerText = "March"
})
aprTab.addEventListener("click", function() {
  displayTab.innerText = "April"
})
mayTab.addEventListener("click", function() {
  displayTab.innerText = "May"
})
junTab.addEventListener("click", function() {
  displayTab.innerText = "June"
})
julTab.addEventListener("click", function() {
  displayTab.innerText = "July"
})
augTab.addEventListener("click", function() {
  displayTab.innerText = "August"
})
sepTab.addEventListener("click", function() {
  displayTab.innerText = "September"
})
octTab.addEventListener("click", function() {
  displayTab.innerText = "October"
})
novTab.addEventListener("click", function() {
  displayTab.innerText = "November"
})
decTab.addEventListener("click", function() {
  displayTab.innerText = "December"
})