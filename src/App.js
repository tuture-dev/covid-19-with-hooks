import React, { useState } from "react";

import "./App.css";
import GlobalStats from "./components/GlobalStats";
import CountriesChart from "./components/CountriesChart";
import SelectDataKey from "./components/SelectDataKey";
import { useCoronaAPI } from "./hooks/useCoronaAPI";
import HistoryChartGroup from "./components/HistoryChartGroup";

function App() {
  const globalStats = useCoronaAPI("/all", {
    initialData: {},
    refetchInterval: 5000,
  });

  const [key, setKey] = useState("cases");
  const countries = useCoronaAPI(`/countries?sort=${key}`, {
    initialData: [],
    deps: [key],
    converter: (data) => data.slice(0, 10),
  });

  const [country, setCountry] = useState(null);
  const history = useCoronaAPI(`/v2/historical/${country}`, {
    initialData: {},
    deps: [country],
    converter: (data) => data.timeline,
  });

  return (
    <div className='App'>
      <h1>COVID-19</h1>
      <GlobalStats stats={globalStats} />
      <SelectDataKey onChange={(e) => setKey(e.target.value)} />
      <CountriesChart
        data={countries}
        dataKey={key}
        onClick={(payload) => setCountry(payload.activeLabel)}
      />

      {country ? (
        <>
          <h2>History for {country}</h2>
          <HistoryChartGroup history={history} />
        </>
      ) : (
        <h2>Click on a country to show its history.</h2>
      )}
    </div>
  );
}

export default App;
