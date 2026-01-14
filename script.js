const form = document.getElementById('intakeForm');
const savedMessage = document.getElementById('savedMessage');

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
    e.preventDefault(); // Prevent page reload

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
