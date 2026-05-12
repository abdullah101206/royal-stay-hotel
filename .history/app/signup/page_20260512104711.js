"use client";

import { useState } from "react";

export default function SignupPage() {
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">
      <div className="absolute w-[520px] h-[520px] bg-[#d4af37]/10 blur-3xl rounded-full top-10 right-10"></div>
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-[#0f172a] tracking-tight">
            Royal <span className="text-[#d4af37]">Stay</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create your account
          </p>
          <p className="text-xs text-[#6b7280] mt-1">
            Join us for a luxury experience
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-[#1f2937]">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-3 border border-[#e5e7eb] rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition duration-300"
            />
          </div>
          <div>
            <label className="text-sm text-[#1f2937]">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-3 border border-[#e5e7eb] rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition duration-300"
            />
          </div>
          <div>
            <label className="text-sm text-[#1f2937]">Phone Number (optional)</label>
            <input
              type="tel"
              placeholder="+92 300 1234567"
              className="w-full mt-1 px-4 py-3 border border-[#e5e7eb] rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition duration-300"
            />
          </div>
          <div>
            <label className="text-sm text-[#1f2937]">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-xs text-[#6b7280] hover:text-[#d4af37]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <p className="text-xs text-[#6b7280] mt-1">
              Use 8+ characters with a strong combination
            </p>
          </div>
          <div>
            <label className="text-sm text-[#1f2937]">Confirm Password</label>
            <div className="relative mt-1">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] transition duration-300"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-3 text-xs text-[#6b7280] hover:text-[#d4af37]"            >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mt-1 accent-[#d4af37]"
            />
            <p className="text-xs text-[#6b7280]">
              I agree to{" "}
              <span className="text-[#d4af37] hover:text-yellow-600 cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#d4af37] text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 hover:scale-[1.02] transition duration-300 shadow-md mt-2"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-3">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#d4af37] hover:text-yellow-600 font-medium transition"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}