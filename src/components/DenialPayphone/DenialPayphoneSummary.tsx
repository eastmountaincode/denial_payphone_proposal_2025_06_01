export default function DenialPayphoneSummary() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          Summary
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-lg text-left text-gray-900 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Denial Payphone (physical)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                A physical installation of a payphone underneath a billboard, using a Raspberry Pi to collect user confessions.
              </li>
              <li>
                Custom Python script to output sound and record user input.
              </li>
              <li>
                Solar-powered. Use a process supervisor to automatically run script on startup, gracefully handling power loss (such as at night).
              </li>
              <li>
                Clipboard and security pen system for reliable offline data capture.
              </li>
              <li>
                USB handset phone.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 