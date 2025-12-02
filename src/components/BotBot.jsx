import Image from 'next/image';
import Link from 'next/link';

export default function BotBot() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
                <Image
                    src="/botbot.png"
                    alt="BotBot Slack Integration"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-2xl"
                />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    BotBot - Slack Bot for creating and managing prototypes
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Check out our API example BotBot, a bot for creating, viewing and managing prototypes by simply using Slash Commands in Slack. Grab the code and make your own bot!
                </p>
                <div className="flex items-center gap-4 mt-2">
                    <Link
                        href="#"
                        className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors"
                    >
                        View on Github
                    </Link>
                    <Link
                        href="#"
                        className="bg-[#1C1D21] text-white px-8 py-3.5 rounded-full font-bold border border-gray-800 hover:bg-gray-800 transition-colors"
                    >
                        Try the demo
                    </Link>
                </div>
            </div>
        </section>
    );
}
