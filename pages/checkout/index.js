import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

// put this all into wherever I end up putting the STRIPE api stuff

// call this on the outside to make sure it doesnt re-render
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  useEffect(() => {
    // check to see if this is a redirect back from checkout - (not sure if I need this)
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <form action="/api/checkout-session" method="POST">
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
    </form>
  );
};

export default CheckoutPage;
