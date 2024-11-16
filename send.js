document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username && password) {
            alert('Error! Unable to login');
            window.location.replace('https://www.shekhar.com'); // Redirect to shekhar.com
        } else {
            alert('Please enter correct username or password. Try again');
            window.history.go(-1); // Go back to previous page
        }
    });
});
