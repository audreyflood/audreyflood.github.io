var age;
var userStatus;

age = prompt('Please enter your age:');
if (age >= 65) {
    userStatus = 'Senior'
    document.getElementById('verify').innerHTML = 'Free Friday Coffee Night for Seniors!';
} else {
    userStatus = 'nonSenior'
    document.getElementById('verify').innerHTML = 'Enjoy Music and Make Memories!';
}