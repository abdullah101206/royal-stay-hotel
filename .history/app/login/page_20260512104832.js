"use client";

import { useState } from "react";

export default function LoginPage() {
    const [remember, setRemember] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">
            <div className="absolute w-[500px] h-[500px] bg-[#d4af37]/10 blur-3xl rounded-full top-10 left-10"></div>
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#0f172a] tracking-tight">
                        Royal <span className="text-[#d4af37]">Stay</span>
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">Welcome back</p>
                </div>
                <form className="space-y-5">
                    <div>
                        <label className="text-sm text-[#1f2937]">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full mt-1 px-4 py-3 border border-[#e5e7eb] rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition duration-300"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-[#1f2937]">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full mt-1 px-4 py-3 border border-[#e5e7eb] rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition duration-300"
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-600">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                                className="accent-[#d4af37]"
                            />
                            Remember Me
                        </label>
                        <a
                            href="#"
                            className="text-[#d4af37] hover:text-yellow-600 transition"          >
                            Forgot Password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#d4af37] text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 hover:scale-[1.02] transition duration-300 shadow-md"
                    >
                        Login
                    </button>
                    <div className="flex items-center gap-3 my-4">
                        <div className="h-px flex-1 bg-gray-200"></div>
                        <span className="text-xs text-gray-400">OR</span>
                        <div className="h-px flex-1 bg-gray-200"></div>
                    </div>
                    <p className="text-center text-sm text-gray-500">
                        Don't have an account?{" "}
                        <a
                            href="#"
                            className="text-[#d4af37] hover:text-yellow-600 font-medium transition"
                        >
                            Create Account
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}