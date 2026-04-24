"use client";
export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[120px] animate-float-slow" />
      <div className="absolute top-[50%] left-[50%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] animate-pulse-glow" />
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {[...Array(30)].map((_, i) => (
          <circle key={i} cx={`${20 + (i * 37) % 80}%`} cy={`${10 + (i * 53) % 80}%`} r={Math.random() * 2 + 0.5}
            fill="white" className="star-twinkle" style={{ animationDelay: `${(i * 0.7) % 3}s`, opacity: 0.3 + (i % 5) * 0.15 }} />
        ))}
        <circle cx="50%" cy="50%" r="80" fill="none" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.2" className="rotate-slow" />
        <circle cx="50%" cy="50%" r="120" fill="none" stroke="#06B6D4" strokeWidth="0.3" opacity="0.15" className="rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />
      </svg>
    </div>
  );
}