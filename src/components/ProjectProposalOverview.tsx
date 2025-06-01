export default function ProjectProposalOverview() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center max-w-6xl px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          Overview
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Digital Website Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6"
                style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
              1 → Denial Hotline
            </h2>
            <div className="text-left space-y-4">
              <p className="text-lg text-gray-700 font-semibold">Digital Solution</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Full-stack web application</li>
                <li>• Web Audio API recording</li>
                <li>• AI transcription & review</li>
                <li>• Email collection</li>
                <li>• Physics-based graphics</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Operating cost (if we estimate 2000 interactions)</p>
                <p className="text-2xl font-bold text-gray-900">$32</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Andrew's fee</p>
                <p className="text-2xl font-bold text-gray-900">$1500</p>
              </div>
              <div className="mt-6 flex justify-left">
                <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Low Risk
                </span>
              </div>
              <ul className="text-gray-600 text-sm space-y-1 mt-3">
                <li>• Well-trodden path.</li>
                <li>• WebGL physics-based graphics is the only uncertainty, but this would not result in catestrophic failure.</li>
              </ul>
            </div>
          </div>

          {/* Physical Payphone Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-6"
                style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
              2 → Denial Payphone
            </h2>
            <div className="text-left space-y-4">
              <p className="text-lg text-gray-700 font-semibold">Physical Solution</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Custom Raspberry Pi solution</li>
                <li>• Solar-powered operation</li>
                <li>• USB handset phone</li>
                <li>• Clipboard-based email collection</li>
              </ul>
              <div className="h-4"></div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Operating cost</p>
                <p className="text-2xl font-bold text-gray-900">$3,945</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Andrew's fee</p>
                <p className="text-2xl font-bold text-gray-900">$1500</p>
                </div>
              <div className="mt-6 flex justify-left">
                <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Medium Risk
                </span>
              </div>
              <ul className="text-gray-600 text-sm space-y-1 mt-3">
                <li>• Lack of reliable power is an issue. To mitigate, scope out location and verify a power outlet is available. </li>
                <li>• The solar panel may get stolen, bringing operation to a halt. Mitigation uncertain.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 