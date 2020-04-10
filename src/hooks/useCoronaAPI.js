import { useState, useEffect } from "react";

const BASE_URL = "https://corona.lmao.ninja/v2";

export function useCoronaAPI(
  path,
  { initialData = null, converter = (data) => data, refetchInterval = null }
) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${BASE_URL}${path}`);
      const data = await response.json();
      setData(converter(data));
    };
    fetchData();

    if (refetchInterval) {
      const intervalId = setInterval(fetchData, refetchInterval);
      return () => clearInterval(intervalId);
    }
  }, [converter, path, refetchInterval]);

  return data;
}
