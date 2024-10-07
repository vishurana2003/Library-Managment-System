// Function to handle login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;

    // Show corresponding dashboard based on role
    document.getElementById('login-section').classList.add('hidden');
    if (role === 'admin') {
        document.getElementById('admin-dashboard').classList.remove('hidden');
    } else {
        document.getElementById('user-dashboard').classList.remove('hidden');
    }
});

// Function to show specific sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.container:not(#login-section)');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Logout Functionality
function logout() {
    document.getElementById('admin-dashboard').classList.add('hidden');
    document.getElementById('user-dashboard').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('loginForm').reset();
}

// Cancel Form Functionality
function cancelForm(button) {
    const form = button.closest('form');
    form.reset(); // Reset the form
    const sectionId = form.closest('.container').id; // Get the section ID
    showSection(sectionId); // Show the current section
}

// Check Book Availability
document.getElementById('checkAvailabilityForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const bookName = document.getElementById('searchBookName').value;
    // Simulate checking availability
    const isAvailable = Math.random() < 0.5; // Randomly set availability for demonstration
    const availabilityMessage = document.getElementById('availabilityMessage');
    const issueButton = document.getElementById('issueAvailableBookBtn');
    availabilityMessage.innerText = isAvailable ? `The book "${bookName}" is available!` : `The book "${bookName}" is not available.`;
    issueButton.classList.toggle('hidden', !isAvailable);
    document.getElementById('bookAvailabilityResult').classList.remove('hidden');
});

// Issue Book Functionality
document.getElementById('issueForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const issueDate = document.getElementById('issueDate').value;
    const returnDate = document.getElementById('returnDate').value;

    if (!issueDate || !returnDate) {
        alert('Please fill in all fields.');
        return;
    }

    const confirmIssue = confirm(`Confirm issuing the book? Issue Date: ${issueDate}, Return Date: ${returnDate}`);
    if (confirmIssue) {
        alert('Book Issued Successfully!');
        cancelForm(event.target); // Reset and return to the section
    }
});

// Populate Issue Date and Return Date when showing the Issue Book section
document.getElementById('issueAvailableBookBtn').addEventListener('click', function () {
    alert('Proceed to issue this book.');
    showSection('issue-book-section');
    populateIssueAndReturnDates(); // Populate the issue and return dates when the section is shown
});

// Populate dates for Issue Book
function populateIssueAndReturnDates() {
    const today = new Date();
    const issueDateField = document.getElementById('issueDate');
    const returnDateField = document.getElementById('returnDate');

    // Set the issue date to today
    issueDateField.value = formatDate(today);

    // Set the return date to 15 days from today
    const returnDate = new Date(today);
    returnDate.setDate(today.getDate() + 15);
    returnDateField.value = formatDate(returnDate);
}

// Format date to YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Return Book Form Validation
document.getElementById('returnForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const returnBookName = document.getElementById('returnBookName').value;

    const confirmReturn = confirm(`Confirm returning the book: "${returnBookName}"?`);
    if (confirmReturn) {
        alert('Book Returned Successfully!');
        showSection('fine-payment-section');
    }
});

// Fine Payment Form Validation
document.getElementById('fineForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const finePaid = document.getElementById('finePaid').checked;

    if (finePaid) {
        const confirmPayment = confirm('Confirm Fine Payment?');
        if (confirmPayment) {
            alert('Fine Paid and Book Returned Successfully!');
            cancelForm(event.target); // Reset the form after payment
        }
    } else {
        alert('Please pay the fine before completing the return.');
    }
});

// Add Membership
document.getElementById('addMembershipForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const memberName = document.getElementById('membershipName').value;
    const membershipDuration = document.getElementById('membershipDuration').value;

    alert(`Membership added for ${memberName} for ${membershipDuration}.`);
    cancelForm(event.target); // Reset the form after adding
});

// Update Membership
document.getElementById('updateMembershipForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const membershipNumber = document.getElementById('membershipNumber').value;

    // Simulate populating other fields
    document.getElementById('membershipUpdateName').value = 'Populated Member Name'; // Example
    alert(`Membership updated for number ${membershipNumber}.`);
    cancelForm(event.target); // Reset the form after updating
});

// Add Book
document.getElementById('addBookForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookType = document.getElementById('bookType').value;

    alert(`Book "${bookTitle}" by ${bookAuthor} added as a ${bookType}.`);
    cancelForm(event.target); // Reset the form after adding
});

// Update Book
document.getElementById('updateBookForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const currentBookTitle = document.getElementById('updateBookTitle').value;
    const newBookTitle = document.getElementById('newBookTitle').value;
    const newBookAuthor = document.getElementById('newBookAuthor').value;
    const updateBookType = document.getElementById('updateBookType').value;

    alert(`Book "${currentBookTitle}" updated to "${newBookTitle}" by "${newBookAuthor}" as a "${updateBookType}".`);
    cancelForm(event.target); // Reset the form after updating
});

// User Management
document.getElementById('userManagementForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const userType = document.getElementById('userType').value;
    const userName = document.getElementById('userName').value;

    alert(`${userType.charAt(0).toUpperCase() + userType.slice(1)} user "${userName}" managed.`);
    cancelForm(event.target); // Reset the form after managing user
});
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const role = document.getElementById("role").value;
    if (role === "admin") {
        showDashboard('admin-dashboard');
    } else {
        showDashboard('user-dashboard');
    }
});

function showDashboard(dashboardId) {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById(dashboardId).classList.remove("hidden");
}

function showSection(sectionId) {
    const sections = [
        'check-availability-section',
        'issue-book-section',
        'return-book-section',
        'fine-payment-section',
        'add-membership-section',
        'update-membership-section',
        'add-book-section',
        'update-book-section',
        'user-management-section'
    ];

    sections.forEach(section => {
        document.getElementById(section).classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

function cancelForm(button) {
    const form = button.closest('form');
    form.reset();
    const sections = [
        'check-availability-section',
        'issue-book-section',
        'return-book-section',
        'fine-payment-section',
        'add-membership-section',
        'update-membership-section',
        'add-book-section',
        'update-book-section',
        'user-management-section'
    ];
    sections.forEach(section => {
        document.getElementById(section).classList.add("hidden");
    });
}

function logout() {
    document.getElementById("login-section").classList.remove("hidden");
    document.getElementById("admin-dashboard").classList.add("hidden");
    document.getElementById("user-dashboard").classList.add("hidden");
}

function openReportsModal() {
    document.getElementById("reports-modal").classList.remove("hidden");
}

function closeReportsModal() {
    document.getElementById("reports-modal").classList.add("hidden");
}

function generateReport(reportType) {
    // This function will handle report generation based on reportType
    alert("Generating report for: " + reportType);
    // You can add specific functionality here for each report type.
}
