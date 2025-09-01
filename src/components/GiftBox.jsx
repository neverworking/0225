import { motion } from 'framer-motion'
import { Gift } from 'lucide-react'

export default function GiftBox({ onOpen }) {
  return (
    <motion.button
      onClick={onOpen}
      aria-label="Open gift"
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="relative glass tint card-3d rounded-2xl p-8 sm:p-10 bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/10"
    >
      <div className="absolute -inset-1 rounded-2xl bg-brand/20 blur-xl" />
      <div className="relative flex flex-col items-center gap-3">
        <Gift className="w-16 h-16 sm:w-20 sm:h-20 text-brand" />
        <span className="text-xl sm:text-2xl font-semibold tracking-tight">
          Click to unwrap
        </span>
        <span className="text-sm text-white/70">I saved the best gift for last</span>
      </div>
    </motion.button>
  )
}