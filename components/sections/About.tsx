import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden scroll-mt-24 bg-white">
      {/* λεπτή χρωματιστή γραμμή στην κορυφή */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2D6BFF] to-[#00C2A8]" />

      <div className="container py-16 md:py-24">
        <p className="mx-auto max-w-4xl text-center text-slate-900 text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed">
          Είμαστε μια οικογενειακή επιχείρηση που μεγαλώνει με τις ίδιες αξίες
          εδώ και χρόνια: ειλικρίνεια, συνέπεια και σεβασμός στον πελάτη.
          Επιλέγουμε αξιόπιστες μάρκες και υλικά με αποδεδειγμένη αντοχή,
          γιατί πιστεύουμε ότι κάθε έργο —μικρό ή μεγάλο— πρέπει να κρατάει στο χρόνο.
          Στόχος μας είναι να κάνουμε τη ζωή σας καλύτερη και πιο ασφαλή,
          προσφέροντας σωστές λύσεις, καθαρές τιμές και υποστήριξη σε κάθε βήμα.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            href="/epikoinonia"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-white font-medium
                       bg-gradient-to-r from-[#2D6BFF] to-[#00C2A8]
                       shadow-md hover:shadow-lg hover:opacity-95 transition
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                       focus-visible:ring-[#2D6BFF] focus-visible:ring-offset-white"
          >
            Επικοινωνήστε Μαζί Μας
          </Link>
        </div>
      </div>
    </section>
  );
}
