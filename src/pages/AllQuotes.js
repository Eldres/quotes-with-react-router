import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Josh",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Josh",
    text: "Programming is fun!",
  },
];

const AllQuotes = () => {
  return (
    <>
      <h1>All Quotes Page</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
};

export default AllQuotes;
