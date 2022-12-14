import { cl, } from '@/util/util';

export const DebugText = ({ children }: { children?: React.ReactNode }) =>
  <div {...cl("relative")}>
    <p {...cl("absolute top-0 right-0 w-48 text-xs italic font-bold text-center",
      "text-red-800 bg-yellow-100/50 rounded-full border border-red-200 z-[100]")}>
      {children}
    </p>
  </div>;

