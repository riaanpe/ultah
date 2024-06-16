const year = document.getElementById("years");
month = document.getElementById("months");
const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const menu = document.getElementById("menu");
const ucap = document.querySelector(".ucap");
const harap = document.querySelector(".harap");
const audioIcon = document.querySelector(".audio-icon-wrapper");
const audioIconI = document.querySelector(".audio-icon-wrapper i");
const song = document.getElementById("song");
const load = document.getElementById("load");
const vid = document.getElementById("bdayVideo");
const noVid = document.getElementById("noVid");
const cat = document.getElementById("cat");
const cie = document.getElementById("cie");

var countDownDate = new Date("Jun 16, 2024 00:00:00").getTime();
var hariUltah = new Date("Jun 17, 2008 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    if (distance > 0) {
        cie.innerHTML = ciee, yang besok ultah;
        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        hour.innerHTML = hours / 10 < 1 ? "0" + hours : hours;
        minute.innerHTML = minutes / 10 < 1 ? "0" + minutes : minutes;
        second.innerHTML = seconds / 10 < 1 ? "0" + seconds : seconds;
    } else {
        cie.innerHTML = Habede Isna! selamat, lu udah menempuh hidup kurang lebih:;
      var timesThatThrough = now - hariUltah;
      var days = Math.floor(
            (timesThatThrough / (1000 * 60 * 60 * 24))
        );
      var hours = Math.floor(
            (timesThatThrough % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((timesThatThrough % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timesThatThrough % (1000 * 60)) / 1000);
        hour.innerHTML = hours / 10 < 1 ? "0" + hours : hours;
        minute.innerHTML = minutes / 10 < 1 ? "0" + minutes : minutes;
        second.innerHTML = seconds / 10 < 1 ? "0" + seconds : seconds;
        day.innerHTML = days / 10 < 1 ? "0" + days : days;
    }
}, 1000);

isplaying = false;
isvideoplaying = false;

function playAudio() {
  song.play();
  song.volume = .5;
  audioIcon.style.display = "flex";
  isplaying = true;
}

function playVideo() {
  noVid.style.display = "none";
  cat.style.display = "none";
  vid.style.display = "block";
  if(isvideoplaying){
    vid.pause();
  } else {
    vid.play();
  }
  isvideoplaying = (!isvideoplaying)
}

function skip() {
  if(isvideoplaying) {
    vid.pause()
  }
  noVid.style.display = "block";
  cat.style.display = "block";
  vid.style.display = "none";
  load.style.visibility = "hidden";
  document.querySelector(".bln1").style.visibility = "visible";
  document.querySelector(".bln2").style.visibility = "visible";
}

function showVideo() {
  if (isplaying) {
    song.pause();
    isplaying = !isplaying;
  }
  window.scrollTo(0,0);
  document.querySelector(".bln1").style.visibility = "hidden";
  document.querySelector(".bln2").style.visibility = "hidden";
  load.style.visibility = "visible";
}

audioIcon.onclick = function() {
  if (isplaying) {
    song.pause();
  } else {
    song.play();
  }
  audioIconI.classList.toggle("bi-disc");
  audioIconI.classList.toggle("bi-pause-circle");
  isplaying = !isplaying;
}

function enableScroll() {
  playAudio();
  document.querySelector("body").style.height = "100%";
  document.querySelector("body").style.overflow = "visible";
  window.scrollTo(0, (menu.offsetTop -20));
  menu.style.visibility = "visible";
}
