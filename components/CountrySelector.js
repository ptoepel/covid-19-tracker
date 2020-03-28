import { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("USA");
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
let oldStructure = {
countries: {},
iso3: {}
};





const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}



for (let country of countries.countries) {
oldStructure.countries[country.name] = country.iso2;
oldStructure.iso3[country.iso2] = country.iso3;
}
  return (
    <div>
      <h2>Currently Showing: {selectedCountry}</h2>
      <select
        onChange={e => setSelectedCountry(e.target.value)}
        defaultValue={selectedCountry}
      >
        {Object.entries(oldStructure.countries).map(([country, code]) => (
<option
 selected={selectedCountry === oldStructure.iso3[code]}
key={generateKey(oldStructure.iso3[code])}
value={oldStructure.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}
