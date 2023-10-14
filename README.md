# Batt**l**dle

Forked from: https://worldle.teuteuf.fr !

### DISCLAIMER

Thank you for exploring my military-themed puzzle game. I want to emphatically express that although this game is set against the backdrop of historical battles, I do not condone, nor do I want to, glorify war and violence in any manner. The intention behind creating this game is not to celebrate conflict but to offer an engaging game, intertwined with historical contexts, without advocating for violence. I recognize war as a painful and distressing part of our shared history and the game is intended to stimulate similar skills used in popular games like wordle, worldle, angle etc etc while respecting the real-world implications of military conflicts. As you navigate through your guesses, I hope you enjoy the challenge whilst also keeping a mindful perspective on the larger themes of history and peace.

Make games not war: https://worldbeyondwar.org/donate/

## Original Worldle Resources used:

- Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
- Country images => https://github.com/djaiss/mapsicon
- French country names => https://fr.wikipedia.org/wiki/ISO_3166

## Battldle Resources used:

- https://en.wikipedia.org/wiki/List_of_battles_by_geographic_location
- https://andorrainsiders.com/en/timeline-dates-history-andorra/
- https://en.wikipedia.org/wiki/Battle_of_the_Caribbean#/media/File:CaribbeanIslands.png
- https://en.wikipedia.org/wiki/Battle_of_Dimawe
- https://en.wikipedia.org/wiki/First_Battle_of_Polotsk
- https://en.wikipedia.org/wiki/Battle_of_St._George%27s_Caye
- https://legionmagazine.com/en/five-battles-that-shaped-canada/
- https://www.wearethemighty.com/history/one-of-largest-ever-tank-battles/
- https://history-maps.com/story/Muslim-conquest-of-the-Levant
- https://historycollection.com/strength-honor-greatest-samurai-battles-history/
- https://en.wikipedia.org/wiki/Battle_of_the_Yarmuk
- https://www.lookandlearn.com/history-images/M484732/Sea-battle-off-Port-Royal-during-the-capture-of-Jamaica-from-the-Spanish-by-a-British-fleet-commanded-by-Admiral
- http://www.devata.org/artistic-visions-of-angkor-by-maurice-fievet/#.XyigWB6SlH0
- http://www.historyofwar.org/articles/battles_vardar1918.html
- https://www.realclearhistory.com/articles/2017/12/05/top_10_battles_in_african_history__257.html
- https://interestingengineering.com/culture/15-epic-battles-that-changed-the-course-of-history
- https://www.monitor.co.ug/uganda/magazines/people-power/how-battle-of-lukaya-shaped-war-between-uganda-tanzania-3339404
-

# TODO

- [x] Remove countries with no notable battles (check notion)
- [x] Sort out images
- [x] Rename UI from Worldle to Battldle (see components)
- [x] update `guessString` function in `src/components/Share.tsx` with correct url
- [ ] Double check array in countries, check all country codes are there
- [ ] Check logic for reloading countries (currently per day)
- [ ] Remove fr internationalization (simply update with battle translations?)
