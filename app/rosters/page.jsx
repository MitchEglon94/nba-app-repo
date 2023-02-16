// Copyright 2023 mitchelleglon
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import React from "react";
import TeamList from "./TeamList";

async function page() {
  const data = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/teams?key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();
  console.log(res);
  return (
    <div className="p-2 text-center">
      <h2 className="text-3xl p-5 w-full">Team Rosters</h2>
      <div className=" flex flex-wrap">
        {res.map((team) => (
          <TeamList key={team.Key} teamInfo={team} />
        ))}
      </div>
    </div>
  );
}

export default page;
