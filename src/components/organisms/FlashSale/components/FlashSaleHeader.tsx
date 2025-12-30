import { Zap, ChevronRight, Gift } from "lucide-react";
import { Button } from "@/components/atoms/Button";

export function FlashSaleHeader() {
  return (
    <div className="relative h-24 bg-white rounded-t-3xl flex items-center justify-between px-12 overflow-hidden border-b border-slate-100">
      <div className="relative flex items-center gap-4">
        <div className="flex flex-col">
          <h2 className="text-4xl font-black text-[#FF0000] italic tracking-tighter flex items-center gap-3">
            <Zap
              className="text-yellow-400 fill-yellow-400 animate-[pulse_0.8s_ease-in-out_infinite] drop-shadow-md"
              size={40}
            />
            <span className="animate-[pulse_1.5s_ease-in-out_infinite] drop-shadow-sm">
              flashsale
            </span>
            <span className="text-orange-500 ml-1 uppercase not-italic">
              {" "}
              GIÁ TỐT
            </span>
          </h2>
        </div>
      </div>

      <Button className="bg-linear-to-r from-[#FF0000] to-[#FF4D4D] hover:from-[#CC0000] hover:to-[#CC0000] text-white font-black px-8 py-3 rounded-full text-lg shadow-lg shadow-red-200 transform hover:scale-105 active:scale-95 transition-all group">
        XEM NGAY
        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>

      <div className="absolute top-0 right-12 scale-150 rotate-12 opacity-5">
        <Gift size={60} className="text-red-500" />
      </div>
    </div>
  );
}
