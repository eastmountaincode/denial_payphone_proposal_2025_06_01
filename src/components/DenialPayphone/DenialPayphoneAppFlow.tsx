export default function DenialPayphoneAppFlow() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          App Flow
        </h1>
        <img
          src="/assets/physical/app_flow.png"
          alt="App Flow"
          className="w-full h-auto max-h-150 object-contain"
        />
      </div>
    </section>
  );
} 