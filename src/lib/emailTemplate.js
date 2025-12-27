export const createInvoiceEmail = (bookingData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
      <h2 style="color: #e11d48; text-align: center;">Booking Confirmed! ✅</h2>
      <p>Dear <strong>${bookingData.userName}</strong>,</p>
      <p>Thank you for choosing <strong>Care.xyz</strong>. Your booking request has been received.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #333;">Booking Details</h3>
        <p><strong>Service:</strong> ${bookingData.serviceTitle}</p>
        <p><strong>Date:</strong> ${bookingData.date}</p>
        <p><strong>Duration:</strong> ${bookingData.duration} Hours</p>
        <p><strong>Address:</strong> ${bookingData.address}, ${bookingData.district}</p>
      </div>

      <div style="text-align: right; margin-top: 20px;">
        <p style="font-size: 14px; color: #666;">Total Amount:</p>
        <h2 style="margin: 5px 0; color: #e11d48;">${bookingData.totalCost} BDT</h2>
      </div>

      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
      
      <p style="text-align: center; color: #888; font-size: 12px;">
        Need help? Contact us at support@care.xyz <br>
        © ${new Date().getFullYear()} Care.xyz. All rights reserved.
      </p>
    </div>
  `;
};