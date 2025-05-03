import React from 'react'
import { invoices } from '../../Constants/Index'
import './TableBasket.scss'

export default function TableBasket() {
  return (
    <table className="invoice-table">
      <caption>A list of your recent invoices.</caption>
      <thead>
        <tr>
          <th className="w-100">Invoice</th>
          <th>Status</th>
          <th>Method</th>
          <th className="text-right">Amount</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice.invoice}>
            <td className="font-medium">{invoice.invoice}</td>
            <td>{invoice.paymentStatus}</td>
            <td>{invoice.paymentMethod}</td>
            <td className="text-right">{invoice.totalAmount}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>Total</td>
          <td className="text-right">$2,500.00</td>
        </tr>
      </tfoot>
    </table>
  )
}
