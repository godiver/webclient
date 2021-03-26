import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
class App extends Component {

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
        {book.Item.author}
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
        <div className="bookshelf">
          <p>
            本一覧情報を取得してここに表示&詳細ページのリンクをつける
          </p>
        </div>
        <div>
          { this.renderBooks() }
        </div>
      </div>
    )
  }
}

export default App;
