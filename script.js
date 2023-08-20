//Welcome to Spotify 

let audio1 = new Audio('Songs/1.mp3');
let songIndex = 0 ;
let masterPlay = document.getElementById('masterPlay') ;
let myProgressBar = document.getElementById('myProgressBar') ;
let gif = document.getElementById('gif') ;
let masterSongName = document.getElementsByClassName('masterSongName')

let songItems = Array.from(document.getElementsByClassName('songItem')) ;

let songs = [
    {songName : "Hands of Gold" ,        filePath : "Songs/1.mp3" , coverPath : "Covers/1.jpg"} ,
    {songName : "Writings on the Wall" , filePath : "Songs/2.mp3" , coverPath : "Covers/2.jpg"} ,
    {songName : "All of Me" ,            filePath : "Songs/3.mp3" , coverPath : "Covers/3.jpg"} ,
    {songName : "Perfect" ,              filePath : "Songs/4.mp3" , coverPath : "Covers/4.jpg"} , 
    {songName : "Jaan Ban Gaye" ,        filePath : "Songs/5.mp3" , coverPath : "Covers/5.jpg"} ,
    {songName : "Cold water" ,           filePath : "Songs/6.mp3" , coverPath : "Covers/6.jpg"} ,
    {songName : "Despacito" ,            filePath : "Songs/7.mp3" , coverPath : "Covers/7.jpg"} ,
    {songName : "Galway Girl" ,          filePath : "Songs/8.mp3" , coverPath : "Covers/8.jpg"} ,
]


songItems.forEach( (element , i ) => {
    console.log(element , i) ;
    element.getElementsByTagName('img')[0].src = songs[i].coverPath ;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName ;
})



//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if(audio1.paused || audio1.currentTime <= 0) {
        audio1.play() ;
        masterPlay.classList.remove('fa-play-circle') ;
        masterPlay.classList.add('fa-pause-circle') ;
        gif.style.opacity = 1 ;
    } else {
        audio1.pause() ;
        masterPlay.classList.remove('fa-pause-circle') ;
        masterPlay.classList.add('fa-play-circle') ;
        gif.style.opacity = 0 ;
    }
})

//Listen to events 
audio1.addEventListener('timeupdate', () => {

    //Update Seekbar
    progress = parseInt((audio1.currentTime/audio1.duration) * 100) ;
    myProgressBar.value = progress ;
})


myProgressBar.addEventListener('change', () => {
    audio1.currentTime = (myProgressBar.value * audio1.duration) / 100 ;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach( (element) => {
       element.classList.remove('fa-pause-circle') ;
       element.classList.add('fa-play-circle') ;
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach ( (element) => {
    element.addEventListener('click' , (e) => {
        songIndex = parseInt(e.target.id) ;
        makeAllPlays() ;
        e.target.classList.remove('fa-play-circle') ;
        e.target.classList.add('fa-pause-circle') ;
        audio1.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName ;
        audio1.currentTime = 0 ;
        audio1.play() ;
        masterPlay.classList.remove('fa-play-circle') ;
        masterPlay.classList.add('fa-pause-circle') ;
    })
})

document.getElementById('next').addEventListener('click' , () => {
    if(songIndex>=7) {
        songIndex = 0 ;
    } else {
        songIndex += 1 ;
    }
    audio1.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName ;
    audio1.currentTime = 0 ;
    audio1.play() ;
    masterPlay.classList.remove('fa-play-circle') ;
    masterPlay.classList.add('fa-pause-circle') ;
})

document.getElementById('previous').addEventListener('click' , () => {
    if(songIndex<=0) {
        songIndex = 0 ;
    } else {
        songIndex -= 1 ;
    }
    audio1.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName ;
    audio1.currentTime = 0 ;
    audio1.play() ;
    masterPlay.classList.remove('fa-play-circle') ;
    masterPlay.classList.add('fa-pause-circle') ;
})



