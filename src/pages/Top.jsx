import React, { Component, useEffect, useState } from 'react';
import axios from 'axios'
import { useHistory, useLocation } from "react-router-dom";

export const VideosSearch = () => {
  const [videos, setBooks] = useState([]);
  const query = new URLSearchParams(useLocation().search);
  const history = useHistory();

  useEffect(() => {
    const title = query.get("title");
    (async () => {
      try {
        setLoading(true);
        const response = await fetchVideos(title);
        setVideos(response.data.items);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleClick = (e) => {
    const clickedVideoId = e.currentTarget.getAttribute("videoid");
    const video = videos.find((video) => video.id.videoId === clickedVideoId);
    history.push(`/videos?title=${video.id.videoId}`);
  };
class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    axios.get(`/api/v1/books`).then((res) => {
      this.setState({ books: res.data.Items })
    }).catch(error => {
      return error;
    });
  }

  renderBooks = () => {
    return this.state.books.map((book, index) => (
      <li key={index}>
        <Link to={`/books/videos/?title=${book.Item.title}`}>{book.Item.title}</Link>
      </li>
    ))
  }

  render() {
    return (
      <div>
        <p className="title"><span>booktube</span></p>
        <div>
          <p>
            選んだ本からその本の要約しているyoutubeの動画を視聴することができます。
          </p>
        </div>
        <div>
          { this.renderBooks() }
        </div>
      </div>
    )
  }
}

export default Top;
