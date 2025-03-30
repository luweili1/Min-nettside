export default function OmMegPages() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10">
      {/* Bilde-seksjon */}
      <div className="md:w-1/3 mb-6 md:mb-0">
        <img
          src="/Users/luweili/Library/Mobile Documents/com~apple~CloudDocs/min-nettside/app/om-meg/Skjermbilde 2025-03-30 kl. 15.59.38.png" // Bytt ut med riktig sti til bildet ditt
          alt="Bilde av Luwei"
          className="rounded-full w-40 h-40 mx-auto"
        />
      </div>

      {/* Tekst-seksjon */}
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-2xl font-bold mb-4">Om meg</h1>
        <p className="mb-4">
          Hei! Mitt navn er Luwei, og jeg er utdannet lektor i biologi, kjemi,
          naturfag og matematikk. Jeg er for øyeblikket student ved Universitet
          i Bergen og tar en bachelor i datasikkerhet.
        </p>
        <p className="mb-4">
          På fritiden liker jeg å sy, strikke, lese og henge med venner. Jeg er
          også interessert i teknologi og elsker å lære nye ting!
        </p>
        <p>Se gjerne på mine prosjekter!</p>
      </div>
    </div>
  );
}
