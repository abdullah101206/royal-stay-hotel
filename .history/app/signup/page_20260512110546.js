"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Crown, Eye, EyeOff } from "lucide-react";

export default function SignupPage() {

    const router = useRouter();

    const [agree, setAgree] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        setLoading(true);

        setTimeout(() => {

            setLoading(false);

            alert("Account Created Successfully!");

            router.push("/");

        }, 2000);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden px-4 py-10">

            {/* Background Blur */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#d4af37]/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#d4af37]/10 rounded-full blur-3xl"></div>

            {/* Signup Card */}
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
                        Create your luxury account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-[#1f2937] mb-2"
                        >
                            Full Name
                        </label>

                        <input
                            id="fullName"
                            type="text"
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all duration-300"
                        />
                    </div>

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

                    {/* Phone */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-[#1f2937] mb-2"
                        >
                            Phone Number (Optional)
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            placeholder="+92 300 1234567"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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

                        <p className="text-xs text-gray-500 mt-2">
                            Use at least 8 characters with a strong password.
                        </p>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-[#1f2937] mb-2"
                        >
                            Confirm Password
                        </label>

                        <div className="relative">

                            <input
                                id="confirmPassword"
                                type={showConfirm ? "text" : "password"}
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl outline-none focus:ring-2 focus:ring-[#d4af37]/30 focus:border-[#d4af37] transition-all duration-300 pr-12"
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500 hover:text-[#d4af37] transition"
                            >
                                {showConfirm ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <label className="flex items-start gap-3 cursor-pointer">

                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={() => setAgree(!agree)}
                            className="mt-1 accent-[#d4af37]"
                        />

                        <p className="text-sm text-gray-500 leading-relaxed">
                            I agree to the{" "}

                            <span className="text-[#d4af37] font-medium hover:text-yellow-600 transition">
                                Terms & Conditions
                            </span>
                        </p>
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!agree || loading}
                        className="w-full bg-[#d4af37] text-[#0f172a] font-semibold py-3 rounded-xl shadow-lg hover:bg-[#c59b24] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 py-2">

                        <div className="flex-1 h-px bg-gray-200"></div>

                        <span className="text-xs text-gray-400">
                            OR
                        </span>

                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    {/* Login Redirect */}
                    <p className="text-center text-sm text-gray-500 pt-2">

                        Already have an account?{" "}

                        <Link
                            href="/login"
                            className="text-[#d4af37] font-semibold hover:text-yellow-600 transition"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}