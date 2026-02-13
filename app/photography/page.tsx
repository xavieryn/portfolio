'use client'

import Header from '@/components/Header'
import { motion } from 'framer-motion'

const photos = [
  { id: 1, src: '/IMG_1270.jpg', alt: 'Photography portfolio image 1' },
  { id: 2, src: '/IMG_1363.jpg', alt: 'Photography portfolio image 2' },
  { id: 3, src: '/_DSF3362.jpg', alt: 'Photography portfolio image 3' },
  { id: 4, src: '/_DSF3371.jpg', alt: 'Photography portfolio image 4' },
  { id: 5, src: '/_DSF3399.JPG', alt: 'Photography portfolio image 5' },
  { id: 6, src: '/_DSF3915.jpg', alt: 'Photography portfolio image 6' },
  { id: 7, src: '/_DSF5010.jpg', alt: 'Photography portfolio image 7' },
  { id: 8, src: '/_DSF5265.jpg', alt: 'Photography portfolio image 8' },
  { id: 9, src: '/_DSF5330.jpg', alt: 'Photography portfolio image 9' },
  { id: 10, src: '/_DSF6388.jpg', alt: 'Photography portfolio image 10' },
  { id: 11, src: '/_DSF6603.jpg', alt: 'Photography portfolio image 11' },
  { id: 12, src: '/_DSF7058.jpg', alt: 'Photography portfolio image 12' },
  { id: 13, src: '/_DSF7060.jpg', alt: 'Photography portfolio image 13' },
]

export default function Photography() {
  return (
    <main className="min-h-screen bg-paper-white relative">
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-doodle-blue mb-4 font-riitn">
            Photography
          </h1>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-7xl mx-auto space-y-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.0 }}
              className="break-inside-avoid relative rounded-lg overflow-hidden shadow-lg mb-4"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-contain block"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
