import { CONFIG } from "../constants/horror-constants";

export function Logo() {
  return <>
    <div>
      <div className="flex gap-1">
        <img src={CONFIG.LOGO_IMG} alt="Logo Whatowatch" className="w-8 h-8" />
        <h1 className="text-white pt-1">Whatowatch</h1>
      </div>
      <p className="text-white text-xs">Find a show you may like</p>
    </div>
    
  </>
}