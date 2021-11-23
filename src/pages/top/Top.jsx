import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { WithHeader } from "../../layout/WithHeader";

import { fetchVideosIndex, fetchSearchBooks } from "../../api/videos";
import { Loading } from "../../component/Loading";
import { BookList } from "./BookList";
import magnifyingGlass from "../../images/search.png";

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
      <form className="w-11/12 mx-auto md:max-w-md mt-5">
        <div className="mb-8 flex justify-center">
          <input value={searchBooks} onChange={handleSearchBooks} type="text" className="w-9/12 py-2 border-b focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50 focus:border-transparent" placeholder="タイトルを入力"/>
          <button onClick={callSearch} type="submit" className="w-9 h-10 ml-1 rounded-md bg-main-500">
            <img src={magnifyingGlass} alt="Logo" className="w-6 h-6 ml-1"/>
          </button>
        </div>
      </form>
      <div className="grid grid-cols-6 sm:grid-cols-2 justify-items-center lg:w-full w-3/4 mx-auto">
        <BookList books={!responseSearchBooks.length ? books : responseSearchBooks} history={history}/>
      </div>
    </WithHeader>
  );
}
