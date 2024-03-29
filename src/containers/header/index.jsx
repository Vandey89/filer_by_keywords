import React from "react";
import { HeaderMain} from "./styleHeader";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Moment from 'react-moment';
import { Vremya } from "./styleHeader";

//<Moment  src="https://MomentJS.com/downloads/moment-with-locales.js" interval={1000}  />

export default function Header ({ searchValue, onChangeSearchValue }) {
  console.log(searchValue)
    return (
      <HeaderMain>
        <Vremya> 
        <h2>
        Russian invasion of Ukraine continues:
        </h2>
        <h3>
        <Moment  
        date="Tuesday Feb 24 2022 12:59:00:00 GMT-0500"
                    durationFromNow />
        </h3>
        </Vremya>
        
        <div className="orb">
            <div className="header">
                  <div className="filter"> 
                      Filter by keywords
                  </div>
                  <Paper
                    component="form"
                    sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
                  >
                    <IconButton sx={{ p: "10px" }} aria-label="menu">
                      <SearchIcon /> 
                    </IconButton>
                    <InputBase
                      value={searchValue}
                      onChange={onChangeSearchValue}
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Russian agreshion in Ukraine"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    ></IconButton>
                </Paper>
            
            </div>  
        </div>
      </HeaderMain>
        
    )
}


