import React from "react";
import { Product } from "./style";
import {Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions} from '@mui/material';
import tablo from '../../public/icon/calendar.svg';
import { Cards } from "./cards/cardsInfo";
import plus from '../../public/icon/plus.svg'
import minus from '../../public/icon/minus.svg'


export default function ProductBody({ searchValue }){
   const zsu = () => [alert("Did you help ZSU with a coin?!"), alert("Or are you not love zsu???!!!!😡😡😡😡😡")] ;
   
return(
    <Product>
      <div className="orb">
    <div className="body"> 
      
        {Cards.filter((card) => {
        const fullName = (card.name + card.Typography1).toLowerCase();
        if (fullName.includes((searchValue).toLowerCase()) || 
        card.date.toLocaleLowerCase().includes((searchValue).toLowerCase())){
          return true;
        }
        }).map((card) =>( 
    <Card sx={{ maxWidth: 400 }} key={card.id}>    
      <CardActionArea>
        <CardMedia
          component="img"
          height="247"
          image={card.img} onClick={zsu}
          alt="Ups...."
        />
        <CardContent>
          <div className="date">
            <img src={tablo} width="12px"/> 
            {card.date}
          </div>
          <Typography gutterBottom variant="h5" component="div">
            {card.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.Typography1}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
          <a href={card.knopka}>More info -＞</a>
        </Button>
        <img className="action"  alt="action" src={plus}  />
      </CardActions>
    </Card>
      ))}
    </div>
    </div> 
    </Product>
)


};


                   
 