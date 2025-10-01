function infoRender() {
    let student = JSON.parse(localStorage.getItem(`currentUser`))
    console.log(student);

    let mentorElement = document.querySelector(`.mentor`)
    let courseElement = document.querySelector(`.course`)
    let skillElement = document.querySelector(`.skill`)
    let coinsElement = document.querySelector(`.coins`)
    let energyElement = document.querySelector(`.energy`)
    let avatarEelemnt = document.querySelector(`.avatar`)
    let nameElement = document.querySelector(`.name`)

    nameElement.textContent = `${student.names} ${student.surname}`
    avatarEelemnt.src = student.img
    energyElement.textContent = student.energy
    coinsElement.textContent = student.coins
    mentorElement.textContent = student.teacherName
    courseElement.textContent = student.course
    skillElement.textContent = student.skills
}

infoRender()