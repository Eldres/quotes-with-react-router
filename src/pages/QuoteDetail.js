import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
  const matchRoute = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found.</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${matchRoute.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${matchRoute.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${matchRoute.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
