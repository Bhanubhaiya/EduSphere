// Shared utility functions for EduSphere LMS

/**
 * Check if user is logged in
 * Redirects to login page if not authenticated
 * @returns {Object|null} User object if logged in, null otherwise
 */
function checkAuth() {
    const user = sessionStorage.getItem('loggedInUser');
    if (!user) {
        window.location.href = 'index.html';
        return null;
    }
    return JSON.parse(user);
}

/**
 * Logout function - clears session storage and redirects to login
 */
function logout() {
    sessionStorage.removeItem('loggedInUser');
    sessionStorage.removeItem('selectedCourseId');
    window.location.href = 'index.html';
}

/**
 * Show a modal by ID
 * @param {string} modalId - The ID of the modal element
 */
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

/**
 * Hide a modal by ID
 * @param {string} modalId - The ID of the modal element
 */
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

/**
 * Setup modal close on backdrop click
 * Attaches event listener to the modal element itself
 * @param {string} modalId - The ID of the modal element
 */
function setupModalClose(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.addEventListener('click', function(event) {
            // Close only if clicking the backdrop (modal itself), not the content
            if (event.target === modal) {
                hideModal(modalId);
            }
        });
    }
}

/**
 * Show error modal with message and optional redirect
 * @param {string} message - Error message to display
 * @param {string} redirectUrl - Optional URL to redirect to after delay
 * @param {number} delay - Delay in milliseconds before redirect (default: 2000)
 */
function showErrorModal(message, redirectUrl = null, delay = 2000) {
    // Create error modal if it doesn't exist
    let errorModal = document.getElementById('errorModal');
    if (!errorModal) {
        errorModal = document.createElement('div');
        errorModal.id = 'errorModal';
        errorModal.className = 'modal';
        errorModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Error</h2>
                </div>
                <div class="modal-body">
                    <p id="errorMessage"></p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="hideModal('errorModal')">OK</button>
                </div>
            </div>
        `;
        document.body.appendChild(errorModal);
        setupModalClose('errorModal');
    }
    
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = message;
    }
    
    showModal('errorModal');
    
    // Auto-redirect if URL provided
    if (redirectUrl) {
        setTimeout(() => {
            hideModal('errorModal');
            window.location.href = redirectUrl;
        }, delay);
    }
}

