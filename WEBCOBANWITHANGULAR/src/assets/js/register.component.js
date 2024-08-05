document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (password !== confirmPassword) {
        passwordError.textContent = 'Mật khẩu xác nhận không khớp.';
        event.preventDefault();
    } else {
        passwordError.textContent = '';
    }
});
