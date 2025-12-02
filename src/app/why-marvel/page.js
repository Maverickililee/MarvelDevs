import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhyMarvel() {
    return (
        <main className="min-h-screen flex flex-col bg-[#0B0C10] text-white">
            <Navbar />
            <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-24">
                <h1 className="text-5xl font-bold mb-8">Why Marvel?</h1>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-xl text-gray-400 leading-relaxed mb-6">
                            Marvel is the all-in-one platform that powers design and development for modern teams. From wireframing to prototyping, handoff to coding, we've got you covered.
                        </p>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Rapid Prototyping
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Developer Handoff
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                User Testing
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Integrations
                            </li>
                        </ul>
                    </div>
                    <div className="bg-[#1C1D21] rounded-2xl p-8 border border-gray-800 flex items-center justify-center">
                        <span className="text-gray-500 text-lg">Illustration Placeholder</span>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
