function Hero() {
  return (
    <section
      className="hero relative flex items-center justify-center px-4 py-16 text-white bg-black"
      style={{
        backgroundImage: "url('/assets/111.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "70vh",    // Altura mínima para mobile e notebooks
        height: "100%",        // Flexível para qualquer tela
        width: "100%",         // Full width
      }}
    >
      {/* Camada escura por cima para contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Conteúdo central */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4"></h1>
        <p className="text-lg md:text-2xl"></p>
      </div>
    </section>
  );
}

export default Hero;
