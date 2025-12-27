import { Link } from "react-router-dom";
import "./Index.css";

const PaymentFailure = () => {
    return (
        <div className="payment-failure-container">
            <div className="payment-card">
                <div className="icon">❌</div>

                <h1>Payment Failed</h1>
                <p>
                    Unfortunately, your payment could not be completed.
                    <br />
                    Please try again or choose a different payment method.
                </p>

                <div className="actions">
                    <Link to="/checkout" className="btn- retry">
                        Retry Payment
                    </Link>
                    <Link to="/" className="btn- home">
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailure;
