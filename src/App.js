import { useEffect, useState } from 'react';
import { Calculator } from './components/Calculator';
import fetchQuotes from './logic/fetchQuotes';
import Quote from './components/Quote';
import ErrorComponent from './components/ErrorComponent';

export default function App() {
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
      <Calculator />
    </div>
  );
}
