import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<null | object>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | object>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(true);
      })
      .catch((e) => {
        setError(e);
      });
  }, [data]);

  return { data, loading, error };
};

export default useFetch;
