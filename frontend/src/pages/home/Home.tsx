import React from "react";
import GetTask from "../../api/getTask";

function Home() {
  return (
    <main className="container flex flex-col justify-center my-10 md:px-52 px-4 sm:px-2  text-slate-600">
      <h2 className="text-center font-extrabold text-4xl pb-20">
        TO-DO LIST IPII
      </h2>
      <div className="flex flex-col gap-5">
        <GetTask />
      </div>
    </main>
  );
}

export default Home;
