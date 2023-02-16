import * as React from "react";
import { HeaderP2Foto,  BodyPage2, StyledButton} from "./style";
import flag from "../public/icon/mishka.jpg";
import Button from '@mui/material/Button';


function look(elemId) {
  var elem = document.getElementById(elemId);
  elem.display === "none" ?
    elem.style.display = "block" : elem.style.display = "none";
}

// a {
//   display: block;
// }

// .div {
//   border: 1px solid black;
//   width: 50px;
//   height: 50px;
// }
// <a onclick="look('link1'); return false;" href="#">Ссылка 1</a>
// <div id="link1" class="div" style="display: none;">Блок 1</div>
// <a onclick="look('link2'); return false;" href="#">Ссылка 2</a>
// <div id="link2" class="div" style="display: none;">Блок 2</div>

export default function DenseAppBar() {
  return (
  
  <div className="ORB">
      <HeaderP2Foto>
        <div id="link1" class="div" display="none">
            <BodyPage2> 
              <div className="BodyPage2Text">
                      <div className="titleP2">Russo-Ukrainian War</div>
                      The 2022 Russian invasion of Ukraine began on the morning of 24 February, when Putin announced a "special military operation" 
                      to "demilitarise and denazify" Ukraine. Minutes later, missiles and airstrikes hit across Ukraine, including Kyiv, shortly 
                      followed by a large ground invasion along multiple fronts. Zelenskyy declared martial law and a general mobilisation of all
                       male Ukrainian citizens between 18 and 60, who were banned from leaving the country.
                        Russian attacks were initially launched on a northern front from Belarus towards Kyiv, a north-eastern front towards Kharkiv, 
                        a southern front from Crimea, and a south-eastern front from Luhansk and Donetsk. In the northern front, amidst heavy 
                        losses and strong Ukrainian resistance surrounding Kyiv, Russia's advance stalled in March, and by April its troops retreated. 
                        On 8 April, Russia placed its forces in southern and eastern Ukraine under the command of General Aleksandr Dvornikov, and some units
                        withdrawn from the north were redeployed to the Donbas. On 19 April, Russia launched a renewed attack across a 500 kilometres (300 mi) 
                        long front extending from Kharkiv to Donetsk and Luhansk. By 13 May, a Ukraine counter-offensive had driven back Russian forces near Kharkiv. 
                        By 20 May, Mariupol fell to Russian troops following a prolonged siege of the Azovstal steel works. Russian forces continued to 
                        bomb both military and civilian targets far from the frontline. The war caused the largest refugee and humanitarian crisis within Europe 
                        since the Yugoslav Wars in the 1990s; the UN described it as the fastest-growing such crisis since World War II. In the first week 
                        of the invasion, the UN reported over a million refugees had fled Ukraine; this subsequently rose to over 7,405,590 by 24 September, a reduction 
                        from over eight million due to some refugees' return.
                        Ukrainian forces launched counteroffensives in the south in August, and in the northeast in September. On 30 September, Russia annexed four oblasts of Ukraine which it had 
                        partially conquered during the invasion. This annexation was generally unrecognized and condemned by the countries of the world. After Putin announced that he would 
                        begin conscription drawn from the 300,000 citizens with military training and potentially the pool of about 25 million Russians who could be eligible for conscription, one-way 
                        tickets out of the country nearly or completely sold out. The Ukrainian offensive in the northeast successfully recaptured the majority of Kharkiv Oblast in September. 
                        In the course of the southern counteroffensive, Ukraine retook the city of Kherson in November and Russian forces withdrew to the east bank of the Dnieper River
                        <h3>THE WAR CONTINUES... </h3>
                        </div>
                  
            </BodyPage2>    
            </div>   
        <img src={flag} height="245px" width="100%" />
      </HeaderP2Foto>
      <StyledButton>
          <Button variant="contained" >
            <a href="https://en.wikipedia.org/wiki/Russo-Ukrainian_War">More Info...</a>
          </Button>
       </StyledButton>
  </div>
  

  );
}


    

