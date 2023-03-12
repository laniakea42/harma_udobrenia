let navbtn = document.getElementsByClassName("nav--btn")[0];

let navmenu = document.getElementsByClassName("nav--menu")[0];
let header = document.getElementsByClassName("header")[0];

navbtn.addEventListener("click", function () {
  if (navmenu.style.display !== "block") {
    navmenu.style.display = "block";
    document.body.style.overflow = "hidden";
    header.classList.add("scrolled");
  } else {
    document.body.style.overflow = "visible";
    navmenu.style.display = "none";
  }
});

document.addEventListener("scroll", function () {
  let header = document.getElementsByClassName("header")[0];
  if (window.pageYOffset >= 2) {
    header.classList.add("scrolled");
  }
  if (!navbtn.classList.contains("active") && window.pageYOffset <= 1) {
    header.classList.remove("scrolled");
  }
});

var toClose = false;

function toggle(e) {
  e.stopPropagation();
  var btn = this;
  var menu = btn.nextSibling;

  while (menu && menu.nodeType != 1) {
    menu = menu.nextSibling;
  }
  if (!menu) return;
  if (menu.style.display !== "block") {
    menu.style.display = "block";
    if (toClose) toClose.style.display = "none";
    toClose = menu;
  } else {
    menu.style.display = "none";
    toClose = false;
  }
}
function closeAll() {
  toClose.style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".productcard__show").forEach(function (btn) {
    btn.addEventListener("click", toggle, true);
  });
});

window.onclick = function (event) {
  if (toClose) {
    closeAll.call(event.target);
  }
};

const tabs = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab-panel");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tc) => {
      tc.classList.remove("active");
    });
    target.classList.add("active");
    tabs.forEach((t) => {
      t.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

const modals = document.querySelectorAll("[data-modal]");

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});

const modalBg = document.querySelectorAll(".modal__layout");
const modalClose = document.getElementsByClassName("modal__close")[0];

modalBg.forEach(function (elem) {
  elem.addEventListener("click", function () {
    this.parentNode.classList.remove("open");
    console.log(element.parentNode);
  });
});

modalClose.addEventListener("click", function () {
  const modal = document.getElementById("order-modal");
  modal.classList.remove("open");
});

const navsMobile = document.querySelectorAll(".nav__item--mobile");
let ham = document.getElementsByClassName("ham")[0];

navsMobile.forEach(function (elem) {
  elem.addEventListener("click", function () {
    this.parentNode.style.display = "none";
    document.body.style.overflow = "visible";
    ham.classList.remove("active");
  });
});
