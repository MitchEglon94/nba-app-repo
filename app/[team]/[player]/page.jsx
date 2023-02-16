import React from "react";
import Image from "next/image";

async function page({ params, searchParams }) {
  console.log(params);
  console.log(searchParams);
  const data = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/Player/${params.player}?key=${process.env.API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();
  console.log(res);
  return (
    <div className="p-2">
      <div
        className="flex-col text-center content-center justify-center  text-white p-2  m-auto rounded-md"
        style={{ backgroundColor: `#${searchParams.color}` }}
      >
        <h2 className="text-4xl p-4">
          {res.FirstName} {res.LastName} #{res.Jersey}
        </h2>

        <Image
          className=" rounded-full m-auto"
          src={res.PhotoUrl}
          width={150}
          height={150}
        />
        <div className="text-2xl">
          <p>
            Age:{" "}
            {new Date().getFullYear() - new Date(res.BirthDate).getFullYear()}
          </p>
          <p>Height: {(res.Height / 12).toFixed(2)}ft</p>
          <p>Weight: {res.Weight}lb</p>
          <p>Salary: ${(res.Salary / 1000000).toFixed(2)} million USD</p>
          <p>College: {res.College}</p>
        </div>
      </div>
    </div>
  );
}

export default page;
