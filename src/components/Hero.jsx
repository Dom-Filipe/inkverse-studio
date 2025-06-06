function Hero() {
  return (
    <section
      className="hero bg-black text-white flex items-center justify-center min-h-[60vh] md:min-h-screen px-4 bg-no-repeat bg-center bg-contain relative"
      style={{ backgroundImage: "url('/assets/111.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="text-center max-w-2xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Inkverse Studio</h1>
        <p className="text-lg md:text-2xl">Arte que transcende a pele</p>
      </div>
    </section>
  );
}

export default Hero;
