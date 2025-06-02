
  export default function Testimonials() {
    return (
      <section id="sobre-estudio" className="p-10 bg-black text-white">
        <h3 className="text-3xl font-bold mb-6">Sobre o Estúdio</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fotos do estúdio */}
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/studio1.jpg" alt="Estúdio 1" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            <img src="/images/studio2.jpg" alt="Estúdio 2" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            <img src="/images/studio3.jpg" alt="Estúdio 3" className="w-full h-48 object-cover rounded-lg shadow-lg" />
            <img src="/images/studio4.jpg" alt="Estúdio 4" className="w-full h-48 object-cover rounded-lg shadow-lg" />
          </div>
  
          {/* Descrição */}
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4">
              O Inkverse Studio é um espaço criativo dedicado à arte da tatuagem, oferecendo um ambiente acolhedor, seguro e profissional.
            </p>
            <p className="text-lg">
              Nossa equipe é composta por artistas especializados em diversos estilos, sempre buscando traduzir a identidade de cada cliente em uma obra única.
            </p>
          </div>
        </div>
      </section>
    );
  }