"use client";

import Link from "next/link";
import { useState } from "react";
import { Crown, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            console.log({
                email,
                password,
                remember,
            });
        }, 2000);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden px-4">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-3xl"></div>

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10">

                {/* Logo */}
                <div className="flex flex-col items-center text-center mb-8">

                    <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-4">
                        <Crown className="w-8 h-8 text-[#d4af37]" />
                    </div>

                    <h1 className="text-3xl font-bold text-[#0f172a]">
                        Royal <span className="text-[#d4af37]">Stay</span>
                    </h1>

                    <p className="text-gray-500 text-sm mt-2">
                        Welcome back! Please login to continue.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#1f2937] mb-2"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all duration-300"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-[#1f2937] mb-2"
                        >
                            Password
                        </label>

                        <div className="relative">

                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all duration-300 pr-12"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500 hover:text-[#d4af37] transition"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">

                        <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                                className="accent-[#d4af37]"
                            />

                            Remember Me
                        </label>

                        <Link
                            href="/forgot-password"
                            className="text-[#d4af37] hover:text-yellow-600 font-medium transition"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#d4af37] text-[#0f172a] font-semibold py-3 rounded-xl shadow-lg hover:bg-[#c59b24] hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 py-2">
                        <div className="flex-1 h-px bg-gray-200"></div>

                        <span className="text-xs text-gray-400">
                            OR
                        </span>

                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>


                    {/* Signup */}
                    <p className="text-center text-sm text-gray-500 pt-2">
                        Don&apos;t have an account?{" "}

                        <Link
                            href="/signup"
                            className="text-[#d4af37] font-semibold hover:text-yellow-600 transition"
                        >
                            Create Account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}