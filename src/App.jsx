import Header from "./containers/header";
import { Wrapper, Wrapper2, OB } from "./containers/ui/style";
import Results from "./containers/result";
import ProductBody from "./containers/body";
import DenseAppBar from "./headerP2/headerP2";
import React from "react";
import { Cards } from "./containers/body/cards/cardsInfo";







function App() {
const [searchValue, SetSearchValue] = React.useState('');

const onChangeSearchValue = (event) => {
  SetSearchValue(event.target.value);
}

  return (
    <OB >
      <Wrapper>
      <Header searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} items={Cards}/>
      <Results />
      <ProductBody searchValue={searchValue} onChangeSearchValue={onChangeSearchValue}/>
      </Wrapper>
      <Wrapper2>
        <DenseAppBar />
      </Wrapper2>
    </OB>
  );
}

export default App;

