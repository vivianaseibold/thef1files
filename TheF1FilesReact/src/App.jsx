import React from "react";
import TeamCard from "./components/TeamCard";
import { teams } from "./data/teams";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/teams.css";

export default function App() {
  return (
    <main className="flex-grow-1 py-5">
      <h1 className="mb-4 text-center">The F1 Teams</h1>
      <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            name={team.name}
            logo={team.logo}
            home={team.home}
            since={team.since}
            drivers={team.drivers}
            teamPrincipal={team.teamPrincipal}
            bannerImage={team.bannerImage}
            carImage={team.carImage}
            about={team.about}
            funFacts={team.funFacts}
            background={team.background}
          />
        ))}
      </section>
    </main>
  );
}