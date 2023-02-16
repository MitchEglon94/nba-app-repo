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
import Link from "next/link";

async function Conf({ c }) {
  const data = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/Standings/2023?key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();

  const conf = res
    .filter((team) => team.Conference === c)
    .sort((a, b) => a.ConferenceRank - b.ConferenceRank);
  console.log(conf);
  return (
    <div className="mb-5">
      <h2 className="text-2xl mb-5 text-start">{c} Conference</h2>
      <table className="w-full">
        <thead>
          <tr className="flex justify-between border-b py-2">
            <th>Team</th>
            <th>
              <div className="flex gap-7">
                <p>W</p>
                <p>L</p>
                <p>%</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {conf.map((team) => (
            <tr className="flex justify-between border-b py-2">
              <td>
                <Link href={`/${team.TeamID}`}>
                  {" "}
                  {team.City} {team.Name}
                </Link>
              </td>

              <td>
                <div className="flex gap-4 ">
                  <p>{team.Wins}</p>
                  <p>{team.Losses}</p>
                  <p>{(team.Percentage * 100).toFixed(1)}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Conf;
