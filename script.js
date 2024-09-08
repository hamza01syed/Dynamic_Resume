document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeSection = document.getElementById('resume');
    if (form && resumeSection) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
            // Get form data
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var education = document.getElementById('education').value;
            var workExperience = document.getElementById('work-experience').value;
            var skills = document.getElementById('skills').value;
            // Generate resume content
            var resumeContent = "\n                <div class=\"resume-section\">\n                    <h3>".concat(name, "</h3>\n                    <p>Email: ").concat(email, "</p>\n                    <p>Phone: ").concat(phone, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h4>Education</h4>\n                    <p>").concat(education, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h4>Work Experience</h4>\n                    <p>").concat(workExperience, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h4>Skills</h4>\n                    <p>").concat(skills.split(',').map(function (skill) { return "<span class=\"skill\">".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n                </div>\n            ");
            // Update resume section
            resumeSection.innerHTML = resumeContent;
        });
    }
});
