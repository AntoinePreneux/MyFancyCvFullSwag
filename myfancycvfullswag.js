//Affecte la nouvelle image lorsque la souris survole l'élément
function TransformeTete(element) {
    element.setAttribute('src', 'IMG_4821.jpeg');
    }
//Affecte l'image de départ lorsque la souris ne survole plus l'élément
function RetourneTete(element) {
    element.setAttribute('src', 'IMG_4413.jpeg');
    }

WIDTH_eng = 10
WIDTH_html = 10
STEP = 100

function grow_english() {
  	if (WIDTH_eng <= 200) {
      let growing = document.getElementById("english")
    growing.style.width = `${WIDTH_eng}px`
    WIDTH_eng += STEP
    }
    if (WIDTH_html <= 300) {
        let growing = document.getElementById("html")
    growing.style.width = `${WIDTH}px`
    WIDTH += STEP
  }
    
}

function grow_CSSHTMLJS() {
    if (WIDTH_html <= 300) {
        let growing = document.getElementById("html")
    growing.style.width = `${WIDTH}px`
    WIDTH += STEP
  }
  
}

function grow_python() {
    if (WIDTH <= 50) {
        let growing = document.getElementById("python")
    growing.style.width = `${WIDTH}px`
    WIDTH += STEP
  }
  
}

// // this will be called on loading the <body> tag
// function grow_forever() {
//     // call it once right away
//     grow_english()
//     // get it called every 1s after that
//     setInterval(grow_english, 1)
// }