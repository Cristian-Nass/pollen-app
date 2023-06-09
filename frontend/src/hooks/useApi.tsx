import { useState, useEffect } from "react";

function useApi(url: string, apiCaller?: boolean) {
  const [data, setData] = useState<any>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!apiCaller) {
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
          setLoading(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, apiCaller]);

  //   return [data, isLoading, error];
  return { data, isLoading, error };
}

export default useApi;
