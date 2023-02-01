import React from "react";
import { Product } from "./style";
import {Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions} from '@mui/material';
import tablo from '../../public/icon/calendar.svg';
import { cardsInfo } from "./cards/cardsInfo";
import serceSherst from '../../public/icon/serdceSherst.jpg' 




const Cards = [1,2,3,4,5,6];

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
          image={serceSherst} onClick={zsu}
          alt="Ups...."
        />
        <CardContent>
          <div className="date">
            <img src={tablo} width="12px"/> June 29th 2021
          </div>
          <Typography gutterBottom variant="h5" component="div">
            War in Ukraine
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Russia has been waging war on Ukraine since late February 2022. Millions have fled the country, while others stayed to fight....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
          <a href="https://www.dw.com/en/war-in-ukraine/t-60931789">More info -＞</a>
        </Button>
      </CardActions>
    </Card>
      ))}
    
    </div>
    </div> 
    </Product>
)


};

                   