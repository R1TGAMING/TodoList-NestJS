import { useEffect, useState } from "react";

interface useFetchProps {
  url: string;
  options?: RequestInit;
}

interface data {
  id: number;
  task: string;
  description: string;
  createdAt: string;
  completed: boolean;
}

const useFetch = ({ url, options }: useFetchProps) => {
  const [data, setData] = useState<null | data[]>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | object>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data.data);
        setData(data.data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
