import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { total = 0, carts = [] } = state || {}; // Default to prevent errors
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleApprove = (orderId) => {
    // Save payment and cart data to history
    const history = JSON.parse(localStorage.getItem("history"))|| [];
    const updatedHistory = [...history, { orderId, items: carts, total }];
    localStorage.setItem("history", JSON.stringify(updatedHistory));

    // Clear cart
    localStorage.removeItem("cart");

    setPaymentCompleted(true);
    navigate("/history");
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "AWDNXIOJlhhXL7JVh_CFqhPEycV-0R8tlMcKZ3GRX4kAIjYkeu" }}>
      <div className="container mt-4">
        <h1>Complete Your Payment</h1>
        <div>
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: (total + 10).toFixed(2), // Include shipping
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              handleApprove(details.id); // Pass the order ID
            });
          }}
          onError={(err) => {
            console.error("Payment Error:", err);
            alert("An error occurred during the payment process.");
          }}
        />
        {paymentCompleted && <h2>Payment Successful! Redirecting to history...</h2>}
      </div>
    </PayPalScriptProvider>
  );
};

export default Payment;