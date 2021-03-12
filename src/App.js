import "./App.css";
import { quotesAPI } from "./api/api";
import { useEffect, useState } from "react";

const App = (props) => {
  const [author, setEditAuthor] = useState("Oxxxymiron");
  const [quote, setEditQuote] = useState(
    "To hell with feeling sorry for yourself, less useless reflections and more reflexes. When a clear goal is set, empty wanderings become a quest."
  );
  const [quotes, setEditQuotes] = useState([]);
  const [styles, setStylesQuotes] = useState("");

  let quotesC = () => {
    const style = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)})`;

    let indexQuotes = Math.floor(Math.random() * quotes.length);
    let authorIndex = quotes[indexQuotes].author;
    let quoteIndex = quotes[indexQuotes].quote;
    setEditAuthor(authorIndex);
    setEditQuote(quoteIndex);
    setStylesQuotes(style);
  };
  useEffect(() => {
   async function asyncData() { 
    let data = await quotesAPI.getQuotes();
    setEditQuotes(data.quotes); 
  }
  asyncData()
  }, [quote,author]);

  return (
    <div className="container" style={{backgroundColor: styles}}>
      <div className="quotes-content">
        <div className="quote-box">
          <div className="quote-text">
            <span className="text" style={{ color: styles }}>
              {quote}
            </span>
          </div>
          <div class="quote-author">
            <span className="author" style={{ color: styles }}>
              {"- " + author}
            </span>
          </div>
          <div className="random-button">
            <button
              onClick={quotesC}
              className="btn"
              style={{ backgroundColor: styles }}
            >
              New quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
