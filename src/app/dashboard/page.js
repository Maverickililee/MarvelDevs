"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div className="min-h-screen bg-[#0B0C10] flex items-center justify-center text-white">Loading...</div>;
    }

    if (!session) {
        return null;
    }

    return (
        <main className="min-h-screen flex flex-col bg-[#0B0C10] text-white">
            <Navbar />
            <div className="max-w-7xl mx-auto w-full px-6 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400">Welcome, {session.user.name || session.user.email}</span>
                        <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="bg-red-500/10 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500/20 transition-colors"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#1C1D21] p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold mb-2">My Projects</h3>
                        <p className="text-gray-400 mb-4">You have 0 active projects.</p>
                        <button className="w-full bg-[#007AFF] text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Create Project
                        </button>
                    </div>
                    <div className="bg-[#1C1D21] p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold mb-2">API Keys</h3>
                        <p className="text-gray-400 mb-4">Manage your API access keys.</p>
                        <button className="w-full bg-[#1C1D21] border border-gray-700 text-white font-bold py-2 rounded-lg hover:bg-gray-800 transition-colors">
                            View Keys
                        </button>
                    </div>
                    <div className="bg-[#1C1D21] p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold mb-2">Documentation</h3>
                        <p className="text-gray-400 mb-4">Learn how to integrate Marvel.</p>
                        <button className="w-full bg-[#1C1D21] border border-gray-700 text-white font-bold py-2 rounded-lg hover:bg-gray-800 transition-colors">
                            Read Docs
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
