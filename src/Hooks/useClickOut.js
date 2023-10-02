import { useEffect, useRef, useState } from "react";

export default function useClickOut(tag = "div") {
  const elementRef = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handlerClickOut(e) {
      if (
        elementRef.current &&
        !elementRef.current.contains(e.target)
        // !e.target.matches(tag)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handlerClickOut);
    return () => {
      document.removeEventListener("click", handlerClickOut);
    };
  }, [tag]);

  return { show, setShow, elementRef };
}
