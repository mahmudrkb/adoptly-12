import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ModalCam = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [totalPrice, setTotalPrice] = useState("");
  const price = totalPrice;

  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: detailsCam = [], refetch } = useQuery({
    queryKey: ["detailsCam"],

    queryFn: async () => {
      const res = await axiosPublic.get(`/donation-cam/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          console.log(res.data.clientSecret, "this is secret useEffect");
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price, axiosSecure]);

  const handlePayments = async (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    setTotalPrice(price);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error..", error);
      setError(error.message);
    } else {
      console.log(paymentMethod, "this is payments method");
      setError(" ");
    }
    // confirm payments method

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "Unknown email",
          },
        },
      });
    if (confirmError) {
      // console.log("confirm error");
    } else {
      // console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // now save the payments in the data base
        const payment = {
          email: user.email,
          name: user.displayName,
          price: price,
          date: new Date(),
          // utc use moment js
          donationId: detailsCam._id,
          transactionId: paymentIntent.id,
          petImage: detailsCam.image,
          petName: detailsCam.name,
        };
        const res = await axiosSecure.post("/payments", payment);
        //  console.log("payments saved",res)
        console.log(res.data.insertedId);
        refetch();
        if (res.data?.insertedId) {
          Swal.fire({
            title: "Payment Success!",
            icon: "success",
            draggable: true,
          });
        }
      }
    }

    handleOpen();
  };
  console.log(price, "this is  total price ");

  return (
    <div className="">
      <Button
        onClick={handleOpen}
        className="flex bg-teal-300 hover:bg-orange-50 hover:text-gray-700 items-center gap-2"
      >
        Donate Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent  shadow-none"
      >
        <Card className="mx-auto dark:bg-blue-gray-700  w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography className="dark:text-white" variant="h4" color="blue-gray">
              Payment
            </Typography>
            <Typography
              className=" font-normal dark:text-gray-300"
              variant="paragraph"
              color="gray"
            >
              Enter your Name and Email to Payment.
            </Typography>
          </CardBody>

          <form onSubmit={handlePayments}>
            <CardBody className="flex flex-col  gap-4">
              <Input className="dark:text-white"
                onChange={(e) => {
                  setTotalPrice(e.target.value);
                }}
                type="number"
                name="price"
                label="Price"
                size="lg"
              />

              <CardElement
              className="dark:text-white"
                options={{
                  style: {
                    base: {
                      fontSize: "16px",

                      color: "#aab7c4",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <p className="text-red-600">{error}</p>
            </CardBody>

            <CardFooter className="pt-0 text-center">
              <Button
                disabled={!stripe || !clientSecret}
                type="submit"
                className=" bg-teal-300 hover:bg-orange-50 hover:text-gray-700 items-center gap-2"
                fullWidth
              >
                Pay
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </div>
  );
};

export default ModalCam;
