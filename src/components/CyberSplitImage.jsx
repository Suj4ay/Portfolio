import React, { useState, useRef, useEffect, useCallback } from 'react';
import { personalData } from '../data/portfolioData';

export default function CyberSplitImage({ className = "" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const humanImgRef = useRef(null);
  const roboticImgRef = useRef(null);

  // Split percentage: 0 to 100 (default 50)
  const [splitPos, setSplitPos] = useState(50);
  const targetPosRef = useRef(50);
  const currentPosRef = useRef(50);
  const isLoadedRef = useRef({ human: false, robotic: false });

  // Load both human and robotic transparent images (100.00% identical alignment & eye placement)
  useEffect(() => {
    const imgHuman = new Image();
    imgHuman.crossOrigin = "anonymous";
    imgHuman.src = personalData.humanTransparentImage;
    imgHuman.onload = () => {
      humanImgRef.current = imgHuman;
      isLoadedRef.current.human = true;
      if (isLoadedRef.current.robotic) drawCanvas(currentPosRef.current);
    };

    const imgRobotic = new Image();
    imgRobotic.crossOrigin = "anonymous";
    imgRobotic.src = personalData.roboticTransparentImage;
    imgRobotic.onload = () => {
      roboticImgRef.current = imgRobotic;
      isLoadedRef.current.robotic = true;
      if (isLoadedRef.current.human) drawCanvas(currentPosRef.current);
    };
  }, []);

  // Main Canvas Render Function - Human on left, Robotic Eyeballs & Android on right
  const drawCanvas = useCallback((splitPercent) => {
    const canvas = canvasRef.current;
    const humanImg = humanImgRef.current;
    const roboticImg = roboticImgRef.current;
    if (!canvas || !humanImg || !roboticImg || !isLoadedRef.current.human || !isLoadedRef.current.robotic) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // 1. Draw Real Human Photo across full canvas
    ctx.save();
    ctx.drawImage(humanImg, 0, 0, width, height);
    ctx.restore();

    const splitX = (splitPercent / 100) * width;

    // 2. Draw Robotic Eyeball Image ONLY to the right of splitX
    ctx.save();
    ctx.beginPath();
    ctx.rect(splitX, 0, width - splitX, height);
    ctx.clip();
    ctx.drawImage(roboticImg, 0, 0, width, height);
    ctx.restore();

    // 3. Draw Vertical Laser Split Line (Clean cyan laser, no dark shadow box)
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(splitX, 0);
    ctx.lineTo(splitX, height);
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2.2;
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 10;
    ctx.stroke();

    // Cyan pulse node on laser split line
    ctx.beginPath();
    ctx.arc(splitX, height * 0.4257, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.restore();

  }, []);

  // Silky smooth steady lerp animation loop
  useEffect(() => {
    let active = true;
    const loop = () => {
      if (!active) return;
      const diff = targetPosRef.current - currentPosRef.current;
      if (Math.abs(diff) > 0.05) {
        currentPosRef.current += diff * 0.2;
        setSplitPos(currentPosRef.current);
        drawCanvas(currentPosRef.current);
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    return () => {
      active = false;
    };
  }, [drawCanvas]);

  const handlePointerMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : rect.left + rect.width / 2);
    const relativeX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    targetPosRef.current = percentage;
  }, []);

  const handlePointerLeave = () => {
    targetPosRef.current = 50;
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className={`relative w-full max-w-md mx-auto cursor-ew-resize select-none overflow-visible ${className}`}
    >
      <canvas
        ref={canvasRef}
        width={768}
        height={1024}
        className="w-full h-auto object-contain pointer-events-none"
      />
    </div>
  );
}
