// Course catalog functionality

// Display user info
function displayUserInfo() {
    const user = checkAuth();
    if (user) {
        const userInfoElement = document.getElementById('userInfo');
        if (userInfoElement) {
            userInfoElement.textContent = `Welcome, ${user.username}!`;
        }
    }
}

// Render courses
function renderCourses(coursesToRender) {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';
    
    if (coursesToRender.length === 0) {
        coursesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--secondary-color);">No courses found in this category.</p>';
        return;
    }
    
    coursesToRender.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div>
                <h3>${course.title}</h3>
                <span class="course-category">${course.category}</span>
            </div>
            <p class="course-description">${course.description}</p>
            <button class="btn btn-primary" onclick="viewCourse(${course.id})">View Course</button>
        `;
        coursesGrid.appendChild(courseCard);
    });
}

// Filter courses by category
function filterCourses() {
    const categoryFilter = document.getElementById('categoryFilter');
    const selectedCategory = categoryFilter.value;
    
    let filteredCourses;
    if (selectedCategory === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.category === selectedCategory);
    }
    
    renderCourses(filteredCourses);
}

// View course details
function viewCourse(courseId) {
    sessionStorage.setItem('selectedCourseId', courseId);
    window.location.href = 'course-detail.html';
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    displayUserInfo();
    renderCourses(courses);
    
    // Add event listener for category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterCourses);
    }
});


