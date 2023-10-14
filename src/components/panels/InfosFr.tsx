import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Battldle } from "../Battldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function InfosFr({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Comment jouer" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Devine le <Battldle /> en 6 essais.
        </div>
        <div>
          Chaque essai est une bataille célèbre qui a eu lieu dans ce pays.
        </div>
        <div>
          Après chaque essai, vous aurez la distance, la direction et la
          proximité entre votre essai et la bataille cible, et dans quel pays la
          bataille a eu lieu.
        </div>
      </div>
      {/* ... similar adjustments for examples ... */}
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Un nouveau <Battldle /> sera disponible chaque jour !
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">À propos de la distance</div>
        <div>
          Les distances affichées correspondent aux distances entre votre
          sélection et les coordonnées approximatives du champ de bataille.
          Celles-ci sont simplement une approximation aux fins du jeu.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Battldle /> a été <span className="font-bold">fortement</span> inspiré
        par{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌍 Worldle
        </a>{" "}
        créé par{" "}
        <a
          className="underline"
          href="https://twitter.com/teuteuf"
          target="_blank"
          rel="noopener noreferrer"
        >
          @teuteuf
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Forké par{" "}
          <a
            className="underline"
            href="https://github.com/axelb152"
            target="_blank"
            rel="noopener noreferrer"
          >
            @axelb152
          </a>
        </div>
        {/* ... remaining content ... */}
      </div>
    </Panel>
  );
}
