import React, { useRef } from 'react';
import { Code, Globe, Shield, Brain, Database } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

export default function TracksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const tracks = [
    {
      id: 1,
      icon: Code,
      title: 'Ethical Healthcare Intelligence',
      description: 'AI solutions that improve healthcare access, diagnosis, and management while ensuring patient privacy, transparency, and fairness in medical decision-making.',
      color: '#8b5cf6'
    },
    {
      id: 2,
      icon: Globe,
      title: 'Responsible Hiring & Talent Intelligence',
      description: 'Technology that enables unbiased recruitment, skill-based hiring, and ethical workforce analytics without discrimination or misuse of personal data.',
      color: '#3b82f6'
    },
    {
      id: 3,
      icon: Shield,
      title: 'Fair Finance & Credit Intelligence',
      description: 'AI-driven financial systems that promote inclusive lending, transparent credit assessment, and responsible financial decision-making for all.',
      color: '#ef4444'
    },
    {
      id: 4,
      icon: Brain,
      title: 'Trustworthy Education Intelligence',
      description: 'Intelligent tools that enhance learning, assessment, and student support while ensuring fairness, data privacy, and academic integrity.',
      color: '#10b981'
    },
    {
      id: 5,
      icon: Database,
      title: 'Ethical Agri-Intelligence',
      description: 'Smart agricultural solutions that support farmers, optimize resources, and improve sustainability while respecting environmental and social ethics.',
      color: '#f59e0b'
    },
    {
      id: 6,
      icon: Database,
      title: 'Open Innovation',
      description: 'Teams will choose their own problem statement within the selected domain. The problem must involve an AI-based solution. Identification of ethical risks and mitigation strategies is mandatory.',
      color: '#f59e0b'
    }
  ];

  // Constants for scroll calculation
  const ITEM_WIDTH = 350;
  const GAP = 28;
  const totalDistance = (tracks.length - 1) * (ITEM_WIDTH + GAP);
  
  // Direct scroll animation - no spring, immediate response
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  // Tilt animation constants
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

  const TiltCard = ({ track, index }: { track: any; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const cardX = useMotionValue(0);
    const cardY = useMotionValue(0);
    const xSpring = useSpring(cardX);
    const ySpring = useSpring(cardY);
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
      const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
      const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
      const rY = mouseX / width - HALF_ROTATION_RANGE;
      cardX.set(rX);
      cardY.set(rY);
    };

    const handleMouseLeave = () => {
      cardX.set(0);
      cardY.set(0);
    };

    const Icon = track.icon;

    return (
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
          '--item-color': track.color,
        } as any}
        className="gallery-item"
      >
        <div 
          className="item-content-3d"
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="item-content">
            <div 
              className="icon-wrapper"
              style={{
                transform: "translateZ(50px)",
              }}
            >
              <Icon className="track-icon" />
            </div>
            <span 
              className="item-number"
              style={{
                transform: "translateZ(40px)",
              }}
            >
              0{track.id}
            </span>
            <h2 
              className="track-title"
              style={{
                transform: "translateZ(60px)",
              }}
            >
              {track.title}
            </h2>
            <p 
              className="track-description"
              style={{
                transform: "translateZ(30px)",
              }}
            >
              {track.description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div id="tracks-example">
      {/* Intro Section */}
      <section className="py-12 px-6 bg-transparent">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Idea Tracks
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Choose your domain and create innovative solutions across multiple exciting tracks!
          </p>
        </div>
      </section>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="scroll-container">
        <div className="sticky-wrapper">
          <motion.div 
            className="gallery" 
            style={{ x }}
          >
            {tracks.map((track, index) => (
              <TiltCard key={track.id} track={track} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* No spacing - direct transition */}

      <style dangerouslySetInnerHTML={{
        __html: `
          #tracks-example {
            height: auto;
            overflow: visible;
            width: 100%;
            max-width: 100vw;
          }

          .scroll-container {
            height: 300vh;
            position: relative;
            width: 100%;
            max-width: 100vw;
          }

          .sticky-wrapper {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 100%;
            max-width: 100vw;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            overflow: hidden;
            padding-left: calc(50vw - 175px);
          }

          .gallery {
            display: flex;
            gap: 28px;
            will-change: transform;
          }

          .gallery-item {
            flex-shrink: 0;
            width: 350px;
            height: 450px;
            border-radius: 20px;
            position: relative;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            border: 2px solid rgba(168, 85, 247, 0.4);
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.4);
            cursor: pointer;
            perspective: 1000px;
          }

          .gallery-item:hover {
            border-color: rgba(168, 85, 247, 0.8);
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 60px rgba(168, 85, 247, 0.6);
            transition: all 0.3s ease;
          }

          .gallery-item::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, transparent 40%, var(--item-color));
            opacity: 0.1;
            pointer-events: none;
          }

          .item-content-3d {
            position: absolute;
            inset: 6px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(168, 85, 247, 0.2);
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 32px 24px;
            text-align: center;
          }

          .item-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            max-width: 100%;
          }

          .icon-wrapper {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--item-color), rgba(168, 85, 247, 0.8));
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 25px rgba(168, 85, 247, 0.6);
          }

          .track-icon {
            width: 28px;
            height: 28px;
            color: white;
          }

          .item-number {
            font-size: 14px;
            color: var(--item-color);
            font-family: "Azeret Mono", monospace;
            font-weight: bold;
            letter-spacing: 1px;
          }

          .track-title {
            font-size: 24px;
            font-weight: 900;
            color: white;
            margin: 0;
            text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
            line-height: 1.2;
            max-width: 100%;
          }

          .track-description {
            font-size: 15px;
            color: rgba(196, 181, 253, 1);
            line-height: 1.4;
            margin: 0;
            font-weight: 400;
            max-width: 100%;
          }

          @media (max-width: 600px) {
            .sticky-wrapper {
              width: 300px;
            }

            .gallery {
              gap: 20px;
            }

            .gallery-item {
              width: 300px;
              height: 380px;
            }

            .item-content-3d {
              padding: 24px 20px;
            }

            .icon-wrapper {
              width: 56px;
              height: 56px;
            }

            .track-icon {
              width: 24px;
              height: 24px;
            }

            .item-number {
              font-size: 12px;
            }

            .track-title {
              font-size: 20px;
            }

            .track-description {
              font-size: 13px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .gallery {
              transform: none !important;
            }

            .scroll-container {
              height: auto;
            }

            .sticky-wrapper {
              position: relative;
              height: auto;
              width: 100%;
              overflow-x: auto;
              padding: 50px 0;
            }
          }
        `
      }} />
    </div>
  );
}
