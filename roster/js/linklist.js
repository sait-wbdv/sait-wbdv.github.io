/******************** Gets Font Awesome Icon *************/
/******* Input: label ******/
/******* Output: font awesome HTML ******/
const selectIcon = (label) => {
  let labelHTML;
  switch (label.toLowerCase()) {
    case "homepage":
      labelHTML = '<i class="fas fa-home"></i>';
      break;
    case "github":
      labelHTML = '<i class="fab fa-github"></i>';
      break;
    case "codepen":
      labelHTML = '<i class="fab fa-codepen"></i>';
      break;
    case "linkedin":
      labelHTML = '<i class="fab fa-linkedin-in"></i>';
      break;
    case "facebook":
      labelHTML = '<i class="fab fa-facebook"></i>';
      break;
    case "instagram":
      labelHTML = '<i class="fab fa-instagram"></i>';
      break;
    case "youtube":
      labelHTML = '<i class="fab fa-youtube"></i>';
      break;
    case "email":
      labelHTML = '<i class="far fa-envelope"></i>';
      break;
    default:
      labelHTML = '<i class="fas fa-user-tie"></i>';
  }
  return labelHTML;
};
/***************** Generate a link list form an Array *********/
/********* Input: [{label, link}] ************/
const linkList = (linksArr) => {
  let ulHTML = "<ul>";
  linksArr.forEach((link) => {
    let iconHTML = selectIcon(link.label);
    ulHTML += `
      <li>
        <a href="${link.link}" title="${link.label}">${iconHTML}</a>
      </li>`;
  });
  ulHTML += "</ul>";
  return ulHTML;
};
// let testArr = [
//   { label: "youtube", link: "https://www.youtube.com/" },
//   {
//     label: "github",
//     link:
//       "https://github.com/sait-wbdv/assessments/blob/master/cpnt265/roster.yml",
//   },
// ];
// console.log(linkList(testArr));
export default linkList;