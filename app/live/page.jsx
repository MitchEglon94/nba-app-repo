import React from "react";
import Team from "./Team";

async function page() {
  const data = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/Games/2023?key=${process.env.API_KEY}`,
    { next: { revalidate: 10800 } }
  );
  const res = await data.json();
  const liveGames = res.filter(
    (game) =>
      game.IsClosed === false &&
      new Date(game.Day).toDateString() === new Date().toDateString()
  );
  console.log(liveGames);
  return (
    <div className="m-auto text-center p-2">
      <h1 className="text-4xl my-8">Todays Games</h1>
      {liveGames.length === 0 && <p>No games today!!</p>}
      {liveGames > 0 &&
        liveGames.map((game) => (
          <div className="mb-4" key={game.GameID}>
            <div className="flex justify-center items-center gap-5">
              <Team team={game.AwayTeam} />
              <p className="flex-1">
                {new Date(game.DateTime).toLocaleTimeString()} ET{" "}
              </p>
              <Team team={game.HomeTeam} />
            </div>
            {/* <p>{game.Status}</p> */}
          </div>
        ))}
    </div>
  );
}

export default page;
