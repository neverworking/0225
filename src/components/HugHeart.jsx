import { motion } from 'framer-motion'
import HeartUrl from '../assets/heart.svg';

export default function HugHeart() {
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.05, 0.95, 1] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="p-6 rounded-full bg-brand/10"
      >
        <img src={HeartUrl} className="w-20 h-20 text-brand"  alt="heart" />
      </motion.div>
      <p className="text-center text-white/90 leading-relaxed">
        Even though we’re apart today…<br/>
        I’d still choose <span className="text-brand font-semibold">YOU</span> as my gift, in every lifetime.
      </p>
    </div>
  )
}