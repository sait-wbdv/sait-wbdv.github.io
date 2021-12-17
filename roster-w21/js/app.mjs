import {roster} from "./data/roster.mjs";
import linkList from "./linklist.mjs";

const gallery = document.querySelector('.gallery');
const defaultCard = document.querySelector('#default-card').content.cloneNode(true);
console.log(defaultCard.querySelector('img'));

roster.forEach((student) => {
  const card = defaultCard.cloneNode(true);
  card.querySelector('img').src = `images/students/${student.avatar}`;
  card.querySelector('img').setAttribute('alt', student.label);
  card.querySelector('h3').innerHTML = student.label;
  card.querySelector('p').innerHTML = student.tagline;
  card.querySelector('.social').innerHTML = linkList(student.links);

  gallery.appendChild(card);
})