"use client"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { social_urls } from '../constants';

function Contact() {

    const publicKey = process.env.PUBLIC_KEY!;
    const serviceID = process.env.SERVICE_ID!;
    const templateID = process.env.TEMPLATE_ID!;

    // service id  service_7ejvbbi
    // console.log(s  +" " + g + " " + t);
    const form = useRef<HTMLFormElement | null>(null);


    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                // console.log(result.text);
                alert("mail send");

            }, (error) => {
                // console.log(error.text);
                alert("error " + error.text)
            });
    };

    return (
        <section id="contact" className="bg-[#f9f9f9] !py-16">
            <div className="max-w-6xl container !mx-auto !px-6 md:!px-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 !mb-6">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 !gap-10">
                    {/* Contact Info */}
                    <div className="!space-y-6">
                        <div className="bg-white rounded-xl shadow-md !p-6 flex items-start !gap-4">
                            <i className="bx bx-envelope text-3xl text-indigo-500"></i>
                            <div>
                                <h4 className="font-semibold text-gray-800">Email</h4>
                                <p className="text-gray-600">netetiteja07@gmail.com</p>
                                <a
                                    href={social_urls.mail}
                                    className="text-indigo-600 hover:underline text-sm"
                                >
                                    Write me →
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md !p-6 flex items-start gap-4">
                            <i className="bx bxl-whatsapp text-3xl text-green-500"></i>
                            <div>
                                <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                                <p className="text-gray-600">+91 90149 82291</p>
                                <a
                                    href={social_urls.whatsapp}
                                    className="text-green-600 hover:underline text-sm"
                                >
                                    Write me →
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md !p-6 flex items-start gap-4">
                            <i className="bx bxl-linkedin-square text-3xl text-blue-600"></i>
                            <div>
                                <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                                <p className="text-gray-600">linkedin.com/in/teja-neteti-199273226</p>
                                <a
                                    href={social_urls.linkedin}
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    Write me →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={sendEmail} ref={form} className="bg-white rounded-xl shadow-md !p-4 !space-y-2">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Send a Message</h3>

                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-600">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                required
                                className="mt-1 w-full !px-4 !py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                required
                                className="mt-1 w-full !px-4 !py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="desc" className="block text-sm text-gray-600">Project Description</label>
                            <textarea
                                id="desc"
                                name="message"
                                rows={5}
                                required
                                className="mt-1 w-full !px-4 !py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full  bg-black hover:bg-gray-900  text-white px-4 hover:cursor-pointer !py-3 rounded-lg font-semibold  transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>


    )
}

export default Contact