import s from "./CuruselPage.module.css"
import { useRef, useEffect, useState } from 'react';
import { useSelector } from "react-redux";

const CuruselDragContainr = ()=>{
	const images = useSelector(state=>state.curusel.images)
	const containerRef = useRef();
  const spinRef = useRef();
  const radius = 240;
  const autoRotate = true;
  const rotateSpeed = -60;

  useEffect(() => {
    const drag = containerRef.current;
    const spin = spinRef.current;
    const imgs = spin.getElementsByTagName('img');

    // Расставляем изображения по кругу
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.transform = `rotateY(${i * (360 / imgs.length)}deg) translateZ(${radius}px)`;
      imgs[i].style.transition = 'transform 1s';
      imgs[i].style.transitionDelay = `${(imgs.length - i) / 4}s`;
    }

    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      spin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    // Drag
    let tX = 0, tY = 10;
    let desX = 0, desY = 0;
    let sX, sY;
    let interval;

    const applyTransform = () => {
      tY = Math.max(0, Math.min(180, tY));
      drag.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    };

    const onPointerDown = (e) => {
      clearInterval(interval);
      sX = e.clientX;
      sY = e.clientY;

      const onPointerMove = (e) => {
        const nX = e.clientX;
        const nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform();
        sX = nX;
        sY = nY;
      };

      const onPointerUp = () => {
        interval = setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform();
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(interval);
            spin.style.animationPlayState = 'running';
          }
        }, 17);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
      };

      spin.style.animationPlayState = 'paused';
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    };

    drag.addEventListener('pointerdown', onPointerDown);
    return () => drag.removeEventListener('pointerdown', onPointerDown);
  }, []);

  return (
    <div className={s.anime_checkbox} >
      <div id={s.drag_container} ref={containerRef}>
        <div id={s.spin_container} ref={spinRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`img-${i}`} />
          ))}
        </div>
      </div>
      <div className={`${s.layer} ${s.layers__base}`} style={{ backgroundImage: `url('images/goresont.webp')` }}></div>
      <div className={`${s.layer} ${s.layers__middle}`} style={{ backgroundImage: `url('images/goresont_middle.webp')` }}></div>
      <div className={`${s.layer} ${s.layers__front}`} style={{ backgroundImage: `url('images/goresont_front.webp')` }}></div>
    </div>
  );

}                                                  
export default CuruselDragContainr;