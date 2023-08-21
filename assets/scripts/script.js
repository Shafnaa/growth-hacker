const playBtn = document.getElementById("play");
const video = document.getElementById("video");
const progressbar = document.getElementById("progressbar");
const timestamp = document.getElementById("timestamp");

//------------------------------------------------------------------------
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if (video.paused) {
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function updateProgressbar() {
  progressbar.value = (video.currentTime * 100) / video.duration;

  //set the time
  let min = Math.floor(video.currentTime / 60);
  let sec = Math.floor(video.currentTime - min * 60);
  if (min < 10) {
    min = "0" + String(min);
  }
  if (sec < 10) {
    sec = "0" + String(sec);
  }
  timestamp.innerText = `${min}:${sec}`;
}

function dragProgressbar() {
  video.currentTime = (+progressbar.value * video.duration) / 100;
}
//------------------------------------------------------------------------

playBtn.addEventListener("click", toggleVideoStatus);
video.addEventListener("click", toggleVideoStatus);

video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);

video.addEventListener("timeupdate", updateProgressbar);
progressbar.addEventListener("change", dragProgressbar);

//filter

const filterContainer = document.querySelector(".filter-element");
const recipes = document.querySelectorAll(".element-item");

filterContainer.innerHTML = "";

recipes.forEach((recipe) => {
  if (filterContainer.childElementCount < 12) {
    filterContainer.append(recipe.cloneNode(true));
  }
});

function filteredResult(value) {
  filterContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    if (filterContainer.childElementCount < 12) {
      if (recipe.classList.contains(value)) {
        filterContainer.append(recipe.cloneNode(true));
      }
    }
  });
}
