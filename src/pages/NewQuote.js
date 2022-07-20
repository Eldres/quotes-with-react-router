import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const handleAddQuote = (quoteData) => {
    console.log(quoteData);
  };
  return (
    <>
      <QuoteForm onAddQuote={handleAddQuote} />
    </>
  );
};

export default NewQuote;
