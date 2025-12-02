"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Signup() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                router.push("/login");
            } else {
                const data = await res.json();
                setError(data.message || "Registration failed");
            }
        } catch (error) {
            setError("Something went wrong");
        }
    };

    return (
        <main className="min-h-screen flex flex-col bg-[#0B0C10] text-white">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-6">
                <div className="w-full max-w-md bg-[#1C1D21] p-8 rounded-xl border border-gray-800">
                    <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
                    {error && (
                        <div className="bg-red-500/10 text-red-500 p-3 rounded-lg mb-4 text-sm">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-[#0B0C10] border border-gray-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#007AFF] transition-colors"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#0B0C10] border border-gray-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#007AFF] transition-colors"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#0B0C10] border border-gray-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#007AFF] transition-colors"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#007AFF] text-white font-bold py-2.5 rounded-lg hover:bg-blue-600 transition-colors mt-2"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center mt-6 text-gray-400 text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="text-[#007AFF] hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
