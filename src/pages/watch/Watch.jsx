import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useGoogleAnalytics } from "../../hooks/googleAnalytics";

import { WithHeader } from "../../layout/WithHeader";
import { Loading } from "../../component/Loading";

import { fetchVideo } from "../../api/videos";

export const WatchIndex = () => {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState({});
  const location = useLocation();
  useGoogleAnalytics();

  useEffect(() => {
    (async () => {
      const query = new URLSearchParams(location.search);
      const videoId = query.get("videoId");
      try {
        setLoading(true);
        const response = await fetchVideo(videoId);
        setVideo(response.data.items[0]);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, [location]);


  const videoLink = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`
  }

  return (
    <WithHeader>
      {loading ? <Loading /> : null}
      <div className="flex flex-col items-center">
        <div className="sm:w-full w-3/5">
          <iframe
            className="w-full"
            height="240"
            src={video.snippet ? videoLink(video.id.videoId) : ""}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
          <div className="w-full py-2 px-2">
            <div className="sm:w-full font-medium text-xl leading-tight truncate">
              {video.snippet ? video.snippet.title : <p>タイトル</p>}
            </div>
            <div className="mt-1">
              <div className="leading-none text-sm">
                {video.snippet ? video.snippet.channelTitle : <p>チャンネル名</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WithHeader>
  );
};
