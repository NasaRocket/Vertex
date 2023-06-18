import React, { useEffect, useRef, useState } from 'react';
import { Vertex } from '../core';
import { debounce } from 'lodash-es';
import './canvas-page.less';

interface CanvasPageProps {}

export const CanvasPage: React.FC<CanvasPageProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [vertex, setVertex] = useState<Vertex | null>(null);

  // 设置 canvas 大小的函数
  const setCanvasSize = debounce(() => {
    if (canvasRef.current) {
      const parentDiv = canvasRef.current.parentElement;
      if (parentDiv) {
        canvasRef.current.width = parentDiv.clientWidth;
        canvasRef.current.height = parentDiv.clientHeight;
      }
      const newVertex = new Vertex(canvasRef.current.getContext('2d')!);
      setVertex(newVertex);
    }
  }, 300);

  useEffect(() => {
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  // 使用 vertex 实例
  useEffect(() => {
    if (vertex) {
      // 在这里你可以使用 vertex 实例进行操作
      vertex.render();
    }
  }, [vertex]);

  return (
    <div className={'canvas-page'}>
      <canvas ref={canvasRef} />
    </div>
  );
};