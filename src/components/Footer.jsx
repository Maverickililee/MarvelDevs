import Link from 'next/link';

const footerLinks = {
    Platform: ['Why Marvel', 'Enterprise', 'Pricing', 'Developer API', 'Explore'],
    Features: ['Design', 'Wireframing', 'Prototyping', 'Handoff', 'Collaboration', 'Integrations'],
    Support: ['Help Center', 'Terms of Service', 'Privacy', 'Security'],
    Company: ['Blog', 'About Us', 'Contact Us', 'Customer Stories', 'Style Guide', 'Careers'],
    Follow: ['Twitter', 'Dribbble', 'Facebook', 'Github', 'LinkedIn']
};

export default function Footer() {
    return (
        <footer className="py-20 px-6 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                <div className="col-span-2 md:col-span-1 lg:col-span-1">
                    <Link href="/" className="text-white font-bold text-2xl tracking-tighter">
                        Marvel
                    </Link>
                </div>

                {Object.entries(footerLinks).map(([category, links]) => (
                    <div key={category} className="flex flex-col gap-4">
                        <h4 className="text-white font-bold text-base">{category}</h4>
                        <div className="flex flex-col gap-2">
                            {links.map((link) => (
                                <Link
                                    key={link}
                                    href="#"
                                    className="text-gray-500 hover:text-white text-sm transition-colors"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </footer>
    );
}
