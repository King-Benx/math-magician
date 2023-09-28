import { useEffect, useState } from 'react';
import Quote from './Quote';
import ErrorComponent from './ErrorComponent';
import fetchQuotes from '../logic/fetchQuotes';

function FetchQuotes() {
  const initialState = {
    loading: true, error: false, quote: '', author: '',
  };
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const getResults = async () => {
      const [result] = await (await fetchQuotes()).json();
      if (result) {
        setState((prevState) => ({
          ...prevState, loading: false, error: false, quote: result.quote, author: result.author,
        }));
      } else {
        setState((prevState) => ({
          ...prevState, loading: false, error: true, quote: '', author: '',
        }));
      }
    };
    getResults();
  }, []);
  return (
    <div className="wrapper">
      <ErrorComponent loading={state.loading} error={state.error} />
      {!state.error && <Quote quote={state.quote} author={state.author} />}
    </div>
  );
}

export default FetchQuotes;
