import { useEffect, useRef, useState } from "react";

interface IFadeProps {
  visible: boolean;
  children: React.ReactNode;
  duration?: number;
  animateEnter?: boolean;
  from?: {
    opacity?: number;
    x?: number;
    y?: number;
    z?: number;
  };
  zIndex?: number;
}

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

const Fade = ({
  visible,
  children,
  duration = 300,
  animateEnter = false,
  from = { opacity: 0 },
  zIndex = 1,
}: IFadeProps) => {
  const childRef = useRef(children);
  const [state, setState] = useState(
    visible ? (animateEnter ? ENTERING : VISIBLE) : HIDDEN
  );

  if (visible) {
    childRef.current = children;
  }

  useEffect(() => {
    if (!visible) {
      setState(LEAVING);
    } else {
      setState((s) => (s === HIDDEN ? ENTERING : VISIBLE));
    }
  }, [visible]);

  useEffect(() => {
    if (state === LEAVING) {
      const timer = setTimeout(() => {
        setState(HIDDEN);
      }, duration);
      return () => {
        clearTimeout(timer);
      };
    } else if (state === ENTERING) {
      // Pour forcer la répainture du DOM et déclencher l'animation CSS
      document.body.offsetHeight;
      setState(VISIBLE);
    }
  }, [state, duration]);

  if (state === HIDDEN) {
    return null;
  }

  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionProperty: "opacity transform",
    zIndex,
  };

  if (state !== VISIBLE) {
    if (from.opacity !== undefined) {
      style.opacity = from.opacity;
    }
    if (from.x !== undefined || from.y !== undefined || from.z !== undefined) {
      style.transform = `translate3d(${from.x ?? 0}px, ${from.y ?? 0}px, ${
        from.z ?? 0
      }px)`;
    }
  }

  return <div style={style}>{childRef.current}</div>;
};

export default Fade;
