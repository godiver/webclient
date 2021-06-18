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
    history.push(`books/videos?title=${book.Item.title}`);
  };

  return (
    <WithHeader>
      {loading ? <Loading /> : null}
      <div className="flex flex-col items-center">
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
// class Top extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: []
//     }
//   }

//   componentDidMount() {
//     axios.get(`/api/v1/books`).then((res) => {
//       this.setState({ books: res.data.Items })
//     }).catch(error => {
//       return error;
//     });
//   }

//   renderBooks = () => {
//     return this.state.books.map((book, index) => (
//       <li key={index}>
//         <Link to={`/books/videos/?title=${book.Item.title}`}>{book.Item.title}</Link>
//       </li>
//     ))
//   }

//   render() {
//     return (
//       <div>
//         <p className="title"><span>booktube</span></p>
//         <div>
//           <p>
//             選んだ本からその本の要約しているyoutubeの動画を視聴することができます。
//           </p>
//         </div>
//         <div>
//           { this.renderBooks() }
//         </div>
//       </div>
//     )
//   }
// }

// export default Top;
