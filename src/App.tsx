import { useState, useEffect, useRef } from "react";
import axios from "axios";

import { Quotes } from "./components/Quotes";

import narutoImg from "./assets/images/naruto.png";

import { Content, NarutoImg } from "./styles/app";

type QuoteProps = {
  quote: string;
  character: string;
};

export default function App() {
  const isMounted = useRef(true);

  const [quote, setQuote] = useState<QuoteProps>({
    quote: "loading quote...",
    character: "loading character...",
  });

  const handleUpdateContent = async () => {
    const { data } = await axios.get("https://animechan.vercel.app/api/quotes/anime?title=naruto");

    const quotes = data.map((quote: QuoteProps) => {
      return {
        quote: quote.quote,
        character: quote.character,
      };
    });

    if (isMounted.current) {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  };

  useEffect(() => {
    handleUpdateContent();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quote} handleUpdateContent={handleUpdateContent} />

      <NarutoImg src={narutoImg} alt="Naruto with a kunai" />
    </Content>
  );
}
