//Affecte la nouvelle image lorsque la souris survole l'élément
function TransformeTete(element) {
    element.setAttribute('src', 'IMG_4821.jpeg');
    }
//Affecte l'image de départ lorsque la souris ne survole plus l'élément
function RetourneTete(element) {
    element.setAttribute('src', 'IMG_4413.jpeg');
    }

WIDTH = 50
STEP = 100

function grow_() {
  	if (WIDTH <= 299) {
      let growing = document.getElementById("growing")
    growing.style.width = `${WIDTH}px`
    WIDTH += STEP
    }
    
}

// this will be called on loading the <body> tag
function grow_forever() {
    // call it once right away
    grow()
    // get it called every 1s after that
    setInterval(grow, 1000)
}