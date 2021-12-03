let logInBtn = document.getElementById('login-btn'),
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close'),
    userName = document.getElementById('welcome-user')


    logInBtn.addEventListener('click', () => {
        modal.style.display = 'block'
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    });

    // userName.addEventListener(alert('What is your Name?'), () => {
    //     modal
    // })