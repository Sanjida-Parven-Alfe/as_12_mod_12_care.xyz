"use server";
import { dbConnect } from "@/lib/dbConnect";
import { sendEmail } from "@/lib/sendEmail";
import { createInvoiceEmail } from "@/lib/emailTemplate";

export const createBooking = async (bookingData) => {
  try {
    const db = await dbConnect("bookings");

    const newBooking = {
      ...bookingData,
      status: "pending",
      createdAt: new Date(),
    };

    const result = await db.insertOne(newBooking);

    if (result.insertedId) {
      
      try {

        const emailHtml = createInvoiceEmail(newBooking);


        await sendEmail({
          to: bookingData.userEmail, 
          subject: `Booking Confirmed: ${bookingData.serviceTitle} - Care.xyz`,
          html: emailHtml,
        });
        
        console.log("Invoice email sent successfully to:", bookingData.userEmail);
      } catch (emailError) {
  
        console.error("Failed to send email:", emailError);
      }

      return { success: true, message: "Booking placed successfully!" };
    } else {
      return { success: false, message: "Failed to place booking" };
    }
  } catch (error) {
    console.error("Booking Error:", error);
    return { success: false, message: "Something went wrong!" };
  }
};