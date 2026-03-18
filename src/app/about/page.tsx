import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            À propos
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
            Une vision créative pensée pour marquer.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70">
            Y Groupe est un studio créatif qui accompagne les marques,
            événements et institutions dans la construction d’une image forte,
            cohérente et mémorable.
          </p>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-black">Notre mission</h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                Concevoir des univers visuels, des contenus et des expériences
                qui captent l’attention et renforcent durablement la présence
                des marques.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-black">Notre approche</h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                Nous relions stratégie, direction artistique, production et
                digital pour transformer une intention en impact concret.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}