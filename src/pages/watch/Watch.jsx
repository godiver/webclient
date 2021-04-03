import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { WithHeader } from "../../layout/WithHeader";

import { fetchVideo } from "../../api/videos";

export const WatchIndex = () => {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState([]);
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const videoId = query.get("videoId");
    (async () => {
      try {
        setLoading(true);
        const response = await fetchVideo(videoId);
        setVideo(response.data.items);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return <WithHeader></WithHeader>;
};
