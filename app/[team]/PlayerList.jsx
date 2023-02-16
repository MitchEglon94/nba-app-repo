import Image from "next/image";
import Link from "next/link";

export default async function PlayerList({ fontColor, bgColor, teamKey }) {
  const data = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/Players/${teamKey}?key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );

  const res = await data.json();
  console.log(res);
  return (
    <div className="flex flex-col gap-5 p-5">
      Current roster
      {res.map((player) => (
        <div
          className="flex flex-col items-center text-center rounded  p-2.5"
          style={{ color: `#${fontColor}`, backgroundColor: `#${bgColor}` }}
        >
          <Link href={`${player.Team}/${player.PlayerID}?color=${bgColor}`}>
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
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
