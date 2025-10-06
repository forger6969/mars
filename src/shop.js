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
    {
        product: `Branded Sticker Pack`,
        price: 99,
        count: 12,
        img: `./shop/Shop_stickers-removebg-preview.png`
    },
    {
        product: `Keychain`,
        price: 149,
        count: 5,
        img: `./shop/brelok_mars-removebg-preview.png`
    },
    {
        product: `Mars Rug`,
        price: 149,
        count: 9,
        img: `./shop/mars_kovrik_-removebg-preview.png`
    },
    {
        product: `Notepad`,
        price: 149,
        count: 8,
        img: './shop/mars_it_schoool-removebg-preview.png'
    },
    {
        product: 'Phone Stand',
        price: 199,
        count: 2,
        img: './shop/mars_telefon_stoyka-removebg-preview.png'
    },
    {
        product: `Wireless mouse`,
        price: 299,
        count: 12,
        img: './shop/wireless_mouse_compressed.png'
    },
    {
        product: `Branded Thermos`,
        price: 349,
        count: 3,
        img: './shop/termos_mars-removebg-preview.png'
    },
    {
        product: 'Screen Glasses',
        price: 399,
        count: 2,
        img: `./shop/Group_513198-removebg-preview.png`
    },
    {
        product: `MARS Backpack (Chegirma)`,
        price: 399,
        count: 3,
        img: `./shop/Group_513188.png`
    },
    {
        product: `AirPods Max`,
        price: 599,
        count: 5,
        img: `./shop/Shop_AirPodsmax-removebg-preview.png`
    },
    {
        product: 'Branded Powerbank',
        price: 699,
        count: 3,
        img: './shop/branded_powerband.png'
    },
    {
        product: `Branded hoodie`,
        price: 699,
        count: 3,
        img: './shop/mars_oq_xudi-removebg-preview.png'
    },
    {
        product: 'Yandex Station',
        price: 2490,
        count: 2,
        img: `./shop/Shop_Yandex_station-removebg-preview.png`
    }
]

if (!localStorage.getItem('productsShop')) {
    localStorage.setItem(`productsShop`, JSON.stringify(products))
}


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

function renderProducts(prod) {

    let productsStorage = JSON.parse(localStorage.getItem(`productsShop`)) || []
    let cardsWrapper = document.querySelector(`.shop-wrapper`)
    cardsWrapper.innerHTML = ``

    if (prod) {
        cardsWrapper.innerHTML = ``

        prod.forEach((product) => {
            let card = document.createElement(`div`)
            card.classList = `card`
            let index = productsStorage.indexOf(product)
            console.log(index);

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
            cardsWrapper.append(card)
        })

        return
    }


    productsStorage.forEach((product) => {
        let card = document.createElement(`div`)
        card.classList = `card`
        let index = productsStorage.indexOf(product)
        console.log(index);

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
        cardsWrapper.append(card)
    })

}

renderProducts()


let buyBtn = document.querySelectorAll(`.buy-btn`)

buyBtn.forEach(btn => {
    btn.addEventListener(`click`, () => {
        let index = btn.getAttribute(`data-index`)
        console.log(index);
        let productIndex = products[index]
        console.log(productIndex.product);

        let currentUser = JSON.parse(localStorage.getItem("currentUser")) || []
        let passwordEnterBoxElement = document.querySelector(`.passwordEnterBox`)

        const TOTAL = currentUser.coins - productIndex.price


        if (TOTAL < 0) {

            notification(`Вам нехватает ${Math.abs(TOTAL)} coin's`, `red`)

        } else if (TOTAL >= 0) {
            passwordEnterBoxElement.classList.add(`active`)

            let closeBtn = document.querySelector(`.closeBtn`)

            closeBtn.addEventListener(`click`, () => {
                passwordEnterBoxElement.classList.remove(`active`)

            })

            let passwordShop = document.querySelector(`.passwordShop`)
            let contunieBtnShop = document.querySelector(`.contunieBtnShop`)
            contunieBtnShop.addEventListener(`click`, () => {
                let passwordValue = +passwordShop.value

                if (passwordValue === currentUser.password) {
                    notification(`Успешный заказ`, `green`)
                    console.log('Правольный пароль');
                    passwordCheck = true
                    passwordEnterBoxElement.classList.remove(`active`)


                    console.log(`Успешная покупка остаток:${TOTAL}`)
                    let allStudent = JSON.parse(localStorage.getItem('students'))
                    allStudent = allStudent.map(student => {
                        if (currentUser.id === student.id) {
                            student.coins = TOTAL
                        }
                        return student
                    })

                    console.log(allStudent);

                    let productsStorage = JSON.parse(localStorage.getItem(`products`)) || []
                    let prodcutsIndexStorage = productsStorage[index]
                    prodcutsIndexStorage.count--
                    console.log(prodcutsIndexStorage);
                    console.log(prodcutsIndexStorage);
                    currentUser.coins = TOTAL

                    localStorage.setItem('products', JSON.stringify(productsStorage))
                    localStorage.setItem(`students`, JSON.stringify(allStudent))
                    localStorage.setItem(`currentUser`, JSON.stringify(currentUser))
                    infoRender()
                    renderProducts()
                } else {
                    console.log("Неверный пароль");
                    notification(`Неверный пароль`, `red`)
                }
            })

        }
    })
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

let searchInput = document.getElementById(`search`)
searchInput.addEventListener(`input`, () => {

    let searchValue = searchInput.value.toLowerCase().trim()
    console.log(searchValue);

    let filterProducts = products.filter(filter => filter.product.toLowerCase().trim().includes(searchValue))
    renderProducts(filterProducts)
})