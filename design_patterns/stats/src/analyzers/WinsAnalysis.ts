import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import {MatchResults} from "../MatchResult";

export class WinsAnalysis implements  Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let gamesWon = 0;
    for(let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
        gamesWon++;
      } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
        gamesWon++;
      }
    }

    return `Team ${this.team} won ${gamesWon}`;
  }
}
