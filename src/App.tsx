import { useState } from "react";
import axios from "axios";

import { Quotes } from "./components/Quotes";

import narutoImg from "./assets/images/naruto.png";

import { Content, NarutoImg } from "./styles/app";

type QuoteProps = {
  quote: string;
  character: string;
};

export default function App() {
  const [quote, setQuote] = useState<QuoteProps>({
    quote: "test quote",
    character: "test character",
  });

  const handleUpdateContent = async () => {
    const { data } = await axios.get("https://animechan.vercel.app/api/quotes/anime?title=naruto");

    const quotes = data.map((quote: QuoteProps) => {
      return {
        quote: quote.quote,
        character: quote.character,
      };
    });

    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <Content>
      <Quotes {...quote} handleUpdateContent={handleUpdateContent} />

      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  );
}
