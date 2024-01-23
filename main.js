import "./style.css";
"use strict";

const header = document.querySelector(".hero-section");

header.classList.remove("section_hidden");
const allSections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section_hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  section.classList.add("section_hidden");
  sectionObserver.observe(section);
});
