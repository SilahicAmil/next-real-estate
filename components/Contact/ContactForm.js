const ContactForm = ({}) => {
  return (
    <>
      <div className="w-full h-full mb-12">
        <form className="flex flex-col justify-center items-center gap-6">
          <div className="flex gap-12">
            <div className="flex flex-col">
              <label
                htmlFor="full-name"
                className="text-xl tracking-widest p-2"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jim Bob"
                id="full-name"
                className="bg-gray-200 p-4 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-xl tracking-widest p-2">
                Email
              </label>
              <input
                type="text"
                placeholder="jimbob@realestate.com"
                id="email"
                className="bg-gray-200 p-4 rounded-md"
              />
            </div>
          </div>

          <div className="flex-col flex">
            <label htmlFor="message" className="text-xl tracking-widest p-2">
              Message
            </label>
            <textarea
              id="message"
              cols="50"
              rows="5"
              placeholder="This form currently does nothing sorry..."
              className="bg-gray-200 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="p-4 bg-darkBlue text-white w-48 flex items-center justify-center rounded-md hover:duration-200 hover:rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
