import React, { useEffect } from 'react';

const Paypal = ({total}) => {
  useEffect(() => {
    // Check if PayPal buttons are already rendered
    const paypalButtonContainer = document.getElementById('paypal-button-container');
    if (!paypalButtonContainer.hasChildNodes()) {
      // Render PayPal buttons if they haven't been rendered yet
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '0.01', // Replace with the amount you want to charge
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
            localStorage.clear()
            window.location.reload()
          });
        },
        onError: (err) => {
          console.error('PayPal Checkout onError', err);
        },
      }).render(paypalButtonContainer); // Render buttons in the container
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <h1>PayPal Sandbox Integration</h1>
      <div id="paypal-button-container"></div>
    </div>
  );
};

export default Paypal;