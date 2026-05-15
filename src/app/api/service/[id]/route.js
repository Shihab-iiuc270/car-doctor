import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { revalidatePath } from "next/cache"; // Add this import

export const DELETE = async (req, { params }) => {
    try {
        const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
        const p = await params;
        const query = { _id: new ObjectId(p.id) };
        const session = await getServerSession(authOptions);
        
        // BUG FIX 1: Compare email with currentBooking.email, not currentBooking object
        const currentBooking = await bookingCollection.findOne(query);
        
        // Check if booking exists
        if (!currentBooking) {
            return NextResponse.json(
                { success: false, message: "Booking not found" },
                { status: 404 }
            );
        }
        
        // BUG FIX 2: Compare with the correct field (email or user_email)
        const isOwnerOk = session?.user?.email === currentBooking.email || 
                          session?.user?.email === currentBooking.user_email;
        
        if (isOwnerOk) {
            const deleteResponse = await bookingCollection.deleteOne(query);
            
            // BUG FIX 3: Correct spelling of revalidatePath
            revalidatePath("/my-bookings");
            
            return NextResponse.json({
                success: true,
                message: "Booking deleted successfully",
                data: deleteResponse
            });
        } else {
            return NextResponse.json(
                { success: false, message: "Forbidden action - you don't own this booking" },
                { status: 401 }
            );
        }
        
    } catch (error) {
        console.error("DELETE error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}

export const GET = async (req, { params }) => {
    try {
        const p = await params;
        const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
        const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
        
        if (!data) {
            return NextResponse.json(
                { success: false, message: "Service not found" },
                { status: 404 }
            );
        }
        
        return NextResponse.json(data);
        
    } catch (error) {
        console.error("GET error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}