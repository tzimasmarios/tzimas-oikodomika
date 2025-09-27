// app/epikoinonia/page.tsx
import shop from "@/config/shop.json";
import CallNow from "@/components/CallNow";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Επικοινωνία – Τζίμας Οικοδομικά",
  description: "Επικοινωνήστε για προσφορές και παραγγελίες σε οικοδομικά υλικά.",
};

export default function ContactPage() {
  const tel = (shop as any).phone ?? "";
  const mobile = (shop as any).mobile ?? "6946061328";
  const fax = (shop as any).fax ?? "2683024298";
  const email = (shop as any).email ?? "";
  const address = (shop as any).address ?? "";

  const mapUrl = (
    ((shop as any).mapUrl || (shop as any).mapEmbedSrc || "") as string
  ).trim();
  const mapEmbed = (((shop as any).mapEmbed || "") as string).trim();

  const clean = (s: string) => String(s).replace(/\s+/g, "");

  return (
    <main className="container py-10">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Επικοινωνία</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Στοιχεία επικοινωνίας */}
        <section className="space-y-4">
          <div>
            <h2 className="text-sm uppercase tracking-wide text-slate-500">Τηλέφωνα</h2>
            <ul className="mt-2 space-y-2">
              {tel && (
                <li>
                  <span className="text-slate-500">Σταθερό:</span>{" "}
                  <a href={`tel:${clean(tel)}`} className="underline hover:no-underline">
                    {tel}
                  </a>
                </li>
              )}
              <li>
                <span className="text-slate-500">Κινητό:</span>{" "}
                <a href={`tel:${clean(mobile)}`} className="underline hover:no-underline">
                  {mobile}
                </a>
              </li>
              <li>
                <span className="text-slate-500">Fax:</span> {fax}
              </li>
            </ul>
          </div>

          {email && (
            <div>
              <h2 className="text-sm uppercase tracking-wide text-slate-500">Email</h2>
              <p className="mt-2">
                <a href={`mailto:${email}`} className="underline hover:no-underline">
                  {email}
                </a>
              </p>
            </div>
          )}

          {address && (
            <div>
              <h2 className="text-sm uppercase tracking-wide text-slate-500">Διεύθυνση</h2>
              <p className="mt-2">{address}</p>
            </div>
          )}

          {/* Κουμπί με dropdown (Κινητό / Σταθερό) */}
          <div className="pt-2">
            <CallNow mobile={mobile} tel={tel} />
          </div>
        </section>

        {/* Χάρτης: mapUrl (iframe src) ή mapEmbed */}
        <section className="rounded-xl overflow-hidden border">
          {mapUrl ? (
            <iframe
              title="Χάρτης"
              src={mapUrl}
              className="w-full h-[360px] md:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : mapEmbed ? (
            <div
              className="w-full h-[360px] md:h-[480px]"
              dangerouslySetInnerHTML={{
                __html: mapEmbed
                  .replace(/width="[^"]*"/, 'width="100%"')
                  .replace(/height="[^"]*"/, 'height="100%"')
                  .replace(/style="[^"]*"/, 'style="border:0;width:100%;height:100%;"'),
              }}
            />
          ) : (
            <div className="p-6 text-slate-500">
              Πρόσθεσε <code>mapUrl</code> (Google Maps <em>embed</em> URL) ή
              <code> mapEmbed</code> ή <code>mapEmbedSrc</code> στο <code>config/shop.json</code>.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
