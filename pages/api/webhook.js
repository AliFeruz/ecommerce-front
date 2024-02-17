import { mongooseConnect } from "@/lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK);
import { buffer } from "micro";

const endpointSecret = "whsec_944b4b4aff1bd227bf8b2b46514399155d265608aea1ac06438642edeafd1660";

export default async function handler(req,res){
    await mongooseConnect();
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
     } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

  
    switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      console.log(paymentIntentSucceeded);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
}

export const config = {
    api: {bodyParser: false}
}