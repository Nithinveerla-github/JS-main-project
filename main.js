function scrollToProducts() {
    document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
}

function showCategory(category) {
    document.querySelectorAll('.grid-container').forEach(container => {
        container.classList.remove('active');
    });
    document.getElementById(category).classList.add('active');
}

function showFullscreen(imageSrc, caption) {
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const fullscreenCaption = document.getElementById('fullscreenCaption');

    fullscreenImage.src = imageSrc;
    fullscreenCaption.textContent = caption;
    overlay.classList.add('active');
}

function closeFullscreen() {
    const overlay = document.getElementById('fullscreenOverlay');
    overlay.classList.remove('active');
}

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('p').textContent;
        showFullscreen(img.src, caption);
    });
});

// Show Living Room items by default
showCategory('livingRoom');
// ***********************************CONTACT-US*****************************
// Firebase configuration (Replace with your Firebase project config)
// Firebase Configuration (Replace with your own Firebase details)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name && email && phone && message) {
        let newMessageRef = database.ref("messages").push();
        newMessageRef.set({
            name: name,
            email: email,
            phone: phone,
            message: message
        });

        alert("Message Sent Successfully!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill all fields!");
    }
});
//******************************* */ rendering to another page*******************************
function selectCategory(category) {
    localStorage.setItem("selectedCategory", category);
    window.location.href = "display.html";
}
// ***********************rating ********************************************
