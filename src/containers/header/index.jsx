import React from "react";
import { HeaderMain} from "./styleHeader";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Moment from 'react-moment';



export default function Header () {
    return (
      <HeaderMain>
        <Moment date="Tuesday Feb 24 2022 12:59:00 GMT-0500"
                    durationFromNow />
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


