
import React, { useState, useEffect, useRef } from 'react';

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const endValue = end;
          if (start === endValue) return;

          const totalFrames = Math.round(duration / (1000 / 60));
          const increment = endValue / totalFrames;
          let currentFrame = 0;

          const timer = setInterval(() => {
            currentFrame++;
            start += increment;
            if (start > endValue) {
                setCount(endValue);
                clearInterval(timer);
                return;
            }
            setCount(Math.ceil(start));

            if (currentFrame === totalFrames) {
                setCount(endValue);
                clearInterval(timer);
            }
          }, 1000 / 60);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
        if (ref.current) {
             observer.unobserve(ref.current);
        }
    }
  }, [end, duration]);

  return { count, ref };
};


interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, prefix = '', suffix = '' }) => {
    const { count, ref } = useCountUp(value, 2500);
    return (
        <div className="text-center">
            <span ref={ref} className="font-montserrat font-black text-5xl md:text-6xl text-brand-cyan">
                {prefix}{count.toLocaleString()}{suffix}
            </span>
            <p className="mt-2 text-lg text-light-slate">{label}</p>
        </div>
    );
}

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 md:py-32 bg-navy">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
            <StatCard value={43} label="Million Raised Since 2001" prefix="$" suffix="M+"/>
            <StatCard value={3500} label="Annual Participants" suffix="+"/>
            <StatCard value={400} label="Teams in Action" suffix="+"/>
        </div>
      </div>
    </section>
  );
};

export default Stats;
