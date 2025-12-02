import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <main className="min-h-screen flex flex-col bg-[#0B0C10] text-white">
            <Navbar />
            <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-bold mb-6">Simple, transparent pricing</h1>
                    <p className="text-xl text-gray-400">
                        Start for free, upgrade when you need to.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Free",
                            price: "$0",
                            desc: "For individuals just getting started.",
                            features: ["1 User", "1 Project", "Basic Prototyping"]
                        },
                        {
                            name: "Pro",
                            price: "$12",
                            desc: "For professional designers and developers.",
                            features: ["Unlimited Projects", "Download Prototypes", "Remove Branding", "Password Protection"],
                            highlight: true
                        },
                        {
                            name: "Team",
                            price: "$42",
                            desc: "For growing teams collaborating on projects.",
                            features: ["3 Users included", "Team Library", "User Roles", "Priority Support"]
                        }
                    ].map((plan, i) => (
                        <div
                            key={i}
                            className={`p-8 rounded-xl border flex flex-col ${plan.highlight
                                    ? "bg-[#1C1D21] border-blue-500 relative"
                                    : "bg-[#0B0C10] border-gray-800"
                                }`}
                        >
                            {plan.highlight && (
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    MOST POPULAR
                                </span>
                            )}
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                            <p className="text-gray-400 mb-8 text-sm">{plan.desc}</p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm">
                                        <Check className="w-4 h-4 text-blue-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-bold transition-colors ${plan.highlight
                                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                                    : "bg-white text-black hover:bg-gray-100"
                                }`}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
