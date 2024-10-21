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
          Devinez le <Battldle /> en 6 essais.
        </div>
        <div>
          Chaque essai est une bataille célèbre qui a eu lieu dans ce pays.
        </div>
        <div>
          Après chaque essai, vous obtiendrez la distance, la direction et la
          proximité entre votre essai et la bataille cible, ainsi que le pays où
          la bataille a eu lieu.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Exemples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Chacabuco, 1817",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Votre essai{" "}
            <span className="uppercase font-bold">Chacabuco, 1817</span> est à{" "}
            {formatDistance(13557000, settingsData.distanceUnit)} de la bataille
            cible, la bataille cible est en direction nord-est et vous avez
            seulement 32% de proximité car c&apos;est assez loin !
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Tali-Ihantala, 1944",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Votre deuxième essai{" "}
            <span className="uppercase font-bold">Tali-Ihantala, 1944</span> se
            rapproche ! {formatDistance(3206000, settingsData.distanceUnit)} de
            distance, direction sud-est et 84% !
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Siège de Beyrouth, 1982",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Le prochain essai,{" "}
            <span className="uppercase font-bold">Siège de Beyrouth, 1982</span>
            , c&apos;est la bataille correcte. Bien joué ⚔️
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Un nouveau <Battldle /> sera disponible chaque jour !
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">À propos de la distance</div>
        <div>
          Les distances affichées correspondent aux distances entre votre
          sélection et les coordonnées approximatives du champ de bataille.
          Celles-ci sont simplement une approximation pour les besoins du jeu.
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
        {/* <div>
          Vous voulez soutenir ?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Achetez-moi un café ! ☕
          </a>
        </div> */}
      </div>
    </Panel>
  );
}
