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
import Link from "next/link";
import React from "react";

async function News() {
  const data = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/News?key=91115be0001446ee9e2bb104dd7f2da9`
  );
  const res = await data.json();
  return (
    <div>
      <h1 className="text-3xl mb-5">Whats new in the NBA?</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {res.map((story) => (
          <div className="w-full border p-3 rounded bg-slate-100">
            <h2 className="text-lg font-bold mb-3">{story.Title}</h2>
            <p className="text-sm">{story.Content}</p>
            <Link href={story.Url}>See full story here...</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
