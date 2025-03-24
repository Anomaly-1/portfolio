import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="text-center py-12 bg-black-950 mt-12">
                <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
                <p className="text-gray-400 text-xl mb-8">
                Have a project in mind? Let's make it happen!
                </p>
                <a
                href="/contact"
                className="text-xl px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                >
                Get in Touch
                </a>
            </div>

            <p className="m-4">© 2025 Arjun Hariharan. All rights reserved.</p>
        </footer>
    );
};

export default Footer;