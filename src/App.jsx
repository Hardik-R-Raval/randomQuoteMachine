import React from 'react';
import QuoteBox from './QuoteBox';
import './App.css';
import useQuote from './useQuote';

function App() {
  const { quote, author, fetchQuote } = useQuote();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <QuoteBox quote={quote} author={author} fetchQuote={fetchQuote} />
    </div>
  );
}

export default App;
