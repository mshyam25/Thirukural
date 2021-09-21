document.querySelector('button').addEventListener('click', thirukural)

const number = document.querySelector('.nbr')
const sect_tamil = document.querySelector('.sect_tam')
const chapgrp_tam = document.querySelector('.chapgrp_tam')
const chap_tam = document.querySelector('.chap_tam')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const tam_exp = document.querySelector('.tam_exp')



async function thirukural() {

    try {

        let nbr = parseInt(document.querySelector('.ip').value)

        let res = await fetch(`https://api-thirukkural.vercel.app/api?num=${nbr}`)

        const data = await res.json()

        appendData(data)

    } catch (e) {
        console.log(e)
    }

}

function appendData(data) {

    number.innerHTML = `Number : ${data.number}`
    sect_tamil.innerHTML = `Section : ${data.sect_tam}`
    chapgrp_tam.innerHTML = `Chapter : ${data.chapgrp_tam}`
    chap_tam.innerHTML = `Adhigaram : ${data.chap_tam}`
    line1.innerHTML = data.line1
    line2.innerHTML = data.line2
    tam_exp.innerHTML = `Tamil Explanation : ${data.tam_exp}`
}