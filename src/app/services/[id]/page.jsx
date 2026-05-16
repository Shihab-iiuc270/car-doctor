import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaCalendarAlt, FaClock, FaUser, FaTags, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default async function ServiceDetailsPage({params}) {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
    const data = await res.json();
    
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Banner Section */}
            <section className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl">
                <figure className="relative">
                    <Image
                        src={"/assets/images/checkout/checkout.png"}
                        width={1137}
                        height={300}
                        alt={"banner"}
                        className="w-full object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
                        <div className="w-full h-full flex items-center px-8 md:px-16">
                            <div className="space-y-3">
                                <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
                                    {data.title}
                                </h1>
                                <div className="flex items-center gap-4 text-white/90">
                                    <span className="flex items-center gap-2">
                                        <FaTags className="text-orange-500" />
                                        Best Service
                                    </span>
                                    {/* <span className="flex items-center gap-2">
                                        <FaClock className="text-orange-500" />
                                        Limited Offer
                                    </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </figure>
            </section>

            {/* Main Content Section */}
            <section className="grid grid-cols-12 gap-8">
                {/* Left Side - Main Content */}
                <div className="col-span-12 lg:col-span-8 space-y-6">
                    {/* Service Image */}
                    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Image
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            src={data?.img}
                            width={400}
                            height={200}
                            alt={data.title}
                            priority
                        />
                    </div>

                    {/* Service Title */}
                    <div className="border-l-4 border-orange-500 pl-4">
                        <h1 className="font-bold text-3xl md:text-4xl text-white">
                            {data.title}
                        </h1>
                    </div>

                    {/* Service Description */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-white leading-relaxed text-justify">
                            {data?.description}
                        </p>
                    </div>

                    {/* Features Section (optional - you can remove if not needed) */}
                    {/* <div className="bg-gray-50 rounded-2xl p-6 mt-6">
                        <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                            <FaCheckCircle className="text-orange-500" />
                            Why Choose This Service?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                "Expert Technicians",
                                "Quality Parts",
                                "Warranty Included",
                                "24/7 Support"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>

                {/* Right Side - Booking Card */}
                <div className="col-span-12 lg:col-span-4">
                    <div className="sticky top-24 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                            <h3 className="text-xl font-bold mb-2">Book This Service</h3>
                            {/* <p className="text-orange-100 text-sm">Limited time offer available</p> */}
                        </div>

                        {/* Card Content */}
                        <div className="p-6 space-y-6">
                            {/* Price Section */}
                            <div className="text-center border-b border-gray-100 pb-4">
                                <p className="text-gray-500 text-sm mb-2">Starting from</p>
                                <p className="text-4xl font-bold text-orange-500">
                                    $ {data?.price}
                                </p>
                                <p className="text-gray-400 text-xs mt-2">Inclusive of all taxes</p>
                            </div>

                            {/* Service Info */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaCalendarAlt className="text-orange-500" />
                                    <span className="text-sm">Flexible Scheduling</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaClock className="text-orange-500" />
                                    <span className="text-sm">1-2 Hours Service Time</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaUser className="text-orange-500" />
                                    <span className="text-sm">Expert Technician Assigned</span>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <Link href={`/checkout/${data._id}`} className="block">
                                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                                    <span>Proceed to Checkout</span>
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            {/* Additional Info */}
                            <div className="text-center pt-4 border-t border-gray-100">
                                <p className="text-xs text-gray-400">
                                    ✅ Secure checkout | 🔒 100% satisfaction guaranteed
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    {/* <div className="mt-6 text-center">
                        <div className="flex justify-center gap-4 text-gray-400 text-xs">
                            <span>🏆 5+ Years Experience</span>
                            <span>⭐ 1000+ Happy Clients</span>
                            <span>🔧 Expert Service</span>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
}