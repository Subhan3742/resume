'use client';

export default function Logo() {
  return (
    <div className="relative w-20 h-16">
      {/* First Block - S (Purple gradient) */}
      <div className="absolute top-0 left-0 z-10">
        <div className="relative bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-800 rounded-xl px-3 py-2.5 shadow-xl transform rotate-[-3deg]">
          <span 
            className="text-black font-black text-2xl tracking-tight block"
            style={{ 
              textShadow: '1px 1px 0px rgba(255,255,255,0.3), -1px -1px 0px rgba(0,0,0,0.2), 2px 2px 4px rgba(0,0,0,0.3)',
              WebkitTextStroke: '0.5px rgba(0,0,0,0.1)'
            }}
          >
            S
          </span>
        </div>
        {/* Light blue under-layer */}
        <div className="absolute -bottom-0.5 -right-0.5 bg-blue-300 rounded-lg w-[calc(100%+4px)] h-[calc(100%+4px)] -z-10 opacity-50"></div>
      </div>
      
      {/* Second Block - M (Blue gradient, overlapping) */}
      <div className="absolute bottom-0 right-0 z-20 transform rotate-[4deg]">
        <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900 rounded-xl px-3 py-2.5 shadow-xl">
          <span 
            className="text-black font-black text-2xl tracking-tight block"
            style={{ 
              textShadow: '1px 1px 0px rgba(255,255,255,0.3), -1px -1px 0px rgba(0,0,0,0.2), 2px 2px 4px rgba(0,0,0,0.3)',
              WebkitTextStroke: '0.5px rgba(0,0,0,0.1)'
            }}
          >
            M
          </span>
        </div>
      </div>
    </div>
  );
}
