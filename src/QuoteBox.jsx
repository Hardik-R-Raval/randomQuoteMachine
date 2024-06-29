import React from 'react';

const QuoteBox = ({ quote, author, fetchQuote }) => {
  return (
    <div id="quote-box" className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-lg transition-all duration-500 ease-in-out transform hover:scale-105">
      <p id="text" className="text-2xl mb-4 font-semibold text-teal-400 transition-all duration-500 ease-in-out">{quote}</p>
      <p id="author" className="text-lg mb-6 text-teal-200 transition-all duration-500 ease-in-out">- {author}</p>
      <button 
        id="new-quote" 
        onClick={fetchQuote} 
        className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300 shadow-md mr-20"
      >
        New Quote
      </button>
      <a 
        id="tweet-quote" 
        href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block text-teal-400 hover:underline transition duration-300 ml-20"
      >
        Tweet
      </a>
    </div>
  );
};

export default QuoteBox;
