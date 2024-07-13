// import {
//   useEffect,
//   useRef,
//   useState,
//   forwardRef,
//   useImperativeHandle,
// } from "react";

// type CanvasProps = {
//   width?: number;
//   height?: number;
//   color?: string;
//   background?: string;
// };

// const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
//   ({ width = 350, height = 300, color = "#000", background = "#fff" }, ref) => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);

    

//     useImperativeHandle(ref, () => canvasRef.current!);

    

    

    

//     return (
//       <canvas
//         ref={canvasRef}
//         width={width}
//         height={height}
//         className="rounded-lg"
//         style={{ background }}
//         onMouseDown={handleMouseDown}
//         onMouseUp={handleEnd}
//         onMouseLeave={handleEnd}
//         onMouseMove={handleMouseMove}
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleEnd}
//         onTouchMove={handleTouchMove}
//       />
//     );
//   }
// );

// Canvas.displayName = "Canvas";

// export default Canvas;
