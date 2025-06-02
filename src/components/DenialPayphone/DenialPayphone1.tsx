interface DenialPayphone1Props {
  // Add props here as needed
}

export default function DenialPayphone1({}: DenialPayphone1Props) {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          2 <span style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>→</span> Denial Payphone <span style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>(</span>physical<span style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>)</span>
        </h1>
      </div>
    </section>
  );
} 