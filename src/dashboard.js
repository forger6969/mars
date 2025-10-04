function infoRender() {
    let student = JSON.parse(localStorage.getItem(`currentUser`)) || []
    console.log(student);
    let coinsElement = document.querySelectorAll(`.coins`)
    let energyElement = document.querySelectorAll(`.energy`)
    let avatarEelemnt = document.querySelectorAll(`.avatar`)
    let nameElement = document.querySelector(`.name`)
    let groupText = document.querySelector(`.group-text`)
    let reyting = document.querySelector(`.reyting`)

    nameElement.textContent = `${student.names || `Неизвестно`} ${student.surname || 'Неизвестно'}`
    avatarEelemnt.forEach(avatar => avatar.src = student.img || `https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1`)
    energyElement.forEach(energy => energy.textContent = student.energy || 0)
    coinsElement.forEach(coins => coins.textContent = student.coins || 0)
    energyElement.textContent = student.energy || 0
    coinsElement.textContent = student.coins || 0
    groupText.textContent = student.group
    reyting.textContent = student.reyting
}

infoRender()

let shopBtn = document.getElementById(`shopBtn`)
let homeSection = document.querySelector(`.home-section`)
let shopSection = document.querySelector(`.shop-section`)
let homeBtn = document.getElementById(`home`)

shopBtn.addEventListener(`click`, () => {
    window.location.href = `../shop.html`
})

homeBtn.addEventListener(`click`, () => {
    shopSection.style.display = `none`
    homeSection.style.display = `flex`
})