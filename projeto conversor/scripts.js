const button = document.getElementById('convert-button');
const select = document.getElementById('currency-select');

const dolar = 5.2
const euro = 5.9
const bitcoin = 89.503


const covertValue = () => {
    const inputReais = document.getElementById('input-real').value;
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReais)

    if (select.value === "US$ Dolar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReais / dolar)
    }
    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReais / euro)
    }
    if (select.value === "Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputReais / bitcoin)
    }

}

ChangeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './img/euro.jpg'
    }

    if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = 'Dolar Americano'
        currencyImg.src = './img/dolar.jpg'
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './img/bitcoin.png'
    }

    covertValue()

}

button.addEventListener('click', covertValue)
select.addEventListener('change', ChangeCurrency)
