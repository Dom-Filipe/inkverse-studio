export default function Footer() {
  return (
    <footer className="relative flex flex-col justify-between items-center px-6 py-12 h-[800px] text-white overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-contain"
        src="/assets/VideoFooter.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay escurecido */}
      <div className="absolute inset-0 bg-black/80"></div>

      

      
    </footer>
  );
}
