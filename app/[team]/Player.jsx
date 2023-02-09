import Image from "next/image";

export default async function Player({ player, playerStats }) {
  const currentPlayerStats = playerStats.filter(
    (p) => p.PlayerID === player.PlayerID
  )[0];
  // console.log(currentPlayerStats);
  return (
    <div>
      <div>
        {" "}
        <Image
          className="rounded-full m-auto"
          src={player.PhotoUrl}
          width={75}
          height={75}
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl">
          {player.FirstName} {player.LastName}
        </h2>
        <p>No: {player.Jersey}</p>
        <p>Position: {player.Position}</p>
        <p>Games played: {currentPlayerStats.Games}</p>
        <p>
          PPG:{" "}
          {(currentPlayerStats.Points / currentPlayerStats.Games).toFixed(1)}
        </p>
        <p>
          RPG:{" "}
          {(currentPlayerStats.Rebounds / currentPlayerStats.Games).toFixed(1)}
        </p>
        <p>
          APG:{" "}
          {(currentPlayerStats.Assists / currentPlayerStats.Games).toFixed(1)}
        </p>
      </div>
    </div>
  );
}