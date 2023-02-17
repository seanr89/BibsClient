import { IPlayer } from "../models/iplayer";
import { ITeam } from "../models/iteam";
import { Utilities } from "./utilities";

export class TeamGenerator
{
    public static GenerateShuffle(players: IPlayer[]): [IPlayer[], IPlayer[]]
    {
        let teamOnePlayers: IPlayer[] = [];
        let teamTwoPlayers: IPlayer[] = [];
        /**
         * Local and Random shuffle operation!
         */
        Utilities.shuffle(players);
        const half = Math.ceil(players.length / 2);
        //const players = this.allPlayers.map((x) => x);
        teamOnePlayers = players.splice(0, half);
        teamTwoPlayers = players.splice(-half);

        return [teamOnePlayers, teamTwoPlayers];
    }
}