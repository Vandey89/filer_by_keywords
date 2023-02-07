import React from "react";
import { Product } from "./style";
import {Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions} from '@mui/material';
import tablo from '../../public/icon/calendar.svg';
import { Cards } from "./cards/cardsInfo";







export default function ProductBody(){
   const zsu = () => [alert("Did you help ZSU with a coin?!"), alert("Or are you not love zsu???!!!!😡😡😡😡😡")] ;
return(
    <Product>
      <div className="orb">
    <div className="body"> 
      
        {Cards.map((card) =>( 
    <Card sx={{ maxWidth: 400 }}>    
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
      </CardActions>
    </Card>
      ))}
    
    </div>
    </div> 
    </Product>
)


};

                   