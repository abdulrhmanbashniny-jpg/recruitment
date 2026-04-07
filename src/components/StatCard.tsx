interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm border text-center hover:shadow-md transition-shadow">
      <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}