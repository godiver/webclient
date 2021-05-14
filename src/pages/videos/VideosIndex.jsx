import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { WithHeader } from "../../layout/WithHeader";

import { fetchVideos } from "../../api/videos";
import { Loading } from "../../component/Loading";

export const VideosIndex = () => {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
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
    debugger;
    history.push(`/watch?videoId=${video.id.videoId}`);
  };

  return (
    <WithHeader>
      {loading ? <Loading /> : null}
      <div className="flex flex-col items-center">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            videoid={video.id.videoId}
            onClick={handleClick}
            className="sm:w-full w-3/5 mb-2 cursor-pointer"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="object-cover w-full"
            />
            <div className="w-full py-2 px-2">
              <div className="sm:w-full font-medium text-xl leading-tight truncate">
                {video.snippet.title}
              </div>
              <div className="mt-1">
                <div className="leading-none text-sm">
                  {video.snippet.channelTitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </WithHeader>
  );
};
