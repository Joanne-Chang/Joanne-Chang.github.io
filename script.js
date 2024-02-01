function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.querySelector('.main-content'); // Adjust this selector based on your actual class name
    var body = document.body;

    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-300px';
        body.classList.remove('sidebar-opened');
        mainContent.style.marginLeft = '0'; // Reset the margin when closing the sidebar
    } else {
        sidebar.style.left = '0';
        body.classList.add('sidebar-opened');
        mainContent.style.marginLeft = '189px'; // Adjust the margin based on your sidebar width
    }
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        toggleSidebar(); // Close sidebar after clicking on a section
    }
}

window.onscroll = function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 50) {
        header.style.top = '0';
    } else {
        header.style.top = '50px';
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle display based on the button clicked
    function toggleProjects(sectionClass) {
        var projects = document.querySelectorAll('.project.' + sectionClass);

        projects.forEach(function (project) {
            if (project.style.display === 'none' || project.style.display === '') {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    // Event listeners for each button
    document.getElementById('toggleSchoolProjects').addEventListener('click', function () {
        toggleProjects('school');
    });

    document.getElementById('togglePersonalProjects').addEventListener('click', function () {
        toggleProjects('personal');
    });

    document.getElementById('toggleHackathons').addEventListener('click', function () {
        toggleProjects('hackathons');
    });
});
