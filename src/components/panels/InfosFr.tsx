import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
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
          {" "}
          Devine le <Worldle /> en 6 essais.
        </div>
        <div>Chaque essai doit être un pays, un territoire, etc... valide.</div>
        <div>
          Après chaque essai, vous aurez la distance, la direction et la
          proximité entre votre essai et le pays cible.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Exemples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Chili",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Votre essai <span className="uppercase font-bold">Chili</span> est à{" "}
            {formatDistance(13_557_000, settingsData.distanceUnit)} du pays
            cible, le pays cible se trouve dans la direction Nord-Est et vous
            avez une proximité de seulement 32% car votre essai est plutôt
            éloigné !
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Finlande",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Votre seconde essai{" "}
            <span className="uppercase font-bold">Finlande</span> est plus
            proche ! La bonne réponse est à{" "}
            {formatDistance(3_206_000, settingsData.distanceUnit)}, au Sud-Est
            et la proximité est de 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Liban",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Prochain essai, <span className="uppercase font-bold">Liban</span>,
            c&apos;est le pays à deviner ! Bien joué ⚔️
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Un nouveau <Worldle /> sera disponible chaque jour !
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">A propos de la distance</div>
        <div>
          Les distances affichées correspondent aux distances entre le centre du
          pays choisi et de la cible.
        </div>
        <div>
          Par exemple, la distance calculée entre les Etats-Unis et le Canada
          est d&apos;environs{" "}
          {formatDistance(2_260_000, settingsData.distanceUnit)} même si les
          deux pays ont une frontière commune.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle /> a été <span className="font-bold">très</span> inpsiré par{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        créé par{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Fait par{" "}
          <a
            className="underline"
            href="https://twitter.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @teuteuf
          </a>
        </div>
        <div>
          Vous voulez me soutenir ?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Offrez moi un café ! ☕
          </a>
        </div>
      </div>
    </Panel>
  );
}
