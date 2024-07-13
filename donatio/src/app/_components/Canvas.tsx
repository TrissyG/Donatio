import { MutableRefObject, useEffect, useRef, useState } from "react";

type CanvasProps = {
  width?: number;
  height?: number;
  color?: string;
  background?: string;
  ref?: MutableRefObject<HTMLCanvasElement | null>;
};

const Canvas: React.FC<CanvasProps> = ({
  width = 350,
  height = 300,
  color = "#000",
  background = "#fff",
  ref,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [start, setStart] = useState<{ x: number; y: number } | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [offset, setOffset] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.lineWidth = 1.5;
        setContext(ctx);
        handleSize();
      }
    }

    const handleResize = () => handleSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasRef]);

  useEffect(() => {
    if (context) {
      context.strokeStyle = color;
    }
  }, [color, context]);

  const handleStart = (x: number, y: number) => {
    if (color === background) {
      context?.clearRect(0, 0, width, height);
    } else {
      setIsDrawing(true);
      setStart({ x, y });
    }
  };

  const handleEnd = () => {
    setIsDrawing(false);
  };

  const handleMove = (x: number, y: number) => {
    if (!isDrawing || !start || !context) return;

    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();

    setStart({ x, y });
  };

  const handleSize = () => {
    if (canvasRef.current) {
      const { top, left } = canvasRef.current.getBoundingClientRect();
      setOffset({ top, left });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    handleStart(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    handleMove(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = e.touches[0];
    handleStart(clientX - offset.left, clientY - offset.top);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = e.touches[0];
    handleMove(clientX - offset.left, clientY - offset.top);
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="rounded-lg"
      style={{ background }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleEnd}
      onTouchMove={handleTouchMove}
    />
  );
};

export default Canvas;
