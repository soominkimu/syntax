
export const DebugText = ({ children }) =>
  <div className="relative">
    <p className="absolute top-0 right-0 w-48 text-xs italic font-bold text-center text-red-800 bg-yellow-100/50 rounded-full border border-red-200 z-[100]">
      {children}
    </p>
  </div>

