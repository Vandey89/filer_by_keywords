import Header from "./containers/header";
import { Wrapper, Wrapper2, OB } from "./containers/ui/style";
import Results from "./containers/result";
import ProductBody from "./containers/body";
import DenseAppBar from "./headerP2/headerP2";
import { cardsInfo } from "./containers/body/cards/cardsInfo";






function App() {
  return (
    <OB >
      <Wrapper>
      <Header />
      <Results />
      <ProductBody />
      </Wrapper>
      <Wrapper2>
        <DenseAppBar />
      </Wrapper2>
    </OB>
  );
}

export default App;

console.log(cardsInfo)