import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const matchRoute = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuotes.text) {
    return <p>No Quote Found.</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
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
