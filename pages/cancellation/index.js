import ContactForm from "@/components/Contact/ContactForm";
import Header from "@/components/UI/Header";

const CancellationPage = () => {
  return (
    <>
      <h1 className="bg-red-500 h-32 text-8xl">WORK IN PROGRESS</h1>
      <div>
        <Header
          title="We're sorry to see you go!"
          subtext="Let us know what we can do better. :'("
        />

        <ContactForm />
      </div>
    </>
  );
};

export default CancellationPage;
