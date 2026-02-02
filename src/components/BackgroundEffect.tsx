"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

function FloatingPaths({ position }: { position: number }) {
  const paths = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.8 + i * 0.04,
        opacity: 0.15 + i * 0.025,
        duration: 15 + (i % 10) * 1.5,
        // Alternate between purple and blue with variations
        color: i % 3 === 0 ? "rgb(168, 85, 247)" : i % 3 === 1 ? "rgb(99, 102, 241)" : "rgb(59, 130, 246)",
      })),
    [position],
  );

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      fill="none"
      viewBox="0 0 696 316"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke={path.color}
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
          initial={{ pathLength: 0.3, opacity: 0.3 }}
          animate={{
            pathLength: [0.3, 1, 0.3],
            opacity: [0.3, 0.8, 0.3],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: path.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black pointer-events-none z-0">
      {/* Mirrored path sets for symmetry */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Large purple glow - top left */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 rounded-full opacity-40 blur-3xl"
        style={{
          width: "60vw",
          height: "60vh",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(147, 51, 234, 0.3) 40%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      
      {/* Large blue glow - top right */}
      <motion.div
        className="pointer-events-none absolute -top-40 -right-40 rounded-full opacity-40 blur-3xl"
        style={{
          width: "60vw",
          height: "60vh",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(37, 99, 235, 0.3) 40%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Middle purple glow */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          width: "50vw",
          height: "50vh",
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      
      {/* Bottom blue glow */}
      <motion.div
        className="pointer-events-none absolute bottom-0 right-1/4 translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          width: "55vw",
          height: "55vh",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(99, 102, 241, 0.4) 40%, transparent 70%)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Indigo accent center */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{
          width: "40vw",
          height: "40vh",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(168, 85, 247) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(59, 130, 246) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Softer vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </div>
  );
}
