import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/order";
import { Product } from "@/models/product";
const stripe = require('stripe')(process.env.STRIPE_SK);


export default async function handler(req, res) {

    if(req.method !== 'POST') {
        res.json('Should be a POST request');
        return;
    }

    const {name, 
           email, 
           city, 
           cityCode, 
           country, 
           address,
           cartProducts} = req.body;

    await mongooseConnect();

    const productIds = cartProducts;
    const uniqueIds = [...new Set(productIds)];
    const productInfos = await Product.find({_id: uniqueIds});

    let line_items = [];
    for (const _id of uniqueIds){
        const info = productInfos.find(p => p._id.toString() === _id);
        const quantity = productIds.filter(id => id === _id)?.length || 0;
        if (quantity > 0 && info) {
            line_items.push({
                quantity,
                price_data: {
                    currency: 'USD',
                    product_data: {name: info.title},
                    unit_amount: quantity * info.price * 100,
                }, 
            })
        }  
    }

    const orderDoc = await Order.create({
        line_items,
        name,
        email,
        city,
        country,
        cityCode,
        address,
        paid: false
    })

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.PUBLIC_URL + '/cart?success=1',
        cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
        metadata: {orderId: orderDoc._id.toString(), test: 'ok'}
    })
    res.status(200).json({
        url:session.url,
    });
  }

  