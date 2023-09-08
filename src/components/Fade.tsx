import { useEffect, useState } from "react";

 interface IAnimationProps {
    visible: boolean;
    children: React.ReactNode;
    duration?: number;
    className?: string;
 }

 const VISIBLE = 1; // Animation s'est déroulé, on voit l'élément
 const HIDDEN = 2; // Le composant est masqué, on voit plus
 const ENTERING = 3; // L'élément rendre dans le DOM, effet de transition vers opacity 1
 const LEAVING = 4; // L'élément quitte notre DOM, effet de transition vers opacity 0

const Fade = ({ visible, children, className, duration = 300 }: IAnimationProps) => {
  const [state, setState] = useState(visible ? VISIBLE : HIDDEN);

  useEffect(() => {
      if(!visible){
          setState(LEAVING);
        } else {
        setState((prevState) => prevState === HIDDEN ? ENTERING : VISIBLE);
    }
  }, [visible])

  useEffect(() => {
    if(state === LEAVING) {
      const timer = setTimeout(() => {
        setState(HIDDEN);
      }, duration);
      return () => clearTimeout(timer);
    } else if(state === ENTERING) {
        document.body.offsetHeight;
        setState(VISIBLE);
    }
  }, [state]);

  if(state === HIDDEN) return null;

  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionProperty: "opacity transform",
    zIndex: -99,
  };
  if (state !== VISIBLE) {
    style.opacity = 0;
    // style.transform = "translateY(-20px)";
  }

  return (
    <div className={className} style={style}>
        { children }
    </div>
  )
}
 // La première fois qu'il reçoit la propriété visible, on est dans l'état VISIBLE, 
// du coup il compend que si visible est à true, il doit déclencher l'animation d'ENTERING
// Si l'élément est déjà visible on ne doit pas passer dans l'état ENTERING, il faut rester dans l'état visible
// On doit donc passer dans l'état ENTERING uniquement si on vient de l'état hidden

export default Fade;