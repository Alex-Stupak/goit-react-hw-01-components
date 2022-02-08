import PropTypes from "prop-types";
import TransactionString from "./TransactionsString";
import s from "./TransactionHistory.module.css";

function TransactionHistory({transactions}) {
    return (
        <table className={s.transaction_history}>
            <thead className={s.table_head}>
                <tr>
                <th className={s.table_title}>Type</th>
                <th className={s.table_title}>Amount</th>
                <th className={s.table_title}>Currency</th>
                </tr>
            </thead>
            <tbody>
              {transactions.map(({ id, type, amount, currency }) => (
                <TransactionString
                    key={id}
                    transaction={type}
                    amount={amount}
                    currency={currency}
                />  
                ))}  
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory;