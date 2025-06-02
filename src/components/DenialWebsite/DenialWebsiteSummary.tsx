export default function DenialWebsiteSummary() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          Summary
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-lg text-left text-gray-900 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Denial Hotline website</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                A full-stack web app for collecting user recordings and emails, recreating the physical Denial Payphone experience.
              </li>
              <li>
                Novel interaction with compelling graphics (physics-based phone cord rendering) to begin the recordings.
              </li>
              <li>
                Backend database to store recordings and emails.
              </li>
              <li>
                Web Audio API integration to facilitate recording on desktop and mobile.
              </li>
              <li>
                Transcription on server. Review of recordings sent to user's email.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 