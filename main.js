const headerBg = document.querySelector("header");
const toggle = document.querySelector(".toggle");
const slider = document.querySelector(".slider");
const records = document.querySelectorAll(".record");
const ovCards = document.querySelectorAll(".ov_card");
const followers = document.querySelectorAll(".followers p:first-child");
const pageViews = document.querySelectorAll(".page_view_perc p:first-child");
const body = document.querySelector("body");
const mainHeader = document.querySelector(".main_header");
const overviewToday = document.querySelector(".overview_today");
const dMode = document.querySelector(".d_mode");

document.addEventListener("DOMContentLoaded", function () {
  toggle.addEventListener("click", function () {
    records.forEach((record) => {
      record.classList.toggle("dark");
    });

    slider.classList.toggle("gradient");

    mainHeader.classList.toggle("white");
    overviewToday.classList.toggle("white");

    ovCards.forEach((ovCard) => {
      ovCard.classList.toggle("dark");
    });

    headerBg.classList.toggle("header_bg");
    body.classList.toggle("bg");

    followers.forEach((follower) => {
      follower.classList.toggle("white");
    });

    pageViews.forEach((pageView) => {
      pageView.classList.toggle("white");
    });

    if (toggle.checked) {
      dMode.innerText = "Light Mode";
    } else {
      dMode.innerText = "Dark Mode";
    }
  });
  AOS.init({
    startEvent: "DOMContentLoaded",
    duration: 1500,
    ease: "ease-in-out-back",
    once: true,
    offset: 50,
  });
});
