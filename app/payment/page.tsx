'use client'

import { useEffect, useState } from 'react'
import QRCode from 'qrcode.react'

export default function PaymentPage() {
  const [paymentUrl, setPaymentUrl] = useState('')

  useEffect(() => {
    // In a real application, you would generate this URL dynamically
    // based on the user's selected plan and registration details
    setPaymentUrl('https://example.com/pay/12345')
  }, [])

  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-10">Complete Your Payment</h1>
      <p className="mb-6">Scan the QR code below to complete your payment:</p>
      <div className="flex justify-center">
        <QRCode value={paymentUrl} size={256} />
      </div>
      <p className="mt-6">
        After scanning, you will be redirected to complete the payment process.
      </p>
    </div>
  )
}

