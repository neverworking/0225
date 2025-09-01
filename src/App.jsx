import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GiftBox from './components/GiftBox.jsx'
import SectionCard from './components/SectionCard.jsx'
import ConfettiBurst from './components/ConfettiBurst.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import HugHeart from './components/HugHeart.jsx'
import { Heart, Sparkles } from 'lucide-react'
import StarsUrl from './assets/stars.svg';
import PolaroidUrl from './assets/polaroid.svg';

export default function App() {
  const [opened, setOpened] = useState(false)

  const reasons = useMemo(() => [
    "because you’re not just part of my story—you are the story",
    "Your laugh is my favorite sound in the world.(Also when you snore when you sleep over our call)",
    "You care in ways that make me feel lucky every day.",
    "Even from miles away, you’re home to me.",
    "because I Annoye with my worst jokes and still u love me.",
    "turning late-night calls into my favorite lullabies."
  ], [])

  const wishes = useMemo(() => [
    "I LOVE YOU",
    "I LOVE YOU",
    "I LOVE YOU",
    "I LOVE YOU",
    "I'll Always LOVE YOU(More Than You )."
  ], [])

  const photos = useMemo(() => [
    { title: "Us in doodles", src: "/placeholder-1.svg" },
    { title: "Tiny memory", src: "/placeholder-2.svg" },
    { title: "Dreaming ahead", src: "/placeholder-3.svg" },
  ], [])

  return (
    <div className="min-h-screen bg-romance-gradient relative overflow-hidden">
      {/* floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{ top: `${(i*7)%90+5}%`, left: `${(i*13)%90+5}%`, animationDelay: `${i*0.5}s` }}
        />
      ))}

      <header className="container mx-auto px-4 py-8 sm:py-10 flex items-center gap-3">
        <Sparkles className="text-brand" />
        <p className="text-white/80">It’s my birthday… but the best gift is <span className="text-brand font-semibold">you</span>.</p>
      </header>

      <main className="container mx-auto px-4 pb-20">
        {/* Landing gift box */}
        <section className="flex flex-col items-center justify-center text-center gap-6 pt-6 sm:pt-10 pb-10 sm:pb-16">
          <AnimatePresence>
            {!opened && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center gap-4"
              >
                <p className="text-3xl sm:text-4xl font-semibold">It’s my birthday today…</p>
                <p className="text-white/70">Tap the gift I wrapped just for you</p>
                <GiftBox onOpen={() => setOpened(true)} />
              </motion.div>
            )}
          </AnimatePresence>

          <ConfettiBurst fire={opened} />

          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
                  <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                    …but the <span className="text-brand">best gift</span> I have is <span className="text-brand">YOU</span> 💙
                  </h1>
                  <p className="mt-3 text-white/75">Thank you for being my favorite person, even on the days that feel heavy.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Sections after open */}
        {opened && (
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            <SectionCard title="Why you’re my best gift">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {reasons.map((r, idx) => (
                  <div key={idx} className="glass tint card-3d rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-brand mt-1 shrink-0" />
                      <p className="text-white/90">{r}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="Only Things I wanna say today  (to you)">
              <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 m-0">
                {wishes.map((w, i) => (
                  <li key={i} className="glass rounded-xl p-4 border border-white/10 tint">{w}</li>
                ))}
              </ul>
            </SectionCard>

      

            <SectionCard title="Press play">
              <MusicPlayer />
            </SectionCard>

            <SectionCard title="A hug you can feel">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <HugHeart />
                <div className="flex-1 text-white/75">
                  <p className="leading-relaxed">
                    If you were here, I’d start my birthday by hugging you so tight the distance would shrink.
                    Until then, close your eyes for three seconds and imagine it… I’m right there.
                  </p>
                </div>
              </div>
            </SectionCard>

            <footer className="text-center text-white/60 py-6">
              Made for you • <span className="text-brand">HARSHITA I LOVE YOU</span>
            </footer>
          </div>
        )}
      </main>

      {/* subtle star overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-30">
        <img src={StarsUrl} className="w-full h-full"  alt="stars" />
      </div>
    </div>
  )
}
