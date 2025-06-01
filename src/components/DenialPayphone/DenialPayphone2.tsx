export default function DenialPayphone2() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex items-center justify-between max-w-6xl px-6 w-full">
        {/* Text Section - Left */}
        <div className="flex-1 pr-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
            Physical Payphone
          </h1>
          <p className="text-2xl text-gray-700">
            Components: two buttons and a light
          </p>
        </div>

        {/* Image Section - Right */}
        <div className="flex-1">
          <img
            src="/assets/physical/payphone.png"
            alt="Physical Payphone"
            className="w-full h-auto max-h-180"
          />
        </div>
      </div>
    </section>
  );
} 