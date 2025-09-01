import { motion } from 'framer-motion'

export default function SectionCard({ title, children, className='' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`glass rounded-2xl p-6 sm:p-8 border border-white/10 ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">{title}</h2>
      <div className="text-white/90">{children}</div>
    </motion.section>
  )
}