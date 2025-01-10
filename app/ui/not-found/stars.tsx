'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  baseOpacity: number;
  layer: number;
};

type ShootingStar = {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  dx: number;
  dy: number;
};

export default function Stars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { systemTheme, theme } = useTheme();
  const isDark =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    const layerCount = 3;
    const speeds = [0.05, 0.1, 0.2];
    const baseStarCount = 50;
    let shootingStar: ShootingStar | null = null;

    const resizeCanvas = (): void => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    const createStars = (): void => {
      stars = [];
      const scalingFactor = Math.max(canvas.width, canvas.height) / 1000;
      for (let i = 0; i < layerCount; i++) {
        const starCount = Math.floor(baseStarCount * scalingFactor * (i + 1));
        for (let j = 0; j < starCount; j++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (i + 1) + 0.5,
            speed: speeds[i],
            opacity: Math.random(),
            baseOpacity: Math.random() * 0.5 + 0.5,
            layer: i,
          });
        }
      }
    };

    const updateStars = (): void => {
      stars.forEach((star) => {
        star.y -= star.speed; // All stars move upward
        star.opacity =
          star.baseOpacity + Math.sin(Date.now() * 0.001 * star.speed) * 0.3;

        // Reset star position when it goes off-screen
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
    };

    const drawStars = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 8,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width,
      );
      if (isDark) {
        gradient.addColorStop(0, '#171717');
        gradient.addColorStop(1, '#000');
      } else {
        gradient.addColorStop(0, '#f5f5f5');
        gradient.addColorStop(1, '#fff');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars with parallax effect
      stars.forEach((star) => {
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${star.opacity})`
          : `rgba(0, 0, 0, ${star.opacity * 0.7})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });
    };

    const createShootingStar = (): void => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      const angle = Math.random() * Math.PI * 2;
      const length = Math.random() * 300 + 100;
      const speed = Math.random() * 4 + 2;

      shootingStar = {
        x: startX,
        y: startY,
        length: length,
        speed: speed,
        opacity: 1,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
      };

      const nextAppearance = Math.random() * 20000 + 20000;
      setTimeout(createShootingStar, nextAppearance);
    };

    const updateShootingStar = (): void => {
      if (!shootingStar) return;

      shootingStar.x += shootingStar.dx;
      shootingStar.y += shootingStar.dy;
      shootingStar.opacity -= 0.01;

      if (
        shootingStar.opacity <= 0 ||
        shootingStar.x < 0 ||
        shootingStar.x > canvas.width ||
        shootingStar.y < 0 ||
        shootingStar.y > canvas.height
      ) {
        shootingStar = null; // Remove shooting star
      }
    };

    const drawShootingStar = (): void => {
      if (!shootingStar) return;

      const gradient = ctx.createLinearGradient(
        shootingStar.x,
        shootingStar.y,
        shootingStar.x - shootingStar.dx * shootingStar.length,
        shootingStar.y - shootingStar.dy * shootingStar.length,
      );
      if (isDark) {
        gradient.addColorStop(
          0,
          `rgba(255, 255, 255, ${shootingStar.opacity})`,
        );
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
      } else {
        gradient.addColorStop(
          0,
          `rgba(0, 0, 0, ${shootingStar.opacity * 0.7})`,
        );
        gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
      }
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(
        shootingStar.x - shootingStar.dx * shootingStar.length,
        shootingStar.y - shootingStar.dy * shootingStar.length,
      );
      ctx.stroke();
      ctx.closePath();
    };

    const animate = (): void => {
      updateStars();
      updateShootingStar();
      drawStars();
      drawShootingStar();
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    createStars();
    setTimeout(createShootingStar, Math.random() * 20000 + 20000);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} />
    </div>
  );
}
