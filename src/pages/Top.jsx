import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { WithHeader } from "../layout/WithHeader";

import { fetchVideosIndex } from "../api/videos";
import { Loading } from "../component/Loading";

export const VideosSearch = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
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

  return (
    <WithHeader>
      {loading ? <Loading /> : null}

      <div className="grid grid-cols-6 sm:grid-cols-2 justify-items-center lg:w-full w-3/4 mx-auto">
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
