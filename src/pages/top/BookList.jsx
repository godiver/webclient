import React from 'react';

export const BookList = ({ books, history }) => {

  const handleClick = (e) => {
    const clickedBookTitle = e.currentTarget.getAttribute("title");
    const book = books.find((book) => book.Item.title === clickedBookTitle);
    history.push(`/videos?title=${book.Item.title}`);
  };

  return (
    <>
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
    </>
  )
}
