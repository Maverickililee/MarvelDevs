import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:py-24 max-w-7xl mx-auto w-full gap-12">
            <div className="flex flex-col gap-8 max-w-xl">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                    Let's build the future of design together
                </h1>
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                    Create amazing tools and integrations for nearly 2 million users or customise Marvel for your team.
                </p>
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors"
                    >
                        View the docs
                    </Link>
                    <Link
                        href="#"
                        className="bg-[#1C1D21] text-white px-8 py-3.5 rounded-full font-bold border border-gray-800 hover:bg-gray-800 transition-colors"
                    >
                        Join us on Slack
                    </Link>
                </div>
            </div>

            <div className="relative w-full max-w-lg lg:max-w-xl">
                <Image
                    src="/hero.png"
                    alt="Developers building the future"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                />
                {/* Decorative blue line element if needed, but image should cover it */}
            </div>
        </section>
    );
}
