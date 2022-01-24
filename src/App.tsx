import { Quotes } from "./components/Quotes";

import narutoImg from "./assets/images/naruto.png";

import { Content, NarutoImg } from "./styles/app";

function App() {
  return (
    <Content>
      <Quotes quote="test quote" speaker="Teste2" />
      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  );
}

export default App;
