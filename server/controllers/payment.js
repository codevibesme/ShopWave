import Stripe from "stripe"
import dotenv from "dotenv";
import Product from "../models/Product.js";
dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const payment = async (req, res) => {
    try{
        const { cartItems, country } = await req.body;
        const products = await Product.find({});
        let productsMap = new Map();
        const shipMap = new Map([
            [500, {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                        amount: 50000,
                        currency: 'inr',
                        },
                        display_name: 'Domestic Shipping',
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 3,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 4,
                            },
                        },
                    },
                }
            ],
            [3400, {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                        amount: 340000,
                        currency: 'inr',
                        },
                        display_name: 'International Shipping',
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 5,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 10,
                            },
                        },
                    },
                }
            ],
        ]);
    
        const shipping_options = [
            country === "India" ? shipMap.get(500) : shipMap.get(3400)
        ]

        products.map((item) => productsMap.set((item._id).toString(), item));

        const line_items = await cartItems.map((item) => {
            const product = productsMap.get(item.id);
            return {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: product.name,
                    },
                    unit_amount: product.price*100
                },
                quantity: item.quantity,
            }
        });
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            shipping_options,
            line_items,
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        });
        res.status(200).json({url: session.url});
    } catch(err){
        console.log(err.message);
        res.status(400).json({error: err.message});
    }
}
