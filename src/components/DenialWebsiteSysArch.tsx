export default function DenialWebsiteSysArch() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'HeavyItalic, Impact, Arial Black, sans-serif' }}>
          System Architecture
        </h1>
        <img
          src="/assets/digital/system_architecture.png"
          alt="System Architecture"
          className="object-contain w-full h-full max-h-96 px-6"
        />
      </div>
    </section>
  );
} 