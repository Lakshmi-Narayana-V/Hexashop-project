function check() {
    const username = document.contact.username.value;
    const mobile = document.contact.mobile.value;
    const email = document.contact.email.value;
    const mobileLength = Number(document.contact.countryCode.value)
    const nameError = document.getElementById('nameError');
    const mobileError = document.getElementById('mobileError');
    const emailError = document.getElementById('emailError');
    let nameStatus = false;
    let mobileStatus = false;
    let emailStatus = false;
    const alphaExp = /^[a-zA-Z\s]+$/;
    const numExp = /^[0-9]+$/;
    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // name validation
    if (username === '') {
        nameError.textContent = 'Name is Mandatory'
    }
    else {
        if (username.match(alphaExp)) {
            nameError.textContent = '';
            nameStatus = true;
        }
        else {
            nameError.textContent = 'Name should be Contains only Alphabetics'
        }
    }

    //Mobile Validation
    if (mobile === '') {
        mobileError.textContent = 'Mobile Number is Mandatory'
    }
    else {
        if (mobile.match(numExp)) {
            if (mobile.length === mobileLength){
                mobileError.textContent = '';
                mobileStatus= true;
            }
            else{
                mobileError.textContent= `${mobileLength}Digits Mobile Number is Mandatory`
            }
        }
        else {
            mobileError.textContent = 'Mobile Number should be in Digits'
        }
    }

    //Email validation
    if(email === ''){
        emailError.textContent = 'Email Address is Mandatory'
    }
    else{
        if(email.match(emailExp)){
            emailError.textContent = '';
            emailStatus =true;
        }
        else{
            emailError.textContent = 'Invalid Email Address'
        }
    }

    // return logic
    if (nameStatus && mobileStatus && emailStatus) {
        return true
    }
    else {
        return false
    }
}