import React from 'react'
import { Productspecsification } from '../../Constants/Index'
import './ProductSpec.scss'

export default function ProductSpec() {
  return (
    <div className="product-specs-table">
      <table>
        <tbody>
          {
            Productspecsification.map(({label, value}) => {
                return (
                    <tr >
                    <td className="spec-label">{label}</td>
                    <td className="spec-value">{value}</td>
                  </tr>
                )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
