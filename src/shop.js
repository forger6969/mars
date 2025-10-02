let products = [
    {
        product: `Mars Pen`,
        price: 49,
        count: 24,
        img: './shop/sensor_ruchka_mars-removebg-preview.png'
    },
    {
        product: `Strobar`,
        price: 49,
        count: 109,
        img: './shop/strobar_compressed.png'
    },
    {
        product: `Keyboard sticker`,
        price: 49,
        count: 17,
        img: `./shop/Shop_keyboard_sticker-removebg-preview.png`
    },

]

products.forEach((product, index) => {
    let card = document.createElement(`div`)
    card.classList = `card`

    card.innerHTML = `
     <div class="card">
          <img class="product-img" src="${product.img}" alt="">
          <p class="product-name">${product.product}</p>
          <div class="price-box">
            <p class="price-text"><span class="price">${product.price}</span><img class="coin-card"
                src="./images/Coin.8a6f0644.svg" alt=""></p>
            <p class="product-count"><span class="count">${product.count}</span> шт осталось</p>
          </div>
          <button data-index="${index}" class="buy-btn">buy></button>
        </div>
    `
    let cardsWrapper = document.querySelector(`.shop-wrapper`)
    cardsWrapper.append(card)
})

let homeBtn = document.getElementById(`home`)
homeBtn.addEventListener(`click`, () => {
    window.location.href = `./dashboard.html`
})

function infoRender() {
    let student = JSON.parse(localStorage.getItem(`currentUser`))
    console.log(student);
    let coinsElement = document.querySelectorAll(`.coins`)
    let energyElement = document.querySelectorAll(`.energy`)
    let avatarEelemnt = document.querySelectorAll(`.avatar`)
    let nameElement = document.querySelector(`.name`)

    avatarEelemnt.forEach(avatar => avatar.src = student.img)
    energyElement.forEach(energy => energy.textContent = student.energy)
    coinsElement.forEach(coins => coins.textContent = student.coins)
    energyElement.textContent = student.energy
    coinsElement.textContent = student.coins
}

infoRender()