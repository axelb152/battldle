import { useMemo } from "react";
import seedrandom from "seedrandom";
import { battlesWithImage, Battle } from "../domain/battles";

const forcedBattles: Record<string, string> = {
  "2022-02-02": "TD",
  "2022-02-03": "PY",
};

export function useBattle(dayString: string): [Battle, number, number] {
  const battle = useMemo(() => {
    const forcedBattleCode = forcedBattles[dayString];
    const forcedBattle =
      forcedBattleCode != null
        ? battlesWithImage.find((battle) => battle.code === forcedBattleCode)
        : undefined;

    return (
      forcedBattle ??
      battlesWithImage[
        Math.floor(seedrandom.alea(dayString)() * battlesWithImage.length)
      ]
    );
  }, [dayString]);

  const randomAngle = useMemo(
    () => seedrandom.alea(dayString)() * 360,
    [dayString]
  );

  const imageScale = useMemo(() => {
    const normalizedAngle = 45 - (randomAngle % 90);
    const radianAngle = (normalizedAngle * Math.PI) / 180;
    return 1 / (Math.cos(radianAngle) * Math.sqrt(2));
  }, [randomAngle]);

  return [battle, randomAngle, imageScale];
}
