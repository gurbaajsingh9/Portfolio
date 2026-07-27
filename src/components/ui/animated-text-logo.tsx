"use client";

import { motion, useAnimationControls, Variants } from "motion/react";
import { Alex_Brush } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
});

interface AnimatedTextLogoProps {
  text: string;
  className?: string;
  href?: string;
  hover?: boolean;
}

export function AnimatedTextLogo({ text, className, href, hover }: AnimatedTextLogoProps) {
  const controls = useAnimationControls();
  const [isAnimating, setIsAnimating] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants: any = {
    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut" as any
      },
    },
  };

  const startAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    await controls.start("hidden");
    await controls.start("visible");
    setIsAnimating(false);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const handleMouseEnter = () => {
    if (hover) {
      startAnimation();
    }
  };

  const content = (
    <motion.div
      className={cn(alexBrush.className, "inline-flex items-center", className)}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      onMouseEnter={handleMouseEnter}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={childVariants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
