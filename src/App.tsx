/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  SunVoiceVisualizer,
  MERCHANT_VOICE_SAMPLES,
  VoiceCommandSample,
} from './components/SunVoiceVisualizer';
import { ShieldCheck, Layers, Terminal, CheckCircle } from 'lucide-react';

export default function App() {
  const [selectedSample, setSelectedSample] = useState<VoiceCommandSample>(
    MERCHANT_VOICE_SAMPLES[0]
  );
  const [lastCapturedSample, setLastCapturedSample] = useState<VoiceCommandSample>(
    MERCHANT_VOICE_SAMPLES[0]
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-stone-900 flex flex-col">
      {/* Top Navigation Bar (Strict 3-Zone Contract: Brand — Nav Links — Primary CTA) */}
      <header className="flex items-center justify-between gap-8 px-6 lg:px-10 py-4 bg-white border-b border-stone-200/80">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-[#1B4332] whitespace-nowrap shrink-0"
        >
          MyBusiness
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a
            href="#visualizer"
            className="text-stone-900 hover:text-[#1B4332] transition-colors whitespace-nowrap shrink-0"
          >
            01. 3D Voice Desk
          </a>
          <a
            href="#architecture"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            02. Hono Webhook Pipeline
          </a>
          <a
            href="#ledger"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            03. AG Grid Ledger
          </a>
          <a
            href="#localization"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
          >
            Gnani.ai Localization
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              const nextIdx =
                (MERCHANT_VOICE_SAMPLES.findIndex((s) => s.id === selectedSample.id) + 1) %
                MERCHANT_VOICE_SAMPLES.length;
              setSelectedSample(MERCHANT_VOICE_SAMPLES[nextIdx]);
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1B4332] rounded-xl hover:bg-[#2D6A4F] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Switch Locale ({selectedSample.langCode})
          </button>
        </div>
      </header>

      {/* Main Content Container (1440px Desktop Baseline) */}
      <main className="flex-1 max-w-[1380px] w-full mx-auto px-6 lg:px-10 py-8 space-y-8">
        {/* Step Progress Banner & Editorial Hero Header */}
        <section id="visualizer" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200/80 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-medium text-[#C86D51]">
                <span>Step 1 of 3 Active</span>
                <span aria-hidden="true">·</span>
                <span>3D Sun Voice Visualizer</span>
                <span aria-hidden="true">·</span>
                <span>PayPal AI Hackathon Build</span>
              </div>
              <h1
                className="font-display text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Autonomous Cross-Border Invoicing from Native Voice & Ledgers
              </h1>
            </div>

            {/* Key Quantitative Proof Strip */}
            <div className="flex items-center gap-6 text-xs text-stone-600 shrink-0">
              <div>
                <div className="text-stone-400">FFT Frame Rate</div>
                <div className="font-mono-tabular text-sm font-semibold text-stone-900">
                  60 FPS Zero-Lag
                </div>
              </div>
              <div className="h-7 w-px bg-stone-200" />
              <div>
                <div className="text-stone-400">Active Merchant Invoice</div>
                <div className="font-mono-tabular text-sm font-semibold text-[#1B4332]">
                  ${lastCapturedSample.extractedIntent.totalAmount}.00{' '}
                  {lastCapturedSample.extractedIntent.currency}
                </div>
              </div>
              <div className="h-7 w-px bg-stone-200" />
              <div>
                <div className="text-stone-400">Execution Mode</div>
                <div className="font-mono-tabular text-sm font-semibold text-[#C86D51]">
                  2-Phase Guarded
                </div>
              </div>
            </div>
          </div>

          {/* Primary Interactive 3D Sun Voice Visualizer Component */}
          <SunVoiceVisualizer
            selectedSample={selectedSample}
            onSelectSample={setSelectedSample}
            onIntentExtracted={(sample) => setLastCapturedSample(sample)}
          />
        </section>

        {/* Architectural Roadmap Strip showing Step 1 Complete and Steps 2 & 3 Ready for Approval */}
        <section
          id="architecture"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2"
        >
          <div className="bg-white border border-[#2D6A4F]/40 rounded-2xl p-5 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#1B4332] font-semibold">
                <span>01. Voice-First 3D Sun Hero</span>
                <CheckCircle className="w-4 h-4 text-[#2D6A4F]" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm">
                Web Audio API + Framer Motion Spring Physics
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                108 radial SVG rays (72 outer corona + 36 inner harmonic) bound directly to a
                256-point <code className="font-mono-tabular">AnalyserNode</code> FFT buffer with
                zero React re-renders.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-mono-tabular text-[#2D6A4F]">
              STATUS: READY FOR JUDGE INSPECTION
            </div>
          </div>

          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 flex flex-col justify-between opacity-90">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-500 font-semibold">
                <span>02. Bun + Hono Webhook Orchestrator</span>
                <Terminal className="w-4 h-4 text-[#C86D51]" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm">
                Telegram Bot + Gnani.ai + Groq + PayPal Drafts
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Two-Phase Execution Guardrail drafts the PayPal invoice and replies with a native
                Telegram <code className="font-mono-tabular">[Confirm &amp; Send]</code> callback
                before committing.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-mono-tabular text-stone-500">
              NEXT STEP: AWAITING APPROVAL
            </div>
          </div>

          <div
            id="ledger"
            className="bg-white border border-stone-200/80 rounded-2xl p-5 flex flex-col justify-between opacity-90"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-500 font-semibold">
                <span>03. Real-Time AG Grid Merchant Ledger</span>
                <Layers className="w-4 h-4 text-[#D4A373]" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm">
                Custom Cell Renderers, 30-Day Sparklines &amp; Redis Pub/Sub
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Instant WebSocket row mutations, inline PayPal Reminder &amp; Dispute triggers, and
                Gnani.ai live currency/UI localization.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-mono-tabular text-stone-500">
              STEP 3: QUEUED AFTER STEP 2
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
