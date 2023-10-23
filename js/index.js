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
  
  //document.getElementById(nav_bar_ui_id).classList.remove("fadeinfromright");
}



particlesJS('particles',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);