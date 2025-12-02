import Image from 'next/image';
import Link from 'next/link';

export default function Integrations() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Showcase your app in our integrations directory
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Building something special? We're always looking to work with partners who want to help the world bring their ideas to life.
                </p>
                <div className="flex items-center gap-4 mt-2">
                    <Link
                        href="#"
                        className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors"
                    >
                        Become a partner
                    </Link>
                    <Link
                        href="#"
                        className="bg-[#1C1D21] text-white px-8 py-3.5 rounded-full font-bold border border-gray-800 hover:bg-gray-800 transition-colors"
                    >
                        View Integrations
                    </Link>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <Image
                    src="/integrations.png"
                    alt="Integrations Directory"
                    width={600}
                    height={400}
                    className="w-full max-w-md h-auto object-contain"
                />
            </div>
        </section>
    );
}
