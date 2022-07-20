import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const handleAddQuote = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
  };

  return (
    <>
      <QuoteForm onAddQuote={handleAddQuote} />
    </>
  );
};

export default NewQuote;
