import React from "react";
import { Link } from "react-router-dom";

function PricingTab(props) {
  return (
    <div className={`h-full ${props.popular ? "dark" : ""}`}>
      <div className=" relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow shadow-slate-950/5 dark:border-slate-900 dark:bg-slate-900">
        <div className="mb-5">
          <div className="mb-1 font-semibold text-slate-900 dark:text-slate-200">
            {props.planName}
          </div>
          <div className="mb-2 inline-flex items-baseline">
            <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
              AED
            </span> 
            <span className="text-4xl font-bold text-slate-900 dark:text-slate-200">
              {props.price}
            </span>
            <span className="font-medium text-slate-500">/hour</span>
          </div>
          <div className="mb-5 text-sm text-slate-500">
            {props.planDescription}
          </div>
          <Link to = "/bookstudio"
            className="inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
            
          >
            Book Studio
          </Link>
        </div>
        <div className="mb-3 font-medium text-slate-900 dark:text-slate-200">
          Includes:
        </div>
        <ul className="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        <div className="mt-3 font-medium text-slate-900 dark:text-slate-200">
          What you get after the session
        </div>
        <ul className="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
          {props.results.map((results, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{results}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function PricingTable() {
  return (
    <div className="mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
      {/* Pricing tab 1 */}
      <PricingTab
        planName="Audio & Video"
        price={300}
        planDescription="Perfect for podcast creators who need a professional setup for recording."
        features={[
          "3 Netflix Approved Cameras",
          "4 Shure Microphones",
          "Sound-Trested Room for clear, noise-free audio",
          "8 unique Background to choose from",
          "Warm and Professional Ambiance",
        ]}
        results={[
          "Raw audio files",
          "Raw video files from all cameras",
          "Images",
        ]}
      />

      {/* Pricing tab 2 */}
      <PricingTab
        planName="Audio & Video + Standard Edit"
        price={600}
        planDescription="Ideal for creators seking a polished, ready-to-Post podcast recording."
        features={[
          "3 Cameras with Mixed Angles",
          "Synchronized Audio for seamless sound integration",
          "Unwanted Clips Removed: Clean editing to cut out unnecessary parts",
          "Ready-to-Post Result for your convience",
          "No Graphics (Intro-Outro, Subtitles Included",
        ]}
        results={[
          "Raw audio files",
          "Raw video files from all cameras",
          "Images",
          "Fully mixed and synced episode ready to be published (duration is up to 1 hour)",
        ]}
      />

      {/* Pricing tab 3 */}
      <PricingTab
        planName="Audio & Video + Premium Edit"
        price={1200}
        planDescription="The ultimate solution for creators looking for a complete, professional podcast production."
        features={[
          "Cameras",
          "RODECaster Pro II Integrated Audio Mixer",
          "2x Rode PodMics Dynamic Podcasting Microphones",
          "Professionally Sound Treated Room",
          "Full Studio Lights",
          "Studio Operator",
        ]}
        results={[
          "Raw audio files",
          "Raw video files from all cameras",
          "Images",
          "Fully Edited Podcast for a polished final result",
          "Up to 3 Revisions to ensure your satisfaction",
          "Up to 10 Edited Reels"
        ]}
      />
    </div>
  );
}
