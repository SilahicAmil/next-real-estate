const stripe = require("stripe")(process.env.NEXT_PUBLIC_SECRET_KEY);

const helper = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }

  const { amount, price, name, description } = req.body;

  const transformedItem = {
    price_data: {
      currency: "usd",
      product_data: {
        name: name,
        description: description,
      },
      unit_amount: price * 100,
    },
    quantity: amount,
  };

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [transformedItem],
      mode: "payment",
      success_url: `${req.headers.origin}/?status=success`,
      cancel_url: `${req.headers.origin}/`,
    });
    res.status(201).json({ url: session.url });
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
};

export default helper;
