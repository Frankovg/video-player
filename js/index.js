//CREAMOS LAS VARIABLES PARA LOS BOTONES

const $video = document.querySelector('#video') //la variable busca en el DOM el video por su id.
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

//SE AGREGAN LOS LISTENERS PARA RESPONDER A LOS EVENTOS Y SUS FUNCIONES

$play.addEventListener('click', handlePlay) //la variable play puede escuchar cuando es clickeada por el usuario y ejecutar la función.
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play() //method para darle play al video.
    $play.hidden = true  //propiedad hidden activada o no con boolean
    $pause.hidden = false
    console.log('le diste click al botón de play') //nos indica en la consola si está funcionando.
}

function handlePause() {
    $video.pause() 
    $play.hidden = false
    $pause.hidden = true
    console.log('le diste click al botón de pausa') 
}

$backward.addEventListener('click', handleBackward)

function handleBackward() {
    $video.currentTime = $video.currentTime - 10 //currentTime marca el tiempo donde se encuentra el video.
    // $video.currentTime -= 10 es una forma abreviada de hacer el código de arriba.
    console.log("Para atrás 10 segundos.", $video.currentTime) //para verlo en el log al tiempo y comprobar que funciona bien.
}

$forward.addEventListener('click', handleForward)

function handleForward() {
    // $video.currentTime = $video.currentTime + 10 
    $video.currentTime += 10
    console.log("Para adelante 10 segundos.", $video.currentTime)
}

//BARRA DE TIEMPO. 1-VARIABLE. 2-EVENT LISTENERS AL CARGAR LA METADATA Y SU FUNCIÓNES.

const $progress = document.querySelector("#progress")

$video.addEventListener("loadedmetadata", handleLoaded) //la metadata tiene la info sobre el video.
$video.addEventListener("timeupdate", handleTimeUpdate) 

function handleLoaded() {
    $progress.max = $video.duration //le asigna la duración máxima a la barra.
    console.log("ha cargado mi video", $video.duration) //nos permite ver la duración del video.
}

function handleTimeUpdate() { //para que se actualice el tiempo.
    $progress.value = $video.currentTime
    // console.log("Tiempo actual.", $video.currentTime)  //veo en la consola cómo pasa el tiempo.
}

$progress.addEventListener("input", handleInput) //evento de arrastrar el punto de la barra.

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value) //nos indica en que punto del tiempo nos posicionamos.
}