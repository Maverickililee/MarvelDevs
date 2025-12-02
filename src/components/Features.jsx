import { Hash, FileCode, Gauge } from 'lucide-react';

const features = [
    {
        icon: Hash,
        title: "Dedicated API Team",
        description: "Our team are available to answer questions via our Slack Developer Community and Email."
    },
    {
        icon: FileCode,
        title: "Our API uses GraphQL",
        description: "Giving you the flexibility to select all the data you need with a single request."
    },
    {
        icon: Gauge,
        title: "Supercharge your workflow",
        description: "Automate workflows, extract designs and analyse data to take Marvel to the next level."
    }
];

export default function Features() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto w-full">
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Experience the freedom to build features, right away.
                </h2>
                <p className="text-gray-400 text-lg">
                    You can now harness components of our platform and build powerful integrations for our 2 million users - or simply just for your team.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-center">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                        <div className="mb-4 text-white">
                            {/* Placeholder for custom illustration, using Lucide icon for now */}
                            <feature.icon className="w-12 h-12 text-white opacity-80" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
