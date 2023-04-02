import LandingTestimonialCard from "./LandingTestimonialCard";
import { TESTIMONIAL_DATA } from "@/data/testimonial";

const LandingTestimonials = ({}) => {
  return (
    <>
      <section className="relative pt-24 pb-32 bg-white overflow-hidden shadow-inner">
        <div className="relative z-10 container px-4 mx-auto">
          <h2 className="mb-16 text-6xl font-bold font-heading text-center tracking-px-n leading-tight">
            Don&apos;t just take our word for it
          </h2>
          <div className="flex flex-wrap -m-3">
            {TESTIMONIAL_DATA.map((testimonial) => {
              return (
                <LandingTestimonialCard key={testimonial.id} {...testimonial} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingTestimonials;
