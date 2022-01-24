import { Button } from "../Button";

import { Quote, Speaker, Wrapper } from "./styles";

type QuotesProps = {
  quote: string;
  speaker: string;
  onUpdate?: () => void;
};

export const Quotes = ({ quote, speaker, onUpdate }: QuotesProps) => {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>

      <Speaker>- {speaker}</Speaker>

      <Button event={onUpdate}>Quote No Jutsu</Button>
    </Wrapper>
  );
};
