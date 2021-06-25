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

  return (
    <WithHeader>
      {loading ? <Loading /> : null}
      <div className="flex flex-col items-center">
        <div className="sm:w-full w-3/5 mb-2 cursor-pointer">
          {video.snippet ? video.snippet.title : <p>ない</p>}
        </div>
      </div>
    </WithHeader>
  );
};
