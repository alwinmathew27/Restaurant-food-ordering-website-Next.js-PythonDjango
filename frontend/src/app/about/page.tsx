// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <div>
//         <h1>this is a about page for</h1>
//       </div>
//     </div>
//   )
// }

// export default page

// app/about/page.tsx
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google"
import Link from "next/link"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
})
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
})
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export default function AboutPage() {
  return (
    <div
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} font-[family-name:var(--font-body)] bg-[#F6F1E7] text-[#201B17]`}
    >
      <style>{`
        @keyframes flicker {
          0%, 100% { stroke-dashoffset: 0; opacity: 1; }
          45% { stroke-dashoffset: 6; opacity: 0.85; }
          70% { stroke-dashoffset: -4; opacity: 0.95; }
        }
        .flame-underline path {
          stroke-dasharray: 240;
          animation: flicker 3.4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .flame-underline path { animation: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative bg-[#201B17] text-[#F6F1E7] px-6 sm:px-10 pt-28 pb-24 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] uppercase text-[#D6572A] mb-6">
            Our Story
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl leading-[1.1] font-semibold">
            Cooked over fire,
            <br />
            <span className="relative inline-block mt-1">
              served like family taught us.
              <svg
                className="flame-underline absolute left-0 -bottom-3 w-full"
                height="14"
                viewBox="0 0 320 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8C40 2 70 12 110 6C150 0 180 12 220 5C250 0 280 10 318 4"
                  stroke="#D6572A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-8 text-base sm:text-lg text-[#F6F1E7]/80 max-w-xl mx-auto leading-relaxed">
            Foglia opened in 2014 with one wood oven, a handful of recipes
            carried through three generations, and a promise never to rush a
            meal.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/order"
              className="bg-[#D6572A] text-[#F6F1E7] px-7 py-3 rounded-sm font-medium hover:bg-[#c04a20] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6572A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#201B17]"
            >
              Order Online
            </Link>
            <Link
              href="/menu"
              className="border border-[#F6F1E7]/40 text-[#F6F1E7] px-7 py-3 rounded-sm font-medium hover:border-[#F6F1E7] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F6F1E7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#201B17]"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 sm:px-10 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold mb-6">
              It started with a single flame
            </h2>
            <p className="text-[#201B17]/80 leading-relaxed mb-4">
              Chef Elena Rossi built her first wood oven by hand in a rented
              courtyard, using bricks salvaged from a demolition site three
              streets over. She had no investors, no menu printed yet &mdash;
              just a belief that fire brings out flavor no burner ever could.
            </p>
            <p className="text-[#201B17]/80 leading-relaxed">
              Twelve years later, the oven is bigger, but the kitchen still
              runs on the same idea: char where it belongs, patience where it
              matters, and a table that always has room for one more.
            </p>
          </div>
          <div className="relative aspect-square rounded-sm bg-[#201B17] overflow-hidden">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              aria-hidden="true"
            >
              <rect width="400" height="400" fill="#201B17" />
              {Array.from({ length: 10 }).map((_, i) => (
                <line
                  key={i}
                  x1={0}
                  y1={i * 40 + 20}
                  x2={400}
                  y2={i * 40 + 20}
                  stroke="#5C6B4F"
                  strokeOpacity="0.15"
                  strokeWidth="1"
                />
              ))}
              <path
                d="M200 300C170 260 160 220 180 190C170 210 190 150 220 130C205 165 240 170 235 210C255 190 250 230 235 255C260 240 250 285 200 300Z"
                fill="#D6572A"
              />
              <path
                d="M200 300C185 275 182 250 195 232C188 245 202 210 220 198C210 218 232 222 228 245C240 233 236 258 226 272C242 262 236 288 200 300Z"
                fill="#B98B33"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 sm:px-10 py-24 bg-[#201B17] text-[#F6F1E7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold mb-14 text-center">
            What guides the kitchen
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Fire-fed flavor",
                body: "Everything that can go near the wood oven does. Smoke is a seasoning, not an accident.",
                icon: (
                  <path
                    d="M12 3c-2 3-1 4-3 6-2 2-2 5 0 7a5 5 0 007-7c1 1 1 3 0 4a3 3 0 01-2-6c1-2 0-3-2-4z"
                    stroke="#D6572A"
                    strokeWidth="1.5"
                    fill="none"
                  />
                ),
              },
              {
                title: "Grown nearby",
                body: "Produce comes from four farms within thirty miles. The menu changes when they tell us to, not the other way around.",
                icon: (
                  <path
                    d="M12 20V10M12 10C12 6 8 4 5 5c0 4 2 6 7 5zM12 10c0-4 4-6 7-5 0 4-2 6-7 5z"
                    stroke="#5C6B4F"
                    strokeWidth="1.5"
                    fill="none"
                  />
                ),
              },
              {
                title: "Long tables, longer nights",
                body: "No table turns before the last bite is finished. Hospitality here means nobody watches the clock but us.",
                icon: (
                  <path
                    d="M3 12h18M6 12V8h12v4M8 12v6M16 12v6"
                    stroke="#B98B33"
                    strokeWidth="1.5"
                    fill="none"
                  />
                ),
              },
            ].map((v) => (
              <div
                key={v.title}
                className="border border-[#F6F1E7]/15 rounded-sm p-7 hover:border-[#F6F1E7]/35 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 mb-5"
                  aria-hidden="true"
                >
                  {v.icon}
                </svg>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-[#F6F1E7]/70 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-6 sm:px-10 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-[family-name:var(--font-display)] italic text-2xl sm:text-3xl leading-snug text-[#201B17]">
            "A good meal doesn't need to impress you. It needs to arrive
            warm, and it needs someone waiting to share it with you."
          </p>
          <div className="mt-6 w-10 h-[2px] bg-[#D6572A] mx-auto" />
          <p className="mt-4 font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#201B17]/60">
            Elena Rossi &mdash; Chef &amp; Founder
          </p>
        </div>
      </section>

      {/* HOURS / LOCATION STRIP */}
      <section className="px-6 sm:px-10 py-16 bg-[#201B17] text-[#F6F1E7]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#D6572A] mb-3">
              Hours
            </p>
            <ul className="text-sm space-y-1 text-[#F6F1E7]/80 font-[family-name:var(--font-mono)]">
              <li className="flex justify-between gap-6">
                <span>Tue&ndash;Thu</span>
                <span>5:00&ndash;10:00pm</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Fri&ndash;Sat</span>
                <span>5:00&ndash;11:00pm</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Sun</span>
                <span>4:00&ndash;9:00pm</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Mon</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#D6572A] mb-3">
              Location
            </p>
            <p className="text-sm text-[#F6F1E7]/80 leading-relaxed">
              214 Kiln Street
              <br />
              Riverside District
            </p>
          </div>
          <div className="sm:text-right">
            <Link
              href="/order"
              className="inline-block bg-[#D6572A] text-[#F6F1E7] px-6 py-3 rounded-sm font-medium hover:bg-[#c04a20] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6572A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#201B17]"
            >
              Order Online →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}