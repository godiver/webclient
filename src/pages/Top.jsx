import React, { Component } from 'react';

class Top extends Component {
  render() {
    return (
      <div>
        <p className="title"><span>book summary movie</span></p>
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
      </div>
    )
  }
}

export default Top;