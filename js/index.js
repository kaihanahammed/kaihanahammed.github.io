import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection, setDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




const firebaseConfig = {
  apiKey: "AIzaSyDmvyLBHoxDu0_1Urq1iLXMduWcf8_WEbQ",
  authDomain: "kaihanahammed-portfolio.firebaseapp.com",
  databaseURL: "https://kaihanahammed-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kaihanahammed-portfolio",
  storageBucket: "kaihanahammed-portfolio.appspot.com",
  messagingSenderId: "211401362177",
  appId: "1:211401362177:web:869d4db7bfbb3185826900",
  measurementId: "G-M41DMRT22Q"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

function submit_click() {
  var name = document.getElementById("form_name_id").value;
  var email = document.getElementById("form_email_id").value;
  var comment = document.getElementById("form_comment_id").value;

  checkemail();

  const msg_doc = doc(firestore, "Portfolio_messages/" + email);
  const docdata = {
    Name: name,
    Email: email,
    Comment: comment};
  setDoc(msg_doc, docdata, {merge: true});
  console.log("Success");

  
}
document.getElementById('submit').addEventListener('click', submit_click, true);


function checkemail(){
  var email = document.getElementById("form_email_id");
  var emailvalue = email.value;

  
    email.innerHTML="You must add a title!";
  
}


























var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;


console.log(prevScrollpos,currentScrollPos);
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_bar").hidden=false;
  } else {
    var width_of_nav_bar = 
    document.getElementById("nav_bar").scrollWidth;
    //document.getElementById("nav_bar").style.top = "-"+width_of_nav_bar+"px";
    document.getElementById("nav_bar").hidden=true;
  }
  prevScrollpos = currentScrollPos;
}

window.onload = function(){
  
  document.getElementById(nav_bar_ui_id).classList.remove("fadeinfromright");
}