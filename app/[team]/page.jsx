import Image from "next/image";
import PlayerList from "./PlayerList";

async function getTeams() {
  const res = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/teams?key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const teams = await res.json();
  return teams;
}

async function TeamDetails({ params }) {
  console.log(params);
  const teams = await getTeams();
  const requiredTeam = teams.filter(
    (team) => team.TeamID === Number(params.team)
  )[0];
  console.log("REQUIRED TEAM", requiredTeam);

  return (
    <div className="text-center">
      <Image
        className="p-5 m-auto w-3/6"
        src={requiredTeam.WikipediaLogoUrl}
        width={1000}
        height={1000}
      />
      <h1 className="text-4xl">
        {requiredTeam.City} {requiredTeam.Name}
      </h1>
      <PlayerList
        fontColor={requiredTeam.SecondaryColor}
        bgColor={requiredTeam.PrimaryColor}
        teamKey={requiredTeam.Key}
      />
    </div>
  );
}

export default TeamDetails;
