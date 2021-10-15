import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { WithHeader } from "../layout/WithHeader";

import { fetchVideosIndex, fetchSearchBooks } from "../api/videos";
import { Loading } from "../component/Loading";

export const VideosSearch = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState("");
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

  const callSearchFunction = (e) => {
    e.preventDefault()
    (async() => {
      try {
        setLoading(true);
        const response = fetchSearchBooks(searchBooks)
        setSearchBooks(response.data.Items.title)
      } catch(e) {
      } finally {
        setLoading(false);
      }
    })
  }

  return (
    <WithHeader>
      {loading ? <Loading /> : null}
      <div className="flex flex-col items-center">
        <form className="Search">
          <input value={searchBooks} onChange={handleSearchBooksFunction} type="text"/>
          <input onClick={callSearchFunction} type="submit" value="検索"/>
        </form>
        {books.map((book) => (
          <div
            key={book.Item.title}
            title={book.Item.title}
            onClick={handleClick}
            className="sm:w-full w-3/5 mb-2 cursor-pointer"
          >
            <div className="w-full py-2 px-2">
              <div className="sm:w-full font-medium text-xl leading-tight truncate">
                {book.Item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </WithHeader>
  );
}
