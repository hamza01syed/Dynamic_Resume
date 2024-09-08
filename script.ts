document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeSection = document.getElementById('resume') as HTMLDivElement;

    if (form && resumeSection) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Get form data
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const phone = (document.getElementById('phone') as HTMLInputElement).value;
            const education = (document.getElementById('education') as HTMLInputElement).value;
            const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
            const skills = (document.getElementById('skills') as HTMLInputElement).value;

            // Generate resume content
            const resumeContent = `
                <div class="resume-section">
                    <h3>${name}</h3>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                </div>
                <div class="resume-section">
                    <h4>Education</h4>
                    <p>${education}</p>
                </div>
                <div class="resume-section">
                    <h4>Work Experience</h4>
                    <p>${workExperience}</p>
                </div>
                <div class="resume-section">
                    <h4>Skills</h4>
                    <p>${skills.split(',').map(skill => `<span class="skill">${skill.trim()}</span>`).join(', ')}</p>
                </div>
            `;

            // Update resume section
            resumeSection.innerHTML = resumeContent;
        });
    }
});
