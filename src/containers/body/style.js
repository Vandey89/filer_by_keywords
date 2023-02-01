import styled from "styled-components";
import HeaderBg from "../../public/icon/post-2.png"
import  ProductFoto2  from "../../public/icon/image-1.png";


export const Product = styled.div`
      font-family: 'Montserrat';
    .orb{
      display: grid;
      padding: 45px 75px 63px;
    }
    .body{
      display: grid;
      grid-template-columns:  1fr 1fr 1fr;
      grid-auto-rows: minmax(530px, 530px);  
      width: 1290px;
      height: 1105px;
      grid-gap: 45px;
      border: 1px solid #EAEAEA;
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
      border-radius: 5px; 
    }
    .date{
      line-height: 150%;
      opacity: 0.6;
      padding: 30px 0.1px;
    }
`;




























export const ProductData = styled.div`
    position: absolute;
    width: 91px;
    height: 20px;
    left: 25px;
    top: 242px;
`;
export const ProductDataCalendar = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    left: 0px;
    top: 2px;
    opacity: 0.6;
 `;
 export const ProductDataData = styled.text`
    position: absolute;
    width: 107px;
    height: 21px;
    left: 24px;
    top: 0px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #363636;
    opacity: 0.6;
 `;
 export const ProductDataCalendarVector1 = styled.div`
    position: absolute;
    left: 8.33%;
    right: 8.33%;
    top: 41.67%;
    bottom: 58.33%;
    border: 1px solid #363636;
 `;
  export const ProductDataCalendarVector2 = styled.div`
    position: absolute;
    left: 66.67%;
    right: 33.33%;
    top: 8.33%;
    bottom: 75%;
    border: 1px solid #363636;
  `;
  export const ProductDataCalendarVector3 = styled.div`
    position: absolute;
    left: 33.33%;
    right: 66.67%;
    top: 8.33%;
    bottom: 75%;
    border: 1px solid #363636;
  `;
  export const ProductDataCalendarVector4 = styled.div`
    position: absolute;
    left: 8.33%;
    right: 8.33%;
    top: 16.67%;
    bottom: 8.33%;
    border: 1px solid #363636;
  `;

  export const ProductName = styled.div`
    position: absolute;
    width: 355px;
    height: 58px;
    left: 20px;
    top: 287px;
  `;
  export const ProductNameTitle = styled.text`
    position: absolute;
    width: 350px;
    height: 58px;
    left: 25px;
    top: 287px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #363636;
  `;
  export const ProductFoto = styled.picture`
    position: absolute;
    width: 400px;
    height: 217px;
    left: 0px;
    top: 0px;
    background: url(${HeaderBg});
  `;
  export const ProductTitleText = styled.text`
    position: absolute;
    width: 350px;
    height: 96px;
    left: 25px;
    top: 365px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #363636;
  `;

export const ProductTwo = styled.div`
    box-sizing: border-box;
    width: 400px;
    height: 530px;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;
export const ProductThree = styled.div`
    box-sizing: border-box;
    width: 400px;
    height: 530px;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    flex: none;
    order: 2;
    flex-grow: 0;
`;
export const ProductFotoDva = styled.picture`
    position: absolute;
    width: 400px;
    height: 217px;
    left: 0px;
    top: 0px;
    background-image: url(${ProductFoto2});
    `; 