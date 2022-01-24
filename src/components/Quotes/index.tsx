import { Button } from "../Button";

import { Quote, Speaker, Wrapper } from "./styles";

type QuotesProps = {
  quote: string;
  character: string;
  handleUpdateContent?: () => void;
};

export const Quotes = ({ quote, character, handleUpdateContent }: QuotesProps) => {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>

      <Speaker>- {character}</Speaker>

      <Button handleUpdateContent={handleUpdateContent}>Quote No Jutsu</Button>
    </Wrapper>
  );
};
