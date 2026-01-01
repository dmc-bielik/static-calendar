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

//changes the opening view to the current month ON MOBILE
function currentMonthDisplayMobile(mon) {
  const currentMonthDiv = document.getElementById(mon + "-mobile");
  currentMonthDiv.classList.add("show");
  currentMonthDiv.classList.add("active")
  const currentMonthTab = document.getElementById(mon + "-mobile-tab");
  currentMonthTab.classList.add("active")
}
currentMonthDisplayMobile(current_month)

//changes the tab display to the current month on MOBILE
const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonthNumber = new Date();

const displayTab = document.getElementById("display-tab");
displayTab.innerText = monthList[currentMonthNumber.getMonth()];

// Loop through all month tabs and add event listeners
for (let i = 0; i < monthList.length; i++) {
  const tabId = `${monthList[i].toLowerCase()}-mobile-tab`; // Generate the tab ID dynamically
  const tabElement = document.getElementById(tabId);
  
  if (tabElement) {  // Check if the element exists (in case some months are missing from HTML)
    tabElement.addEventListener("click", function() {
      displayTab.innerText = monthList[i]; // Update the display tab text
    });
  }
}



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
const febDivChineseNewYear = document.getElementById("feb-div-chinesenewyear");
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
                     febDivShivratri, febDivRamadan, febDivChineseNewYear]

const febHeart = document.getElementById("feb-heart");
const febBlackHistory = document.getElementById("feb-blackhistory");
const febFreedom = document.getElementById("feb-freedom")
const febRosa = document.getElementById("feb-rosa")
const febInternet = document.getElementById("feb-internet")
const febChineseNewYear = document.getElementById("feb-chinesenewyear")
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
febChineseNewYear.addEventListener("click", function() {
  changeDisplay(febDivChineseNewYear, febDivList)
})
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
const marDivNavaratri = document.getElementById("mar-div-navaratri"); 

// Create an array of all the div elements for easy iteration
const marDivList = [marDivPurim, marDivHoli, marDivDevelopmental, marDivGender, marDivGreek, marDivIrish, marDivColon, 
                    marDivKidney, marDivSclerosis, marDivWomen, marDivEmployee, marDivWomensDay,
                    marDivPi, marDivEqual, marDivPatrick, marDivDown, 
                    marDivSlave, marDivTransgender, marDivLaylat, marDivEidalfitr, marDivNavaratri]

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
const marNavaratri = document.getElementById("mar-navaratri")

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
marNavaratri.addEventListener("click", function() {
  changeDisplay(marDivNavaratri, marDivList)
})

//APRIL
const aprDivArab = document.getElementById("apr-div-arab");
const aprDivAutismMonth = document.getElementById("apr-div-autismmonth");
const aprDivDiversity = document.getElementById("apr-div-diversity");
const aprDivAbuse = document.getElementById("apr-div-abuse");
const aprDivEarthMonth = document.getElementById("apr-div-earthmonth");
const aprDivVolunteer = document.getElementById("apr-div-volunteer");
const aprDivAutismDay = document.getElementById("apr-div-autismday");
const aprDivLaylat = document.getElementById("apr-div-laylat");
const aprDivAlFitr = document.getElementById("apr-div-alfitr");
const aprDivPalm = document.getElementById("apr-div-palm");
const aprDivFriday = document.getElementById("apr-div-friday");
const aprDivEaster = document.getElementById("apr-div-easter");
const aprDivSilence = document.getElementById("apr-div-silence");
const aprDivHashoah = document.getElementById("apr-div-hashoah");
const aprDivRidvan = document.getElementById("apr-div-ridvan");
const aprDivEarthDay = document.getElementById("apr-div-earthday");
const aprDivPassover = document.getElementById("apr-div-passover");

const aprDivList = [aprDivArab, aprDivAutismMonth, aprDivDiversity, aprDivAbuse,
                    aprDivEarthMonth, aprDivVolunteer, aprDivAutismDay, aprDivLaylat, 
                    aprDivAlFitr, aprDivPalm, aprDivFriday, aprDivEaster, aprDivSilence, 
                    aprDivHashoah, aprDivRidvan, aprDivEarthDay, aprDivPassover]

const aprArab = document.getElementById("apr-arab")
const aprAutismMonth = document.getElementById("apr-autismmonth")
const aprDiversity = document.getElementById("apr-diversity")
const aprAbuse = document.getElementById("apr-abuse")
const aprVolunteer = document.getElementById("apr-volunteer")
const aprAutismDay = document.getElementById("apr-autismday")
const aprLaylat = document.getElementById("apr-laylat")
const aprAlFitr = document.getElementById("apr-alfitr")
const aprPalm = document.getElementById("apr-palm")
const aprFriday = document.getElementById("apr-friday")
const aprEaster = document.getElementById("apr-easter")
const aprSilence = document.getElementById("apr-silence")
const aprHashoah = document.getElementById("apr-hashoah")
const aprRidvan = document.getElementById("apr-ridvan")
const aprEarthDay = document.getElementById("apr-earthday")
const aprPassover = document.getElementById("apr-passover")
const aprEarthMonth = document.getElementById("apr-earthmonth")

aprArab.addEventListener("click", function() {
  changeDisplay(aprDivArab, aprDivList)
})
aprAutismMonth.addEventListener("click", function() {
  changeDisplay(aprDivAutismMonth, aprDivList)
})
aprDiversity.addEventListener("click", function() {
  changeDisplay(aprDivDiversity, aprDivList)
})
aprAbuse.addEventListener("click", function() {
  changeDisplay(aprDivAbuse, aprDivList)
})
aprVolunteer.addEventListener("click", function() {
  changeDisplay(aprDivVolunteer, aprDivList)
})
aprAutismDay.addEventListener("click", function() {
  changeDisplay(aprDivAutismDay, aprDivList)
})
//aprLaylat.addEventListener("click", function() {
//  changeDisplay(aprDivLaylat, aprDivList)
//})
//aprAlFitr.addEventListener("click", function() {
//  changeDisplay(aprDivAlFitr, aprDivList)
//})
aprPalm.addEventListener("click", function() {
  changeDisplay(aprDivPalm, aprDivList)
})
aprFriday.addEventListener("click", function() {
  changeDisplay(aprDivFriday, aprDivList)
})
aprEaster.addEventListener("click", function() {
  changeDisplay(aprDivEaster, aprDivList)
})
aprSilence.addEventListener("click", function() {
  changeDisplay(aprDivSilence, aprDivList)
})
aprHashoah.addEventListener("click", function() {
  changeDisplay(aprDivHashoah, aprDivList)
})
aprRidvan.addEventListener("click", function() {
  changeDisplay(aprDivRidvan, aprDivList)
})
aprEarthDay.addEventListener("click", function() {
  changeDisplay(aprDivEarthDay, aprDivList)
})
aprPassover.addEventListener("click", function() {
  changeDisplay(aprDivPassover, aprDivList)
})
aprEarthMonth.addEventListener("click", function() {
  changeDisplay(aprDivEarthMonth, aprDivList)
})

// MAY
const mayDivALS = document.getElementById("may-div-als");
const mayDivHaitian = document.getElementById("may-div-haitian");
const mayDivJewishAmerican = document.getElementById("may-div-jewishamerican");
const mayDivMental = document.getElementById("may-div-mental");
const mayDivAsianAmerican = document.getElementById("may-div-asianamerican");
const mayDivOlder = document.getElementById("may-div-older");
const mayDivCinco = document.getElementById("may-div-cinco");
const mayDivHashoah = document.getElementById("may-div-hashoah");
const mayDivHomophobia = document.getElementById("may-div-homophobia");
const mayDivDialogue = document.getElementById("may-div-dialogue");
const mayDivBab = document.getElementById("may-div-bab");
const mayDivMemorial = document.getElementById("may-div-memorial");
const mayDivAsension = document.getElementById("may-div-ascension");

const mayDivList = [mayDivALS, mayDivHaitian, mayDivJewishAmerican, mayDivMental, mayDivAsianAmerican, 
                    mayDivOlder, mayDivCinco, mayDivHashoah, mayDivHomophobia, mayDivDialogue, mayDivBab, 
                    mayDivMemorial, mayDivAsension]

const mayALS = document.getElementById("may-als")
const mayHaitian = document.getElementById("may-haitian")
const mayJewishAmerican= document.getElementById("may-jewishamerican")
const mayMental = document.getElementById("may-mental")
const mayAsianAmerican = document.getElementById("may-asianamerican")
const mayOlder = document.getElementById("may-older")
const mayCinco = document.getElementById("may-cinco")
const mayHashoah = document.getElementById("may-hashoah")
const mayHomophobia = document.getElementById("may-homophobia")
const mayDialogue = document.getElementById("may-dialogue")
const mayBab = document.getElementById("may-bab")
const mayMemorial = document.getElementById("may-memorial")
const mayAscension = document.getElementById("may-ascension")

mayALS.addEventListener("click", function() {
  changeDisplay(mayDivALS, mayDivList)
})
mayHaitian.addEventListener("click", function() {
  changeDisplay(mayDivHaitian, mayDivList)
})
mayJewishAmerican.addEventListener("click", function() {
  changeDisplay(mayDivJewishAmerican, mayDivList)
})
mayMental.addEventListener("click", function() {
  changeDisplay(mayDivMental, mayDivList)
})
mayAsianAmerican.addEventListener("click", function() {
  changeDisplay(mayDivAsianAmerican, mayDivList)
})
mayOlder.addEventListener("click", function() {
  changeDisplay(mayDivOlder, mayDivList)
})
mayCinco.addEventListener("click", function() {
  changeDisplay(mayDivCinco, mayDivList)
})
//mayHashoah.addEventListener("click", function() {
//  changeDisplay(mayDivHashoah, mayDivList)
//})
mayHomophobia.addEventListener("click", function() {
  changeDisplay(mayDivHomophobia, mayDivList)
})
mayDialogue.addEventListener("click", function() {
  changeDisplay(mayDivDialogue, mayDivList)
})
mayBab.addEventListener("click", function() {
  changeDisplay(mayDivBab, mayDivList)
})
mayMemorial.addEventListener("click", function() {
  changeDisplay(mayDivMemorial, mayDivList)
})
mayAscension.addEventListener("click", function() {
  changeDisplay(mayDivAsension, mayDivList)
})

//JUNE
const junDivBrain = document.getElementById("jun-div-brain");
const junDivMusic = document.getElementById("jun-div-music");
const junDivCaribbean = document.getElementById("jun-div-caribbean");
const junDivPrideMonth = document.getElementById("jun-div-pridemonth");
const junDivEnvironment = document.getElementById("jun-div-environment");
const junDivLoving = document.getElementById("jun-div-loving");
const junDivAdha = document.getElementById("jun-div-adha");
const junDivJuneteenth = document.getElementById("jun-div-juneteenth");
const junDivRefugee = document.getElementById("jun-div-refugee");
const junDivSolstice = document.getElementById("jun-div-solstice");
const junDivPrideDay = document.getElementById("jun-div-prideday");
const junDivMuharram = document.getElementById("jun-div-muharram");


const junDivList = [junDivBrain, junDivMusic, junDivCaribbean, junDivPrideMonth, junDivEnvironment, 
                    junDivLoving, junDivAdha, junDivJuneteenth, junDivRefugee, junDivSolstice,
                    junDivPrideDay, junDivMuharram]

const junBrain = document.getElementById("jun-brain")
const junMusic = document.getElementById("jun-music")
const junCaribbean = document.getElementById("jun-caribbean")
const junPrideMonth = document.getElementById("jun-pridemonth")
const junEnvironment = document.getElementById("jun-environment")
const junLoving = document.getElementById("jun-loving")
const junAdha = document.getElementById("jun-adha")
const junJuneteenth = document.getElementById("jun-juneteenth")
const junRefugee = document.getElementById("jun-refugee")
const junSolstice = document.getElementById("jun-solstice")
const junPrideDay = document.getElementById("jun-prideday")
const junMuharram = document.getElementById("jun-muharram")

junBrain.addEventListener("click", function() {
  changeDisplay(junDivBrain, junDivList)
})
junMusic.addEventListener("click", function() {
  changeDisplay(junDivMusic, junDivList)
})
junCaribbean.addEventListener("click", function() {
  changeDisplay(junDivCaribbean, junDivList)
})
junPrideMonth.addEventListener("click", function() {
  changeDisplay(junDivPrideMonth, junDivList)
})
junEnvironment.addEventListener("click", function() {
  changeDisplay(junDivEnvironment, junDivList)
})
junLoving.addEventListener("click", function() {
  changeDisplay(junDivLoving, junDivList)
})
junAdha.addEventListener("click", function() {
  changeDisplay(junDivAdha, junDivList)
})
junJuneteenth.addEventListener("click", function() {
  changeDisplay(junDivJuneteenth, junDivList)
})
junRefugee.addEventListener("click", function() {
  changeDisplay(junDivRefugee, junDivList)
})
junSolstice.addEventListener("click", function() {
  changeDisplay(junDivSolstice, junDivList)
})
junPrideDay.addEventListener("click", function() {
  changeDisplay(junDivPrideDay, junDivList)
})
junMuharram.addEventListener("click", function() {
  changeDisplay(junDivMuharram, junDivList)
})

//JULY
const julyDivIndependence = document.getElementById("jul-div-independence");
//const julyDivMuharram = document.getElementById("jul-div-muharram");
const julyDivBab = document.getElementById("jul-div-bab");
const julyDivPopulace = document.getElementById("jul-div-populace");
const julyDivMandela = document.getElementById("jul-div-mandela");
const julyDivDisability = document.getElementById("jul-div-disability");
const julyDivFriendship = document.getElementById("jul-div-friendship");

const julyDivList= [julyDivIndependence, julyDivBab, julyDivPopulace, julyDivMandela, 
                    julyDivDisability, julyDivFriendship]

const julyIndependence = document.getElementById("jul-independence")
//const julyMuharram = document.getElementById("jul-muharram")
const julyBab = document.getElementById("jul-bab")
const julyPopulace = document.getElementById("jul-populace")
const julyMandela = document.getElementById("jul-mandela")
const julyDisability = document.getElementById("jul-disability")
const julyFriendship = document.getElementById("jul-friendship")

julyIndependence.addEventListener("click", function() {
  changeDisplay(julyDivIndependence, julyDivList)
})
//julyMuharram.addEventListener("click", function() {
//  changeDisplay(julyDivMuharram, julyDivList)
//})
julyBab.addEventListener("click", function() {
  changeDisplay(julyDivBab, julyDivList)
})
julyPopulace.addEventListener("click", function() {
  changeDisplay(julyDivPopulace, julyDivList)
})
julyMandela.addEventListener("click", function() {
  changeDisplay(julyDivMandela, julyDivList)
})
julyDisability.addEventListener("click", function() {
  changeDisplay(julyDivDisability, julyDivList)
})
julyFriendship.addEventListener("click", function() {
  changeDisplay(julyDivFriendship, julyDivList)
})

// AUGUST
//const augDivCivility = document.getElementById("aug-div-civility");
const augDivPurple = document.getElementById("aug-div-purple");
const augDivIndigenous = document.getElementById("aug-div-indigenous");
const augDivGarvey = document.getElementById("aug-div-garvey");
const augDivHumanitarian = document.getElementById("aug-div-humanitarian");
const augDivSenior = document.getElementById("aug-div-senior");
const augDivEquality = document.getElementById("aug-div-equality");
const augDivKrishna = document.getElementById("aug-div-krishna"); // For Krishna Janmashtami

const augDivList = [augDivPurple, augDivIndigenous, augDivGarvey, augDivHumanitarian, 
                    augDivSenior, augDivEquality, augDivKrishna]

//const augCivility = document.getElementById("aug-civility")
const augPurpleHeart = document.getElementById("aug-purpleheart")
const augIndigenous = document.getElementById("aug-indigenous")
const augGarvey = document.getElementById("aug-garvey")
const augHumanitarian = document.getElementById("aug-humanitarian")
const augSenior = document.getElementById("aug-senior")
const augEquality = document.getElementById("aug-equality")
const augKrishna = document.getElementById("aug-krishna") // For Krishna Janmashtami

//augCivility.addEventListener("click", function() {
//changeDisplay(augDivCivility, augDivList)
//})
augPurpleHeart.addEventListener("click", function() {
  changeDisplay(augDivPurple, augDivList)
})
augIndigenous.addEventListener("click", function() {
  changeDisplay(augDivIndigenous, augDivList)
})
augGarvey.addEventListener("click", function() {
  changeDisplay(augDivGarvey, augDivList)
})
augHumanitarian.addEventListener("click", function() {
  changeDisplay(augDivHumanitarian, augDivList)
})
augSenior.addEventListener("click", function() {
  changeDisplay(augDivSenior, augDivList)
})
augEquality.addEventListener("click", function() {
  changeDisplay(augDivEquality, augDivList)
})
augKrishna.addEventListener("click", function() {
  changeDisplay(augDivKrishna, augDivList) 
})


// SEPTEMBER
  
// Get references to the div elements for each observance
const sepDivHispanic = document.getElementById("sep-div-hispanic");
const sepDivDog = document.getElementById("sep-div-dog");
const sepDivSuicide = document.getElementById("sep-div-suicide");
const sepDivLabor = document.getElementById("sep-div-labor");
const sepDivCharity = document.getElementById("sep-div-charity");
const sepDivPatriot = document.getElementById("sep-div-patriot");
const sepDivDemocracy = document.getElementById("sep-div-democracy");
const sepDivMexican = document.getElementById("sep-div-mexican");
const sepDivPeace = document.getElementById("sep-div-peace");
const sepDivGratitude = document.getElementById("sep-div-gratitude");
const sepDivBusinesswomen = document.getElementById("sep-div-businesswomen");
const sepDivNative = document.getElementById("sep-div-native");
const sepDivRosh = document.getElementById("sep-div-rosh");
const sepDivNavrati = document.getElementById("sep-div-navrati");


// Create an array of all the div elements for easy iteration
const sepDivList = [sepDivHispanic, sepDivDog, sepDivSuicide, sepDivLabor, sepDivCharity, sepDivPatriot, 
                    sepDivDemocracy, sepDivMexican, sepDivPeace, sepDivGratitude, sepDivBusinesswomen, 
                    sepDivNative, sepDivRosh, sepDivNavrati]

// Get references to the list items (observances) that will trigger the display of the corresponding divs
const sepHeritage = document.getElementById("sep-heritage")
const sepDog = document.getElementById("sep-dog")
const sepSuicide = document.getElementById("sep-suicide")
const sepLabor = document.getElementById("sep-labor")
const sepCharity = document.getElementById("sep-charity")
const sepRosh = document.getElementById("sep-rosh")
const sepDemocracy = document.getElementById("sep-democracy")
const sepMexican = document.getElementById("sep-mexican")
const sepPeace = document.getElementById("sep-peace")
const sepNavrati = document.getElementById("sep-navrati")
const sepBusinesswomen = document.getElementById("sep-businesswomen")
const sepNative = document.getElementById("sep-native")
const sepPatriot = document.getElementById("sep-patriot")
const sepGratitude = document.getElementById("sep-gratitude")

// Add event listeners to each list item to handle click events
sepHeritage.addEventListener("click", function() {
  changeDisplay(sepDivHispanic, sepDivList) // Display the corresponding div and hide others
})
sepDog.addEventListener("click", function() {
  changeDisplay(sepDivDog, sepDivList)
})
sepSuicide.addEventListener("click", function() {
  changeDisplay(sepDivSuicide, sepDivList)
})
sepLabor.addEventListener("click", function() {
  changeDisplay(sepDivLabor, sepDivList)
})
sepCharity.addEventListener("click", function() {
  changeDisplay(sepDivCharity, sepDivList)
})
sepRosh.addEventListener("click", function() {
  changeDisplay(sepDivRosh, sepDivList)
})
sepDemocracy.addEventListener("click", function() {
  changeDisplay(sepDivDemocracy, sepDivList)
})
sepMexican.addEventListener("click", function() {
  changeDisplay(sepDivMexican, sepDivList)
})
sepPeace.addEventListener("click", function() {
  changeDisplay(sepDivPeace, sepDivList)
})
//sepNavrati.addEventListener("click", function() {
// changeDisplay(sepDivNavrati, sepDivList)
//})
sepBusinesswomen.addEventListener("click", function() {
  changeDisplay(sepDivBusinesswomen, sepDivList)
})
sepNative.addEventListener("click", function() {
  changeDisplay(sepDivNative, sepDivList)
})
sepPatriot.addEventListener("click", function() {
  changeDisplay(sepDivPatriot, sepDivList)
})
sepGratitude.addEventListener("click", function() {
  changeDisplay(sepDivGratitude, sepDivList)
})

//OCTOBER
// Get references to the div elements for each observance
const octDivCancer = document.getElementById("oct-div-cancer");
const octDivBullying = document.getElementById("oct-div-bullying");
const octDivViolence = document.getElementById("oct-div-violence");
const octDivFilipino = document.getElementById("oct-div-filipino");
const octDivGerman = document.getElementById("oct-div-german");
const octDivItalian = document.getElementById("oct-div-italian");
const octDivLGBTQ = document.getElementById("oct-div-lgbtq");
const octDivWork = document.getElementById("oct-div-work");
const octDivPolish = document.getElementById("oct-div-polish");
const octDivFamily = document.getElementById("oct-div-family");
const octDivNonviolence = document.getElementById("oct-div-nonviolence");
const octDivRosh = document.getElementById("oct-div-rosh");
const octDivNavrati = document.getElementById("oct-div-navrati");
const octDivMental = document.getElementById("oct-div-mental");
const octDivComingOut = document.getElementById("oct-div-comingout");
const octDivYomKippur = document.getElementById("oct-div-yomkippur");
const octDivIndigenous = document.getElementById("oct-div-indigenous");
const octDivSukkot = document.getElementById("oct-div-sukkot");
const octDivBosses = document.getElementById("oct-div-bosses");
const octDivSpirit = document.getElementById("oct-div-spirit");
const octDivBab = document.getElementById("oct-div-bab");
const octDivSikh = document.getElementById("oct-div-sikh");
const octDivWaste = document.getElementById("oct-div-waste");
const octDivStuttering = document.getElementById("oct-div-stuttering");
const octDivHalloween = document.getElementById("oct-div-halloween");
const octDivDiwali = document.getElementById("oct-div-diwali");

// Create an array of all the div elements for easy iteration
const octDivList = [octDivCancer, octDivBullying, octDivViolence, octDivFilipino, octDivGerman, octDivItalian, 
                    octDivLGBTQ, octDivWork, octDivPolish, octDivFamily, octDivNonviolence, octDivRosh, 
                    octDivNavrati, octDivMental, octDivComingOut, octDivYomKippur, octDivIndigenous, 
                    octDivSukkot, octDivBosses, octDivSpirit, octDivBab, octDivSikh, octDivWaste, octDivStuttering,
                    octDivHalloween, octDivDiwali]

// Get references to the list items (observances) that will trigger the display of the corresponding divs
const octCancer = document.getElementById("oct-cancer");
const octBullying = document.getElementById("oct-bullying");
const octViolence = document.getElementById("oct-violence");
const octFilipino = document.getElementById("oct-filipino");
const octGerman = document.getElementById("oct-german");
const octItalian = document.getElementById("oct-italian");
const octLGBTQ = document.getElementById("oct-lgbtq");
const octPolish = document.getElementById("oct-polish");
const octFamily = document.getElementById("oct-family");
const octWork = document.getElementById("oct-work");
const octNonviolence = document.getElementById("oct-nonviolence");
const octRosh = document.getElementById("oct-rosh");
const octNavrati = document.getElementById("oct-navrati");
const octMental = document.getElementById("oct-mental");
const octComingOut = document.getElementById("oct-comingout");
const octYomKippur = document.getElementById("oct-yomkippur");
const octIndigenous = document.getElementById("oct-indigenous");
const octSpirit = document.getElementById("oct-spirit");
const octBab = document.getElementById("oct-bab");
const octSikh = document.getElementById("oct-sikh");
const octStuttering = document.getElementById("oct-stuttering");
const octHalloween = document.getElementById("oct-halloween");
const octDiwali = document.getElementById("oct-diwali");
const octSukkot = document.getElementById("oct-sukkot");
const octBosses = document.getElementById("oct-bosses");
const octWaste = document.getElementById("oct-waste");

// Add event listeners to each list item to handle click events
octCancer.addEventListener("click", function() {
  changeDisplay(octDivCancer, octDivList) // Display the corresponding div and hide others
})
octBullying.addEventListener("click", function() {
  changeDisplay(octDivBullying, octDivList)
})
octViolence.addEventListener("click", function() {
  changeDisplay(octDivViolence, octDivList)
})
octFilipino.addEventListener("click", function() {
  changeDisplay(octDivFilipino, octDivList)
})
octGerman.addEventListener("click", function() {
  changeDisplay(octDivGerman, octDivList)
})
octItalian.addEventListener("click", function() {
  changeDisplay(octDivItalian, octDivList)
})
octLGBTQ.addEventListener("click", function() {
  changeDisplay(octDivLGBTQ, octDivList)
})
octFamily.addEventListener("click", function() {
  changeDisplay(octDivFamily, octDivList)
})
octWork.addEventListener("click", function() {
  changeDisplay(octDivWork, octDivList)
})
octPolish.addEventListener("click", function() {
  changeDisplay(octDivPolish, octDivList)
})
octNonviolence.addEventListener("click", function() {
  changeDisplay(octDivNonviolence, octDivList)
})
//octRosh.addEventListener("click", function() {
//  changeDisplay(octDivRosh, octDivList)
//})
//octNavrati.addEventListener("click", function() {
//  changeDisplay(octDivNavrati, octDivList)
//})
octMental.addEventListener("click", function() {
  changeDisplay(octDivMental, octDivList)
})
octComingOut.addEventListener("click", function() {
  changeDisplay(octDivComingOut, octDivList)
})
octYomKippur.addEventListener("click", function() {
  changeDisplay(octDivYomKippur, octDivList)
})
octIndigenous.addEventListener("click", function() {
  changeDisplay(octDivIndigenous, octDivList)
})
octSpirit.addEventListener("click", function() {
  changeDisplay(octDivSpirit, octDivList)
})
octBab.addEventListener("click", function() {
  changeDisplay(octDivBab, octDivList)
})
octSikh.addEventListener("click", function() {
  changeDisplay(octDivSikh, octDivList)
})
octStuttering.addEventListener("click", function() {
  changeDisplay(octDivStuttering, octDivList)
})
octHalloween.addEventListener("click", function() {
  changeDisplay(octDivHalloween, octDivList)
})
octDiwali.addEventListener("click", function() {
  changeDisplay(octDivDiwali, octDivList)
})
octSukkot.addEventListener("click", function() {
  changeDisplay(octDivSukkot, octDivList)
})
octBosses.addEventListener("click", function() {
  changeDisplay(octDivBosses, octDivList)
})
octWaste.addEventListener("click", function() {
  changeDisplay(octDivWaste, octDivList)
})

//NOVEMBER
const novDivDiabetes = document.getElementById("nov-div-diabetes");
const novDivNative = document.getElementById("nov-div-native");
const novDivMuertos = document.getElementById("nov-div-muertos");
const novDivSaints = document.getElementById("nov-div-saints");
const novDivStress = document.getElementById("nov-div-stress");
const novDivFreedom = document.getElementById("nov-div-freedom");
const novDivAdoption = document.getElementById("nov-div-adoption");
const novDivVeterans = document.getElementById("nov-div-veterans");
const novDivKindness = document.getElementById("nov-div-kindness");
const novDivTolerance = document.getElementById("nov-div-tolerance");
const novDivMen = document.getElementById("nov-div-men");
const novDivChildren = document.getElementById("nov-div-children");
const novDivThanksgiving = document.getElementById("nov-div-thanksgiving");

const novDivList = [novDivDiabetes, novDivNative, novDivMuertos, novDivSaints, novDivStress, 
                    novDivFreedom, novDivAdoption, novDivVeterans, novDivKindness, novDivTolerance, 
                    novDivMen, novDivChildren, novDivThanksgiving]

const novDiabetes = document.getElementById("nov-diabetes")
const novNative = document.getElementById("nov-native")
const novMuertos = document.getElementById("nov-muertos")
const novSaints = document.getElementById("nov-saints")
const novStress = document.getElementById("nov-stress")
const novVeterans = document.getElementById("nov-veterans")
const novFreedom = document.getElementById("nov-freedom")
const novAdoption = document.getElementById("nov-adoption")
const novChildren = document.getElementById("nov-children")
const novThanksgiving = document.getElementById("nov-thanksgiving")
const novKindness = document.getElementById("nov-kindness")
const novMen = document.getElementById("nov-men")
const novTolerance = document.getElementById("nov-tolerance")

novDiabetes.addEventListener("click", function() {
  changeDisplay(novDivDiabetes, novDivList)
})
novNative.addEventListener("click", function() {
  changeDisplay(novDivNative, novDivList)
})
novMuertos.addEventListener("click", function() {
  changeDisplay(novDivMuertos, novDivList)
})
novSaints.addEventListener("click", function() {
  changeDisplay(novDivSaints, novDivList)
})
novStress.addEventListener("click", function() {
  changeDisplay(novDivStress, novDivList)
})
novVeterans.addEventListener("click", function() {
  changeDisplay(novDivVeterans, novDivList)
})
novFreedom.addEventListener("click", function() {
  changeDisplay(novDivFreedom, novDivList)
})
novAdoption.addEventListener("click", function() {
  changeDisplay(novDivAdoption, novDivList)
})
novChildren.addEventListener("click", function() {
  changeDisplay(novDivChildren, novDivList)
})
novThanksgiving.addEventListener("click", function() {
  changeDisplay(novDivThanksgiving, novDivList)
})
novKindness.addEventListener("click", function() {
  changeDisplay(novDivKindness, novDivList)
})
novMen.addEventListener("click", function() {
  changeDisplay(novDivMen, novDivList)
})
novTolerance.addEventListener("click", function() {
  changeDisplay(novDivTolerance, novDivList)
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


