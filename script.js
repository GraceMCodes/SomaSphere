// This is to show the email and gender  for the first-time users.//

document.addEventListener('DOMContentLoaded', function(){
    const userTypeInputs =document.querySelectorAll('input[name="userType"]');
    const registerFields = document.getElementById('registerField');
    
    userTypeInputs.forEach(input=>{ input.addEventListener('change', function(){
        if (this.value ==='register'){
            registerFields.style.display = 'block';
        } else{
            registerFields.style.display= 'none';
        }
    });

    });
});