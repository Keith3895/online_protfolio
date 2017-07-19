var music = document.getElementById('music'); // id for audio element
var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
var vol = music.volume;
var pButton = document.getElementById('pButton'); // play button
var playhead = document.getElementById('playhead'); // playhead
var timeline = document.getElementById('timeline'); // timeline
var volumehead = document.getElementById('volumehead'); // playhead
var volume = document.getElementById('volume'); // timeline
var val = document.getElementById('val'); // timeline
// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// play button event listenter
pButton.addEventListener("click", play);

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener("click", function(event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
}

// makes playhead draggable
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
var onplayhead = false;

// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
}

// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(event) {
    if (onplayhead == true) {
        moveplayhead(event);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        music.currentTime = duration * clickPercent(event);
        music.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(event) {
    var newMargLeft = event.clientX - getPosition(timeline);

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        playhead.style.marginLeft = timelineWidth + "px";
    }
}

// timeUpdate
// Synchronizes playhead position with current point in audio
function timeUpdate() {
    var playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    if (music.currentTime == duration) {
        pButton.className = "";
        pButton.className = "play";
    }
}

//Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "pause";
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "play";
    }
}

// Gets audio file duration
music.addEventListener("canplaythrough", function() {
    duration = music.duration;
}, false);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}


// ==========================================================================================

// volume width adjusted for volumehead
var volumeWidth = volume.offsetWidth - volumehead.offsetWidth;


volume.addEventListener("click", function(event) {
    movevolumehead(event);
    music.volume = vol * clickPercent1(event);
}, false);

// returns click as decimal (.77) of the total volumeWidth
function clickPercent1(event) {
    val.innerHTML = ((event.clientX - getPosition(volume)) / volumeWidth * 10).toFixed(0);
    return (event.clientX - getPosition(volume)) / volumeWidth;
}

// makes volumehead draggable
volumehead.addEventListener('mousedown', mouseDown1, false);
window.addEventListener('mouseup', mouseUp1, false);

// Boolean value so that audio position is updated only when the volumehead is released
var onvolumehead = false;
// mouseDown1 EventListener
function mouseDown1() {
    onvolumehead = true;
    window.addEventListener('mousemove', movevolumehead, true);
    music.removeEventListener('volumechange', volumeUpdate, false);
}

// mouseUp1 EventListener
// getting input from all mouse clicks
function mouseUp1(event) {
    if (onvolumehead == true) {
        movevolumehead(event);
        window.removeEventListener('mousemove', movevolumehead, true);
        // change current time
        music.volume = vol * clickPercent1(event);
        music.addEventListener('volumechange', volumeUpdate, false);
    }
    onvolumehead = false;
}
// mousemove EventListener
// Moves volumehead as user drags
function movevolumehead(event) {
    var newMargLeft = event.clientX - getPosition(volume);
    if (newMargLeft >= 0 && newMargLeft <= volumeWidth) {
        volumehead.style.marginLeft = newMargLeft + "px";
        mute();
    }
    if (newMargLeft < 0) {
        volumehead.style.marginLeft = "4px";
        music.volume=0;
    }
    if (newMargLeft > volumeWidth) {
        volumehead.style.marginLeft = volumeWidth-20 + "px";
    }
}
function volumeUpdate() {
    var playPercent = volumeWidth * (music.volume / vol);
    volumehead.style.marginLeft = playPercent + "px";
    // if (music.volume == vol) {
    //     pButton.className = "";
    //     pButton.className = "play";
    // }
}
var vButton = document.getElementById('vButton'); // play button
vButton.addEventListener("click", mute);
function mute() {

    // start music
    if (vButton.classList.contains('mute')) {
        // remove play, add pause
        vButton.className = "";
        vButton.className = "high";

    } else { // pause music
        // remove pause, add play
        vButton.className = "";
        vButton.className = "mute";
        movevolumehead(event);
    }
}