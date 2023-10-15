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

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Guess the <Battldle /> in 6 guesses.
        </div>
        <div>Each guess is a famous battle that occured in that battle.</div>
        <div>
          After each guess, you will have the distance, the direction and the
          proximity from your guess and the target battle, in which battle the
          battle occured.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Examples</div>
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
            Your guess{" "}
            <span className="uppercase font-bold">Chacabuco, 1817</span> is{" "}
            {formatDistance(13557000, settingsData.distanceUnit)} away from the
            target battle, the target battle is in the North-East direction and
            you have a only 32% of proximity because it&apos;s quite far away!
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
            Your second guess{" "}
            <span className="uppercase font-bold">Tali-Ihantala, 1944</span> is
            getting closer! {formatDistance(3206000, settingsData.distanceUnit)}{" "}
            away, South-East direction and 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Siege of Beirut, 1982",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Next guess,{" "}
            <span className="uppercase font-bold">Siege of Beirut, 1982</span>,
            it&apos;s the correct battle. Well done ⚔️
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        A new <Battldle /> will be available every day
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">About distance</div>
        <div>
          The distances displayed correspond to the distances between the
          selected and the approximate battlefield coordinates. These are simply
          an approximate for the purposes of the game.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Battldle /> has been <span className="font-bold">heavily</span>{" "}
        inspired by{" "}
        <a
          className="underline"
          href="https://worldle.teuteuf.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌍 Worldle
        </a>{" "}
        created by{" "}
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
          Forked by{" "}
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
          Want to support?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy me a coffee! ☕
          </a>
        </div> */}
      </div>
    </Panel>
  );
}
