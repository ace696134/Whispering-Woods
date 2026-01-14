const form = document.getElementById('intakeForm');
const savedMessage = document.getElementById('savedMessage');
const clearBtn = document.getElementById('clearBtn');
const emailBtn = document.getElementById('emailBtn');

// Load saved data from localStorage
window.onload = () => {
    const savedData = JSON.parse(localStorage.getItem('therapyIntakeForm'));
    if (savedData) {
        document.getElementById('name').value = savedData.name || '';
        document.getElementById('age').value = savedData.age || '';
        document.getElementById('email').value = savedData.email || '';
        document.getElementById('reason').value = savedData.reason || '';
        document.getElementById('goals').value = savedData.goals || '';
    }
};

// Save form data to localStorage
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value.trim(),
        age: document.getElementById('age').value.trim(),
        email: document.getElementById('email').value.trim(),
        reason: document.getElementById('reason').value.trim(),
        goals: document.getElementById('goals').value.trim()
    };

    localStorage.setItem('therapyIntakeForm', JSON.stringify(formData));

    savedMessage.style.display = 'block';
    setTimeout(() => savedMessage.style.display = 'none', 2000);
});

// Clear form and localStorage
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('therapyIntakeForm');
    form.reset();
    alert("Form data cleared from browser.");
});

// Send form data to email
emailBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const reason = document.getElementById('reason').value.trim();
    const goals = document.getElementById('goals').value.trim();

    const subject = encodeURIComponent("Therapy Intake Form Submission");
    const body = encodeURIComponent(
        `Full Name: ${name}\nAge: ${age}\nEmail: ${email}\nReason for Therapy: ${reason}\nTherapy Goals: ${goals}`
    );

    // Opens user's email client
    window.location.href = `mailto:
