import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import g2Logo from '../assets/Frame 1000004479.png';

const Footer = () => {
    return (
        <footer className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 gap-8 pb-12">
                    {/* Navigation Links */}
                    <div className="border rounded-3xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-12">
                            {/* Columns */}
                            {[
                                { title: 'Product', links: ['Webinar+', 'Media+', 'Generate Interest ✨', 'Capture Intent 🎯', 'Prove Impact 🔥', 'Repurpose Content 🎨'] },
                                { title: 'Who are you', links: ['Demand Gen Marketer', 'Content Marketer', 'Event Marketer', 'Field Marketer', 'Marketing Op', 'CMO'] },
                                { title: 'Resources', links: ['People who love us', 'People who hate us', 'Our Webinars', 'Our Thoughts', 'Help!'] },
                                { title: 'About Us', links: ['Mission + Values', 'The Head Honchos', 'The Gossip', 'Our Contact Deets', 'Join the team!'] }
                            ].map((section, index) => (
                                <div key={index} className="text-center sm:text-left">
                                    <h3 className="text-gray-900 font-medium mb-4">{section.title}</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        {section.links.map((link, i) => (
                                            <li key={i} className="hover:text-gray-900 cursor-pointer">{link}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact & Social - Stack on Small Screens */}
                    <div className="flex flex-col gap-4">
                        {/* Contact Us */}
                        <div className="border rounded-2xl p-6">
                            <h3 className="text-gray-900 font-medium mb-4 text-center sm:text-left">Contact us</h3>
                            <p className="text-gray-600 text-sm mb-4 text-center sm:text-left">
                                See what Webinar+ can do for your business
                            </p>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200" 
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 rounded-full p-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Reviews */}
                        <div className="border rounded-2xl p-4 flex flex-col items-center">
                            <span className="text-sm text-center mb-2">Read our reviews on G2.com</span>
                            <img src={g2Logo} alt="G2 Logo" className="h-12 object-center object-fill" />
                        </div>

                        {/* Social Icons - Centered */}
                        <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
                            {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
                                <div key={i} className="border rounded-2xl flex items-center justify-center p-3">
                                    <a href="#" className="text-gray-600 hover:text-gray-900">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="py-6 px-4 flex flex-col gap-4 text-center border rounded-2xl">
                    <p className="text-sm text-gray-600">© {new Date().getFullYear()} Hubilo. All rights reserved</p>
                    <div className="flex flex-col sm:flex-row sm:justify-center gap-4 text-sm text-gray-600">
                        {['Terms of Use', 'Privacy Policy', 'Security and Compliance', 'Cookie Policy'].map((text, i) => (
                            <a key={i} href="#" className="hover:text-gray-900">{text}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
