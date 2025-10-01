let studets = [
    {
        id: 1,
        names: 'Elka ',
        surname: 'baxa',
        age: 14,
        coins: 200,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIJsL0hWezeqKR7JBTIkHY6xxrodjA-Ro3Q&s',
        position: 'bot',
        reyting: ' ⭐⭐⭐',
        group: 2879,
        teacherName: 'TambiMasayev',
        course: 'html css js ',
        skills: 'html css js',
        login: 'elka07',
        password: 81080,
        energy: 1230

    },
    {
        id: 2,
        names: 'pokemon ',
        surname: 'pikachu',
        age: 15,
        coins: 10,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGrfzAnxt9DbQHHlBR6QKtH4fHFo1Ad4qWA&s',
        position: 'hardbot',
        reyting: ' ⭐⭐⭐⭐⭐',
        group: 2879,
        teacherName: 'TambiMasayev',
        course: 'exel',
        skills: 'html css js react assembler c c++ pascal python',
        login: 'pikachu07',
        password: 12345,
        energy: 43230

    },
    {
        id: 3,
        names: 'Anime ',
        surname: 'Sakura',
        age: 15,
        coins: 200,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ19cvAmFbTSKjzkWnMGTGF3HiQDReEcdqJg&s',
        position: 'hardbot',
        reyting: ' ⭐⭐⭐⭐',
        group: 2879,
        teacherName: 'TambiMasayev',
        course: 'html css js ',
        skills: 'html css js',
        login: 'sakura07',
        password: 54321,
        energy: 3230
    },
    {
        id: 4,
        names: 'Professor ',
        surname: 'Usmanov',
        age: 15,
        coins: 1,
        img: 'https://i.pinimg.com/236x/29/7e/32/297e3222d70bf9fd149879712e8da1b5.jpg',
        position: 'EasyBot',
        reyting: ' ⭐',
        group: 2879,
        teacherName: 'TambiMasayev',
        course: '1c ',
        skills: 'html css js',
        login: 'usmanov07',
        password: 11111,
        energy: 230
    }
]

function notification(text, color, href) {
    console.log(href);
    let notBox = document.querySelector(`.notificationsBox`)
    let notElement = document.createElement(`div`)
    notElement.classList = `notification`

    notElement.innerHTML = `
    <p>${text}</p>
    <div class="poloska"></div>
    `
    notElement.classList.remove(`none`)
    notBox.classList.remove(`none`)
    notElement.style.backgroundColor = color

    notBox.append(notElement)

    setTimeout(() => {
        notElement.classList.add(`none`)
        setTimeout(() => {
            notElement.remove()
        }, 300);
    }, 5000);

    if (href) {
        setTimeout(() => {
            window.location.href = `../${href}`
        }, 5000);
    }
}

function login() {

    let loginInput = document.querySelector(`.login`)
    let passwordInput = document.querySelector(`.password`)
    let loginBtn = document.querySelector(`.loginBtn`)

    loginBtn.addEventListener(`click`, () => {
        let loginValue = loginInput.value
        let passwordValue = +passwordInput.value

        let findStudent = studets.find(stud => loginValue === stud.login && passwordValue === stud.password)

        if (loginInput.value === '' || passwordInput === '') {
            loginInput.style.border = `2px solid red`
            passwordInput.style.border = `2px solid red`
            setTimeout(() => {
                loginInput.style.border = `1px solid #75757530`
                passwordInput.style.border = `1px solid #75757530`
            }, 3000);

            notification(`Заполните все поля!`, `red`)
        } else if (findStudent) {
            loginInput.value = ''
            passwordInput.value = ''
            localStorage.setItem(`currentUser`, JSON.stringify(findStudent))
            notification(`Добро пожаловать ${findStudent.names} ${findStudent.surname}`, `green`, `dashboard.html`)
        } else {
            console.log(`Пользователь ${loginValue} не найден`);
        }
    })
}

login()