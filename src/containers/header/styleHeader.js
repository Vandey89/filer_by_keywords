import styled from "styled-components";



export const HeaderMain = styled.header`
    .orb{
        display: grid;
        padding: 50px 765px 1px 75px ;
    }
    .header{
        padding: 80px 765px 1278px 75;
        display: grid;
        grid-template-columns: auto;
        background-color: #FFFFFF;  
        font-family: 'Montserrat';
        }
    .filter{
        display: grid;
        width: 151px;
        height: 20px;
        background: #FFFFFF;  
        font-weight: 600;
        white-space: nowrap;
        grid-row: 1;
    }
`;
export const Vremya = styled.div`
    top: 50px;
    left: 2500px;
    height: 0px;
    position: relative;
    width: 220px;
    color: rgba(0,255,0.9)
`;















export const HeaderFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    position: absolute;
    width: 600px;
    height: 80px;
    left: 75px;
    top: 50px;
    background-color: white;
`;

export const KeyWords = styled.text`
    width: 151px;
    height: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    
    line-height: 20px;
    color: #363636;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Search = styled.div`
    width: 600px;
    height: 50px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const HeaderPole = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 600px;
    height: 50px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
`;

export const HeaderPoleText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;
    position: absolute;
    width: 376px;
    height: 24px;
    left: 20px;
    top: 13px;
`;

export const HeaderPoleTextThe = styled.text`
    width: 336px;
    height: 24px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #575757;
    flex: none;
    order: 1;
    flex-grow: 0;

`