'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
