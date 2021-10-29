import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { WithHeader } from "../../layout/WithHeader";

import { fetchVideosIndex, fetchSearchBooks } from "../../api/videos";
import { Loading } from "../../component/Loading";
import { BookList } from "./BookList";

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

  const handleSearchBooks = (e) => {
    setSearchBooks(e.target.value);
  }

  /* 検索ボタンを押したらフォームに入力した内容がタイトルに含まれている本を取得 */
  const callSearch = async (e) => {
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
          <input value={searchBooks} onChange={handleSearchBooks} type="text"/>
          <input onClick={callSearch} type="submit" value="検索"/>
        </form>

        <BookList books={!responseSearchBooks.length ? books : responseSearchBooks} history={history}/>
      </div>
    </WithHeader>
  );
}
