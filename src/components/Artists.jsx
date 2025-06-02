const artists = [
  { name: "Ana Silva", desc: "Especialista em aquarela.", image: "/images/ddd.jpg" },
  { name: "Carlos Tattoo", desc: "Old school e tradicional.", image: "/images/sss.jpg" },
  { name: "Julia Ink", desc: "Minimalismo e fineline.", image: "/images/fff.png" },
];

export default function Artists() {
  return (
    <section id="artists" className="p-10 bg-gray-100 text-black">
      <h3 className="text-3xl font-bold mb-6">Artistas</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <div key={artist.name} className="text-center">
            <img 
              src={artist.image} 
              alt={artist.name} 
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
            />
            <h4 className="font-bold">{artist.name}</h4>
            <p>{artist.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
