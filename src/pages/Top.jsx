import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { WithHeader } from "../layout/WithHeader";

import { fetchVideosIndex, fetchSearchBooks } from "../api/videos";
import { Loading } from "../component/Loading";

export const VideosSearch = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState("");
  const [responseSearchBooks, setResponseSearchBooks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetchVideosIndex();
        setBooks(response.data.Items);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleClick = (e) => {
    const clickedBookTitle = e.currentTarget.getAttribute("title");
    const book = books.find((book) => book.Item.title === clickedBookTitle);
    history.push(`/videos?title=${book.Item.title}`);
  };

  const handleSearchBooksFunction = (e) => {
    setSearchBooks(e.target.value);
  }

  const callSearchFunction = async (e) => {
    setLoading(true);
    e.preventDefault()
    const response = await fetchSearchBooks(searchBooks)
    setResponseSearchBooks(response.data.Items)
    setLoading(false);
  }

  return (
    <WithHeader>
      {loading ? <Loading /> : null}
      <div className="grid grid-cols-6 sm:grid-cols-2 justify-items-center lg:w-full w-3/4 mx-auto">
        <form className="Search">
          <input value={searchBooks} onChange={handleSearchBooksFunction} type="text"/>
          <input onClick={callSearchFunction} type="submit" value="検索"/>
        </form>

        {books.map((book) => (
          <div
            key={book.Item.title}
            title={book.Item.title}
            onClick={handleClick}
            className="cursor-pointer"
          >
            <div className="py-2 px-2">
              <img src={book.Item.largeImageUrl} alt="Logo" className="w-60 h-auto" />
            </div>
          </div>
        ))}
      </div>
    </WithHeader>
  );
}
