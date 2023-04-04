import LandingTeamCard from "./LandingTeamCard";
import { OUR_TEAM } from "@/data/our-team";

const LandingTeam = ({}) => {
  return (
    <>
      <section className="shadow-inner" id="team">
        <div className="mx-auto px-4 py-16 md:px-6 lg:px-8 ">
          <h1 className="text-6xl pb-8">Our Team</h1>
          <div className="md:columns-2 md:gap-6 lg:columns-3 lg:gap-8">
            {OUR_TEAM.map((member) => {
              return <LandingTeamCard key={member.id} {...member} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTeam;
