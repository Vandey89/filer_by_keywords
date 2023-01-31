import * as React from "react";
import { HeaderP2Foto,  BodyPage2, StyledButton} from "./style";
import flag from "../public/icon/mishka.jpg";
import Button from '@mui/material/Button';



export default function DenseAppBar() {
  return (
  
  <div className="ORB">
      <HeaderP2Foto>
            <BodyPage2> 
              <div className="BodyPage2Text">
                      <div className="titleP2">Lorem ipsum dolor sit amet.</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fugiat
               doloremque velit necessitatibus! Sed, perferendis minus culpa aut, asperiores ex quisquam sint eum 
               temporibus eaque provident quidem similique ducimus nesciunt, quibusdam aliquid incidunt ipsam. Facere
                dolore corrupti nulla? Deleniti voluptatum magni sapiente at non quisquam placeat officia minus 
                exercitationem, nisi, vitae, dolores laudantium dolorem maxime dolore dolor cum. Ad, ut nihil. 
                Nisi voluptate voluptates illo repellendus nulla sit amet odio in sint dolores unde eos similique 
                quibusdam voluptatibus ullam id aspernatur, dolorem ducimus. Temporibus, recusandae quibusdam 
                impedit earum reiciendis voluptates, porro, dolorem iure accusantium rem iusto soluta. 
                Accusantium vel neque eum repellat adipisci perferendis id animi aliquid quaerat, modi accusamus 
                temporibus nobis pariatur a similique doloremque porro sed. Praesentium recusandae quo ullam unde 
                aspernatur, repudiandae at eaque excepturi doloribus corporis odio deserunt atque? Ut facilis atque 
                officiis deleniti ipsum! Quod delectus asperiores saepe dolore. Atque nam doloribus accusantium
                 dolorem dolorum officia consectetur molestiae quos quae nobis ea natus, optio obcaecati praesentium 
                 vel exercitationem consequuntur eum tempora. Ullam aspernatur quae sint deleniti recusandae officia 
                 ipsam repellat voluptates ratione, debitis, nihil quo, eius reiciendis eaque. Quasi minus similique 
                 quia delectus. In, blanditiis voluptate perspiciatis fuga veritatis molestiae harum quis illum ut 
                 sequi laborum velit delectus magni tempore dicta dolore ullam nostrum labore magnam? Recusandae 
                 modi eos esse accusamus quas eaque aspernatur, vitae, obcaecati blanditiis neque vel ab debitis 
                 nesciunt hic, porro molestiae repellendus! At iste doloribus corporis odit maiores consequuntur, 
                 accusantium nobis reiciendis minus quasi accusamus exercitationem dignissimos porro maxime odio 
                 consequatur culpa tempora quibusdam eum adipisci veniam provident ullam? Accusamus, consequuntur 
                 sit accusantium suscipit velit exercitationem, mollitia cumque cupiditate illum at animi sed 
                 adipisci officiis, iusto est distinctio. Quam omnis explicabo aliquam aspernatur esse tenetur 
                 harum hic, cum, debitis error possimus, maxime ex officiis est voluptate minima vero at magnam atque?</div>
                  
            </BodyPage2>     
        <img src={flag} height="245px" width="100%" />
      </HeaderP2Foto>
      <StyledButton>
          <Button variant="contained" >
                Back to start
          </Button>
       </StyledButton>
  </div>
  

  );
}


    
 