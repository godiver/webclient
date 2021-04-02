import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { WithHeader } from "../../layout/WithHeader";

// import { fetchVideo } from "../../api/videos";

export const WatchIndex = () => {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState([]);
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const title = query.get("title");
    (async () => {
      try {
        setLoading(true);
        // const response = await fetchVideos(title);
        // setVideo(response.data.items);
        setVideo();
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return <WithHeader></WithHeader>;
};
