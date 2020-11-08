
// Manages the actual accordion effect
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    });
}

// Manages focus-relative differential coloring for user visual signal
const maj_course_sections = document.getElementById('major-courses');
maj_course_sections.addEventListener('focus', (event) => {
    event.target.style.color = '#ffcb05';    
}, true);

maj_course_sections.addEventListener('blur', (event) => {
    event.target.style.color = '#eeeeee';    
}, true);

const side_courses_section = document.getElementById('non-major-courses');
side_courses_section.addEventListener('focus', (event) => {
    event.target.style.color = '#ffcb05';    
}, true);

side_courses_section.addEventListener('blur', (event) => {
    event.target.style.color = '#eeeeee';    
}, true);