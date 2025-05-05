const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function SetActive(i){
    for (slide of slides)
    slide.classList.remove('active');
    slides[i].classList.add('active');

    for (dot of dots)
    dot.classList.remove('active');
    dots[i].classList.add('active');
}

for (let j = 0; j<dots.length; j++) {
    dots[j].addEventListener('click', function(){
        SetActive(j);
    })
}

// Function to replace the text in the About Me section
function replaceAboutMeText() {
    // Get the element by ID
    const aboutMeSection = document.getElementById('aboutMe');
  
    // New text you want to set
    const newText = "Hello! I'm a passionate developer with a love for coding and creating innovative solutions.";
  
    // Replace the inner HTML or text content
    aboutMeSection.innerHTML = `<p>${newText}</p>`;
  }