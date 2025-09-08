const form = document.getElementById('contactForm');
const submissionsList = document.getElementById('submissionsList');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === '' || email === '' || message === '') {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    addSubmission(name, email, message);

    form.reset();
});

function addSubmission(name, email, message) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${name}</strong><br/>
        <em>${email}</em><br/>
        <p>${message}</p>
    `;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        submissionsList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    submissionsList.appendChild(li);
}
