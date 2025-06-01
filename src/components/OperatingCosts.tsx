export default function OperatingCosts() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          Operating Expenses
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Backend Cost Table */}
          <div className="relative">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Backend Cost</h2>
            <table className="w-full border-collapse border border-gray-300 mb-4 text-gray-900">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold">Service</th>
                  <th className="border border-gray-300 px-4 py-3 text-right font-bold">Cost (estimate)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-left">Whisper (transcribe 2 min)</td>
                  <td className="border border-gray-300 px-4 py-3 text-right">$0.012</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-left">GPT-4o (review)</td>
                  <td className="border border-gray-300 px-4 py-3 text-right">$0.004</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-left">Email</td>
                  <td className="border border-gray-300 px-4 py-3 text-right">$0.0001</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-left">Audio storage (S3)</td>
                  <td className="border border-gray-300 px-4 py-3 text-right">$0.00002</td>
                </tr>
                <tr className="bg-gray-800 text-white font-bold">
                  <td className="border border-gray-300 px-4 py-3 text-left">Total (per email interaction)</td>
                  <td className="border border-gray-300 px-4 py-3 text-right">$0.0161</td>
                </tr>
              </tbody>
            </table>
            
            <div className="text-lg font-semibold space-y-2 text-gray-900">
              <p>• <strong>1,000 emails captured:</strong> ~$16</p>
              <p>• <strong>10,000 emails captured:</strong> ~$161</p>
            </div>

            {/* Good ROI Image - positioned relative to this section */}
            <img
              src="/assets/digital/good_roi.png"
              alt="Good ROI"
              className="absolute"
              style={{
                top: '310px',
                right: '0px',
                width: '420px',
                height: 'auto',
                zIndex: 10
              }}
            />
          </div>

          {/* Frontend Cost Table */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frontend Cost</h2>
            <p className="text-lg text-gray-900">Essentially Free</p>
          </div>
        </div>
      </div>
    </section>
  );
} 