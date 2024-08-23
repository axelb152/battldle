import battlesData from "../data/battles.json";
import battleCodesWithImage from "../data/battleCodesWithImage.json";
import frenchBattleNames from "../data/frenchBattleNames.json";

export interface Battle {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const battles: Battle[] = battlesData;

export const battlesWithImage = battles.filter((c) =>
  battleCodesWithImage.includes(c.code.toLowerCase())
);

export function getBattleName(language: string, battle: Battle) {
  if (language === "fr") {
    return (
      frenchBattleNames[battle.code as keyof typeof frenchBattleNames] ||
      battle.name
    );
  }
  return battle.name;
}

export function sanitizeBattleName(battleName: string): string {
  return battleName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
