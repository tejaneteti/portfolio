import React from 'react';
import { Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { social_urls } from './constants';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10! px-6">

            {/* Social Media Icons */}
            <div className="container p-5 !mx-auto   border-b border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
                <p className="text-gray-400">&copy; 2025 Teja Neteti. All rights reserved.</p>
                <div className="flex space-x-4 gap-4 mt-4 md:mt-0">

                    <a href={social_urls.twitter} aria-label="Twitter">
                        <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                    <a href={social_urls.instagram} aria-label="Instagram">
                        <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                    <a href={social_urls.linkedin} aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                    <a href={social_urls.mail} aria-label="Email">
                        <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
