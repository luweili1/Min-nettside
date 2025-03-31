import { Socials } from "@/components/socials";

export default function Kontakt() {
  return (
    <div>
      <h1 className="text-center p-10">Kontakt meg</h1>
      <div className="flex flex-col md:flex-row items-center justify-center p-10">
        {/* Venstre seksjon (f.eks. bilde eller tom plass) */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="/luwei.png"
            alt="Bilde av Luwei" // Bytt ut med riktig sti til bildet ditt
            className="rounded-full w-70 h-80 mx-auto"
          />
        </div>

        {/* Høyre seksjon (tekst) */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">Ta kontakt:</h2>
          <p className="mb-4">
            Hvis du har spørsmål eller ønsker å komme i kontakt med meg, kan du
            gjøre det via sosiale medier eller e-post.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Socials />
      </div>
    </div>
  );
}
