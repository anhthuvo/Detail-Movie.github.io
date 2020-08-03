export const theaterMatrix = function() {
  const addClassActive = function (currentLink) {
    const className = currentLink.classList[0];
    const siblings = document.getElementsByClassName(className);
 
   //remove class 'active' of all 
   for (let i = 0; i < siblings.length; i++) {
     siblings[i].classList.remove("active");
   }
   // add class active to clicked link
   currentLink.classList.add("active");
 };
 
 
 const activeTarget = function (currentLink) {
     //active current link
     addClassActive(currentLink);
 
     //get target of link
     let targetID = currentLink.getAttribute('href');
     console.log('test'+targetID);
     if (!targetID) return;
     targetID = targetID.replace('#','');
     
     //  active target
     const target = document.getElementById(targetID);
     addClassActive(target);
 
     // active first link in target
     if (!target.firstElementChild) return;
     activeTarget(target.firstElementChild);
 }
 
 const link1Arr = document.getElementsByClassName(
   "theater-matrix__container__brand-col__link1"
 );
 const link2Arr = document.getElementsByClassName(
   "theater-matrix__container__location-col__target1__link2"
 );
 
 for (let i = 0; i < link1Arr.length; i++) {
   let currentLink = link1Arr[i];
   currentLink.addEventListener("click", () => {
     activeTarget(currentLink);
   });
 }
 
 for (let i = 0; i < link2Arr.length; i++) {
   let currentLink = link2Arr[i];
   currentLink.addEventListener("click", () => {
     activeTarget(currentLink);
   });
 }
 
 
}
