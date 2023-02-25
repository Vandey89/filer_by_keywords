import styled from "styled-components";
import FlagBackgrounf from "../public/icon/flag.jpg"


export const HeaderP2Foto = styled.div`
    position: relative;
    height: 71.1vh ;
    width: 100%;
        background-image: url(${FlagBackgrounf});
`;
export const BodyPage2 = styled.div`
    display: flex  ;
    position: absolute;
    top: 130px;
    left: 75px;
    width: 1290px;
    height: 901px;
    background: #FFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    .BodyPage2Text{
        position: absolute;
        width: 1140px;
        height: 837px;
        left: 75px;
        top: 114px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 170%;
        color: #000000;
    }
    .titleP2{
        position: absolute;
        width: 473px;
        height: 29px;
        left: 330px;
        top: -80px;
        font-size: 24px;
    }
`;
export const StyledButton = styled.div`
       position: absolute;
        width: 160px;
        height: 24px;
        left: 118px;
        top: 1060px;
`;
export const StyledButton2 = styled.div`
       position: absolute;
        width: 160px;
        height: 24px;
        left: 298px;
        top: 1060px;
`;
