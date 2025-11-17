// Course detail page functionality

// Load course details
function loadCourseDetails() {
    const courseId = parseInt(sessionStorage.getItem('selectedCourseId'));
    
    if (!courseId) {
        window.location.href = 'courses.html';
        return;
    }
    
    const course = courses.find(c => c.id === courseId);
    
    if (!course) {
        window.location.href = 'courses.html';
        return;
    }
    
    const courseContent = document.getElementById('courseContent');
    
    // Generate instructor initials for avatar
    const instructorInitials = course.instructor.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase();
    
    // Build resources HTML - using semantic button elements for simulated resources
    const resourcesHTML = course.resources.map(resource => `
        <li class="resource-item">
            <span class="resource-icon">${resource.icon}</span>
            <button type="button" class="resource-link" aria-label="Download ${resource.name}">${resource.name}</button>
        </li>
    `).join('');
    
    courseContent.innerHTML = `
        <div class="course-detail-card">
            <div class="course-detail-header">
                <h2>${course.title}</h2>
                <span class="course-category">${course.category}</span>
            </div>
            
            <div class="course-section">
                <h3>Course Overview</h3>
                <p>${course.overview}</p>
            </div>
            
            <div class="course-section">
                <h3>Instructor Information</h3>
                <div class="instructor-info">
                    <div class="instructor-avatar">${instructorInitials}</div>
                    <div class="instructor-details">
                        <h4>${course.instructor.name}</h4>
                        <p>${course.instructor.bio}</p>
                        <p>${course.instructor.email}</p>
                    </div>
                </div>
            </div>
            
            <div class="course-section">
                <h3>Course Resources</h3>
                <p>Download the following resources to enhance your learning experience:</p>
                <ul class="resources-list">
                    ${resourcesHTML}
                </ul>
            </div>
            
            <div class="course-section" style="text-align: center; margin-top: 40px;">
                <button class="btn btn-primary btn-large" onclick="startQuiz(${course.id})">Start Quiz</button>
            </div>
        </div>
    `;
}

// Start quiz
function startQuiz(courseId) {
    sessionStorage.setItem('selectedCourseId', courseId);
    window.location.href = 'quiz.html';
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    loadCourseDetails();
});


