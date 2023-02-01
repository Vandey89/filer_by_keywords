import { cardsInfo } from "./cardsInfo";

export let cardData = '';

cardsInfo.forEach(({id, image, date, TypographyTitle, TypographyText, button })  => {
    cardData +=`
    <li>
            <h5> ${date} <h5>
        <p>
            ${TypographyTitle.toLocaleUpperCase()}
            <b><h4>${TypographyText}</h4></b>
        <p/> 
            <span> ${button} </span>
    <li/>
    `

})