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
import Image from "next/image";

async function page({ params }) {
  console.log(params);
  const data = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/Player/${params.player}?key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();
  console.log(res);
  return (
    <div className="flex">
      <Image src={res.PhotoUrl} width={100} height={100} />
      <p>
        {res.FirstName} {res.LastName}
      </p>
      <p>
        Age: {new Date().getFullYear() - new Date(res.BirthDate).getFullYear()}
      </p>
      <p>Height: {(res.Height / 12).toFixed(2)}ft</p>
      <p>Salary: ${(res.Salary / 1000000).toFixed(2)} million USD</p>
    </div>
  );
}

export default page;
