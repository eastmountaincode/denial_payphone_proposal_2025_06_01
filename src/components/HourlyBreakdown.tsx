export default function HourlyBreakdown() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center max-w-6xl px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          Hourly Breakdown
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-8"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          Post<span style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>-</span>meeting June 1, 2025
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Digital Website Fee Breakdown */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6"
                style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
              Denial Hotline<br />
              <span style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>(</span>digital<span style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>)</span>
            </h2>
            <div className="text-left space-y-4">
              <p className="text-lg text-gray-700 font-semibold">Development Fee Breakdown</p>
              {/* <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-900">Frontend Development</span>
                  <span className="text-gray-900 font-semibold">24 hrs × $25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900">Backend Development</span>
                  <span className="text-gray-900 font-semibold">18 hrs × $25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900">UI/UX Design</span>
                  <span className="text-gray-900 font-semibold">10 hrs × $25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900">Testing & Deployment</span>
                  <span className="text-gray-900 font-semibold">8 hrs × $25</span>
                </div>
              </div> */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total Hours:</span>
                  <span className="text-lg font-bold text-gray-900">60 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total Fee:</span>
                  <span className="text-2xl font-bold text-gray-900">$1,500</span>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Payphone Fee Breakdown */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-6"
                style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
              Denial Payphone <span style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>(</span>physical<span style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>)</span>
            </h2>
            <div className="text-left space-y-4">
              <p className="text-lg text-gray-700 font-semibold">Development Fee Breakdown</p>
              <div className="space-y-3">
                {/* <div className="flex justify-between">
                  <span className="text-gray-900">Hardware Setup</span>
                  <span className="text-gray-900 font-semibold">15 hrs × $25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900">Python Script Development</span>
                  <span className="text-gray-900 font-semibold">12 hrs × $25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900">Installation & Testing</span>
                  <span className="text-gray-900 font-semibold">10 hrs × $25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900">Travel & Deployment</span>
                  <span className="text-gray-900 font-semibold">23 hrs × $25</span>
                </div> */}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total Hours:</span>
                  <span className="text-lg font-bold text-gray-900">60 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total Fee:</span>
                  <span className="text-2xl font-bold text-gray-900">$1,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 