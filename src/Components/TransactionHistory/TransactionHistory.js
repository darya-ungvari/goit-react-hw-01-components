import s from "./transactions.module.css";
// import PropTypes from 'prop-types';


const TransactionHistory = ({ transactions }) => (
    <table className={s.transactionHistory}>
        <thead>
            <tr>
            <th className={s.titles}>Type</th>
            <th className={s.titles}>Amount</th>
            <th className={s.titles}>Currency</th>
            </tr>
        </thead>
        <tbody>
        <tr>
        <td className={s.invoiceTd}>Invoice</td>
        <td className={s.invoiceTd}>125</td>
        <td className={s.invoiceTd}>USD</td>
        </tr>
            {transactions.map(transaction => (
                <tr>
                <td className={s.td}>Withdrawal</td>
                <td className={s.td}>{transaction.amount}</td>
                <td className={s.td}>{transaction.currency}</td>
                </tr>
            ))}

    </tbody>
    </table>
)

export default TransactionHistory;