import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Enterprise() {
    return (
        <main className="min-h-screen flex flex-col bg-[#0B0C10] text-white">
            <Navbar />
            <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-bold mb-6">Marvel for Enterprise</h1>
                    <p className="text-xl text-gray-400">
                        Secure, scalable, and built for large teams. Get the control and support you need to deploy Marvel across your organization.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        { title: "SSO & Security", desc: "Enterprise-grade security with SAML SSO and advanced permissions." },
                        { title: "Dedicated Support", desc: "Priority support and a dedicated Customer Success Manager." },
                        { title: "Unlimited Everything", desc: "Unlimited projects, users, and storage for your entire team." }
                    ].map((feature, i) => (
                        <div key={i} className="bg-[#1C1D21] p-8 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#1C1D21] p-12 rounded-2xl border border-gray-800 text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-gray-400 mb-8">Contact our sales team for a custom demo and pricing.</p>
                    <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        Contact Sales
                    </button>
                </div>
            </div>
            <Footer />
        </main>
    );
}
