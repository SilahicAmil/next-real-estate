const stripe = require("stripe")(process.env.NEXT_PUBLIC_SECRET_KEY);

const helper = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { amount, price, name, description } = req.body;
      const { items } = req.body;
      console.log(items);

      const transformedItem = {
        price_data: {
          currency: "usd",
          product_data: {
            name,
            description,
          },
          unit_amount: price * amount,
        },
        quantity: amount,
      };

      console.log(transformedItem);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [transformedItem],
        mode: "payment",
        success_url: `${req.headers.origin}/?status=success`,
        cancel_url: `${req.headers.origin}/?status=cancel`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");

    res.status(405).end("Method Not Allowed");
  }
};

export default helper;
