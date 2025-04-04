import { Socials } from "@/components/socials";

export default function HomePages() {
  return (
    <div>
      <h1 className="text-center p-10">Velkommen til min nettside!</h1>
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
          <h2 className="text-xl font-bold mb-4">Litt om meg:</h2>
          <p className="mb-4">
            Hei! Mitt navn er Luwei, og jeg er utdannet lektor i biologi, kjemi,
            naturfag og matematikk. Jeg er for øyeblikket student ved
            Universitet i Bergen og tar en bachelor i datasikkerhet.
          </p>
          <p className="mb-4">
            På fritiden liker jeg å sy, strikke, lese og henge med venner. Jeg
            er også interessert i teknologi og elsker å lære nye ting!
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <Socials />
      </div>
    </div>
  );
}
