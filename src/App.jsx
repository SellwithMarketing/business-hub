function App() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 flex flex-col items-center">
      {/* Test visual para saber si Tailwind y breakpoints funcionan */}
      <div className="bg-green-500 text-white p-4 text-center w-full lg:bg-purple-700">
        Esto debería verse verde en móvil y morado en desktop.
      </div>

      {/* Logo */}
      <div className="mb-6 mt-8">
        <img
          src="/logo.png"
          alt="Sell with Marketing logo"
          style={{ width: '250px', height: 'auto' }}
        />
      </div>

      {/* Título */}
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-black mb-10">
        SELL WITH MARKETING BUSINESS HUB
      </h1>

      {/* Botones */}
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className="py-10 rounded-md text-white text-center font-bold text-xl shadow hover:scale-105 transition"
            style={{ backgroundColor: '#039dcc' }}
          >
            People
          </div>
          <div
            className="py-10 rounded-md text-white text-center font-bold text-xl shadow hover:scale-105 transition"
            style={{ backgroundColor: '#f03302' }}
          >
            Activities
          </div>
          <div
            className="py-10 rounded-md text-white text-center font-bold text-xl shadow hover:scale-105 transition"
            style={{ backgroundColor: '#f87802' }}
          >
            Customers
          </div>
          <div
            className="py-10 rounded-md text-white text-center font-bold text-xl shadow hover:scale-105 transition"
            style={{ backgroundColor: '#014da1' }}
          >
            Finances
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
