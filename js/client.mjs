import { round1 , round2, round3 } from "./finals.mjs";
import {roster} from "../roster/js/data/roster.mjs";
import linkList from "../roster/js/linklist.mjs";

const rounds = [
  {
    speakers: round1,
    container: 'round1'
  },
  {
    speakers: round2,
    container: 'round2'
  },
  {
    speakers: round3,
    container: 'round3'
  }
];

// Populate Card Details
function setCard(student) {
  const card = document.querySelector('#card').content.cloneNode(true);

  // Name, tagline
  card.querySelector('header').innerHTML = student.label;
  if (student.tagline) {
    card.querySelector('p').innerText = student.tagline;
  } else {
    card.querySelector('p').remove();
  }
  
  // Profile pic
  const image = card.querySelector('img');

  // Set image src
  image.setAttribute('src', `roster/images/students/${student.avatar}`);

  image.setAttribute('alt', `${student.label} Profile Pic`);

  // Trophies
  let badges = '';
  student.badges?.forEach(badge => {
    if (badge.name) {
      if (badge.name === 'mvp') {
        badges += `<li><img src="roster/images/icons/mvp.svg" alt="${badge.name} Icon" title="${badge.name}"></a></li>`;
      } else if (badge.name === 'coach') {
        badges += `<li><img src="roster/images/icons/coach-of-the-year.svg" alt="${badge.name} Icon" title="${badge.name}"></li>`;
      } else if (badge.name === 'special-teams') {
        badges += `<li><img src="roster/images/icons/special-teams.svg" alt="${badge.name} Icon" title="${badge.name}"></li>`;
      } else if (badge.name === 'attendance') {
        badges += `<li><img src="roster/images/icons/perfect-attendance.svg" alt="${badge.name} Icon" title="${badge.name}"></li>`;
      } else if (badge.name === 'early-riser') {
        badges += `<li><img src="roster/images/icons/early-riser.svg" alt="${badge.name} Icon" title="${badge.name}"></li>`;
      } else if (badge.name === 'code-warrior') {
        badges += `<li><img src="roster/images/icons/code-warrior.svg" alt="${badge.name} Icon" title="${badge.name}"></li>`;
      } else if (badge.name === 'plus-one') {
        badges += `<li><img src="roster/images/icons/plus-one.svg" alt="${badge.name} Icon" title="${badge.name}"></li>`;
      }
    }
  });
  if (badges) {
    card.querySelector('.badges').innerHTML = `<ul>${badges}</ul>`;
  } else {
    card.querySelector('.badges').remove();
  }

  // Social Links
  student.social = linkList(student.links);

  if (student.social) {
    card.querySelector('.social').innerHTML = student.social;
  } else {
    card.querySelector('.social').remove();
  }
  return card;
}



let output;

rounds.forEach((round) => {
  const section = document.querySelector(`#${round.container}`);
  round.speakers.forEach((speaker) => {
    let student = '';
    let group = {};
    

    // Presentation title
    let presentation = document.querySelector('#presentation').content.cloneNode(true);

    if (speaker.title) {
      presentation.querySelector('header').innerHTML = `<h4>${speaker.title}</h4>`;
    } else {
      presentation.querySelector('header').innerHTML = `<h4>Portfolio Presentation</h4>`;
    }

    if (typeof speaker.members === 'undefined') {
      student = roster.find((student) => student.label === speaker.name);

      // Add to speaker list
      presentation.querySelector('ul').innerHTML = '';
      presentation.querySelector('ul').appendChild(setCard(student));
      section.appendChild(presentation);
      
    } else if (typeof speaker.members !== 'undefined') {
        // Group presentation
        if (speaker.name) {
          presentation.querySelector('header').innerHTML += `<h5>${speaker.name}</h5>`;
        }
        presentation.querySelector('ul').innerHTML = '';
        presentation.querySelector('ul').classList.add('group');
        speaker.members.forEach((member) => {
          student = roster.find((student) => student.label === member);
          presentation.querySelector('ul').appendChild(setCard(student));
        });
    } else {
      return false;
    }
    section.appendChild(presentation);
  });
});