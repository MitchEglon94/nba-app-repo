import Player from "./Player";

export default async function PlayerList({ fontColor, bgColor, teamKey }) {
  const data = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/Players/${teamKey}?key=${process.env.API_KEY}`
  );
  const statData = await fetch(
    `https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByTeam/${new Date().getFullYear()}/${teamKey}?key=${
      process.env.API_KEY
    }`
  );
  const res = await data.json();
  const statRes = await statData.json();
  return (
    <div className="flex flex-col gap-5 p-5">
      Current roster
      {res.map((player) => (
        <div
          className="flex flex-col items-center text-center rounded  p-2.5"
          style={{ color: `#${fontColor}`, backgroundColor: `#${bgColor}` }}
        >
          <Player teamKey={teamKey} player={player} playerStat={statRes} />
        </div>
      ))}
    </div>
  );
}
