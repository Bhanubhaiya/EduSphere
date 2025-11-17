// Authentication and login validation

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Setup modal close on backdrop click
    setupModalClose('successModal');
    
    // Get form elements
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const successModal = document.getElementById('successModal');
    
    // Real-time validation
    usernameInput.addEventListener('input', function() {
        validateUsername();
    });
    
    emailInput.addEventListener('input', function() {
        validateEmail();
    });
    
    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        
        // Validate both fields
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        
        if (isUsernameValid && isEmailValid) {
            // Store user info in sessionStorage
            sessionStorage.setItem('loggedInUser', JSON.stringify({
                username: username,
                email: email,
                loginTime: new Date().toISOString()
            }));
            
            // Show success modal
            showModal();
        }
    });
    
    // Validate username
    function validateUsername() {
        const username = usernameInput.value.trim();
        if (username.length === 0) {
            usernameError.textContent = '';
            return false;
        }
        if (username.length < 4) {
            usernameError.textContent = 'Username must be at least 4 characters';
            return false;
        }
        usernameError.textContent = '';
        return true;
    }
    
    // Validate email
    function validateEmail() {
        const email = emailInput.value.trim();
        if (email.length === 0) {
            emailError.textContent = '';
            return false;
        }
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        }
        emailError.textContent = '';
        return true;
    }
    
    // Show success modal with auto-navigation
    function showModal() {
        successModal.style.display = 'block';
        
        // Disable the manual 'Continue' button to prevent double-click issues
        const continueButton = successModal.querySelector('.btn-primary');
        if (continueButton) {
            continueButton.disabled = true;
        }
        
        // Auto-navigate after 1.5 seconds
        setTimeout(() => {
            successModal.style.display = 'none';
            redirectToCourses();
        }, 1500);
    }
    
    // Redirect to courses page (global for onclick handler)
    window.redirectToCourses = function() {
        window.location.href = 'courses.html';
    };
});


