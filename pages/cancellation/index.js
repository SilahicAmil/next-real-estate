import ContactForm from "@/components/Contact/ContactForm";
import Header from "@/components/UI/Header";

const CancellationPage = () => {
  return (
    <>
      <h1 className="bg-red-500  text-6xl">WORK IN PROGRESS</h1>
      <div>
        <Header
          title="We're sorry to see you go!"
          subtext="Let us know what we can do better. :'("
        />
        {/* sends email to something like cancellation@realestate.com */}
        <ContactForm />
      </div>
    </>
  );
};

export default CancellationPage;
