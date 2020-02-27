let qrcode = document.querySelector('img')
let qrtext = document.querySelector('textarea')
let rqbtn = document.querySelector('button')

rqbtn.addEventListener('click', generateQR)
console.log('tets')
function generateQR(a) {
    let size = '200x200'
    let data = qrtext
    let base = 'http://api.qrserver.com/v1/create-qr-code/?data=auygfaisgdyg&size-200x200'

    let url = `${base}?data=${data}&size-${size}`

    qrcode.scr = url
}