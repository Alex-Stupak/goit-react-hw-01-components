import PropTypes from "prop-types";
import s from "./TransactionString.module.css";

function TransactionString({transaction, amount, currency}) {
    return (
        <tr className={s.tr_string}>
            <td className={s.td_string}>{transaction}</td>
            <td className={s.td_string}>{amount}</td>
            <td className={s.td_string}>{currency}</td>
        </tr>
    )
}

TransactionString.propTypes = {
    transaction: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionString;