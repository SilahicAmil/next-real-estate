import Image from "next/image";
import LandingTeamCard from "./LandingTeamCard";

const LandingTeam = ({}) => {
  return (
    <>
      <section>
        <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 ">
          <h1 className="text-6xl pb-8">Our Team</h1>
          <div className="sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {/*  */}
            <LandingTeamCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTeam;
