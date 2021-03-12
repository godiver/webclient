import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { WithHeader } from "../../layout/WithHeader";

import { fetchVideos } from "../../api/videos";

export const VideosIndex = () => {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const query = new URLSearchParams(useLocation().search);

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

  return <WithHeader></WithHeader>;
};
