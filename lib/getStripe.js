import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = async () => {
  if(!stripePromise) {
    // stripePromise = loadStripe('pk_test_51LNAn3SIQA4puWicroTm2ETyVGDB04q08qTx8S05HXNjo8dMG5m6uaUqMeUYCRb9o3YguABndJ3GIQbCnNPfpJLZ00gUIO26Hk');
    stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

  }

  return stripePromise;
}

export default getStripe;

// problem of public key as empty string while sending to the cart.jsx
