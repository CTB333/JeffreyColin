import { useEffect } from "react";

const useLoad = () => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
  }, []);
};

export default useLoad;
