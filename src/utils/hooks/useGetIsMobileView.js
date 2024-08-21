import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsMobileView } from "../../store/userSlice";

const useGetIsMobileView = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleResize = () => {
          const ismobile = window.innerWidth < 768;
          dispatch(setIsMobileView(ismobile));
          
        };
    
        window.addEventListener('resize', handleResize, false);
    
        // Cleanup function to remove the event listener
        return () => {
          window.removeEventListener('resize', handleResize, false);
        };
      }, []);
}

export default useGetIsMobileView