const ContactForm = ({}) => {
  return (
    <>
      <div className="">
        <form>
          <div>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" placeholder="Jim Bob" id="full-name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="jimbob@realestate.com" id="email" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              placeholder="Type your message here..."
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
