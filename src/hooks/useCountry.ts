import { useMemo } from "react";
import seedrandom from "seedrandom";
import { countriesWithImage, Country } from "../domain/countries";

export function useCountry(): [Country, number, number] {
  // Use the current time as a unique seed
  const seed = new Date().getTime().toString();

  const country = useMemo(() => {
    return countriesWithImage[
      Math.floor(seedrandom.alea(seed)() * countriesWithImage.length)
    ];
  }, [seed]);

  const randomAngle = useMemo(() => seedrandom.alea(seed)() * 360, [seed]);

  const imageScale = useMemo(() => {
    const normalizedAngle = 45 - (randomAngle % 90);
    const radianAngle = (normalizedAngle * Math.PI) / 180;
    return 1 / (Math.cos(radianAngle) * Math.sqrt(2));
  }, [randomAngle]);

  return [country, randomAngle, imageScale];
}
