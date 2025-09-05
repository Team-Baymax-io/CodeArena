// Product Item Component
export default function ProductItem({ title }) {
  return (
    <div className="bg-white py-5 px-7 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 min-w-[200px] text-center">
      <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
    </div>
  );
}
