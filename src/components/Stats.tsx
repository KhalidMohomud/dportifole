import { useState, useEffect, useRef } from 'react'
import { PlugZap, Battery, Users, MapPin } from 'lucide-react'

interface StatItemProps {
  icon: React.ReactNode
  target: number
  label: string
}

const StatItem = ({ icon, target, label }: StatItemProps) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounter()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounter = () => {
    const duration = 2000 // 2 seconds
    const increment = target / (duration / 16) // ~60fps
    let current = 0

    const updateCounter = () => {
      current += increment
      if (current < target) {
        setCount(Math.floor(current))
        requestAnimationFrame(updateCounter)
      } else {
        setCount(target)
      }
    }

    updateCounter()
  }

  return (
    <div ref={ref} className="text-center group">
      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-4xl font-bold text-white mb-2">{count}</h3>
      <p className="text-white/80 text-lg">{label}</p>
    </div>
  )
}

export const Stats = () => {
  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-br from-primary to-accent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">Our Impact in Numbers</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            See how our smart power solutions are making a difference in people's lives every day.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <StatItem
            icon={<PlugZap className="w-8 h-8 text-white" />}
            target={150}
            label="Smart Stations"
          />

          <StatItem
            icon={<Battery className="w-8 h-8 text-white" />}
            target={5000}
            label="Power Banks"
          />

          <StatItem
            icon={<Users className="w-8 h-8 text-white" />}
            target={25000}
            label="Happy Users"
          />

          <StatItem
            icon={<MapPin className="w-8 h-8 text-white" />}
            target={25}
            label="Cities Covered"
          />
        </div>
      </div>
    </section>
  )
}
