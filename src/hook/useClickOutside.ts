import { RefObject } from "react";
import useEventListener from "./useEventListener";
// interface RefObject {
//     readonly current: HTMLElement | null
// }
function useClickOutside(ref:RefObject<HTMLElement>, cb:(e:Event)=>void) {
    
  useEventListener(
    "click",
    (e) => {
      if (ref.current == null || ref.current.contains(e.target as Node)) return;
      cb(e);
    },
    document
  );
}
export default useClickOutside;