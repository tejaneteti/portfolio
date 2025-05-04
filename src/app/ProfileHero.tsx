'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';
import { social_urls } from './constants';

const ProfileHero = () => {
    return (
        <section className="w-full !mt-14 md:!mt-0 md:min-h-screen md:max-w-5xl !mx-auto flex flex-col-reverse md:flex-row items-center justify-between !px-6 md:px-20 !py-10 !gap-10 bg-white
        ">
            {/* Left Side */}
            <div className="flex-1 flex flex-col  md:flex-row !items-center md:items-start gap-6 text-center md:text-left">
                {/* Social Icons */}
                <div className="flex md:flex-col gap-4 text-gray-800 text-2xl">
                    <a href={social_urls.instagram} aria-label="Instagram" className="hover:text-pink-500 transition"><Instagram /></a>
                    <a href={social_urls.twitter} aria-label="Twitter" className="hover:text-blue-400 transition"><Twitter /></a>
                    <a href={social_urls.github} aria-label="GitHub" className="hover:text-black transition"><Github /></a>
                    <a href={social_urls.linkedin} aria-label="LinkedIn" className="hover:text-blue-600 transition"><Linkedin /></a>
                </div>

                {/* Text Content */}
                <div className="!space-y-2">
                    <h1 className="text-4xl md:text-5xl font-bold">Teja Neteti</h1>
                    <div className="flex items-center justify-center md:justify-start gap-4 w-full">
                        <div className="flex-grow border-t border-gray-500 hidden md:flex"></div>
                        <span className="text-lg font-semibold md:whitespace-nowrap">
                            👋 Lead System Engineer | Researcher | Autonomous UAV Developer
                        </span>

                    </div>

                    <p className="text-gray-600 text-justify">
                        I'm Teja, a passionate UAV Automation Engineer with hands-on experience in drone development,
                        swarm technology, and mission planning. I specialize in integrating hardware and software systems
                        for autonomous UAV operations using platforms like Pixhawk, MAVSDK,
                        and Raspberry Pi. With a strong foundation in Python, Flask, and drone
                        communication protocols, I aim to build innovative aerial solutions for real-world
                        applications. My work includes contributions to defense projects and smart automation systems.
                    </p>

                    <button className="bg-black hover:cursor-pointer text-white !px-6 !py-3 rounded-2xl flex items-center !gap-2  hover:bg-gray-900 transition">
                        Say Hello <span>✈️</span>
                    </button>
                </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-r ">
                <div className="w-full h-full bg-white rounded-full p-1">
                    <Image
                        width={800}
                        height={800}
                        src="/images/profile/profile.jpg"
                        alt="Teja Neteti"
                        className="w-full h-full object-cover rounded-full   border-white profile_animation"
                    />
                </div>
            </div>
        </section >
    );
};

export default ProfileHero;
