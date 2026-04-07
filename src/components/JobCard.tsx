import { Building, MapPin, Clock, DollarSign } from 'lucide-react';

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    posted: string;
    salary: string;
    logo: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-xl">
            <span className="text-3xl">{job.logo}</span>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h4>
            <div className="flex items-center gap-4 text-gray-600 mb-2">
              <div className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">{job.type}</span>
              <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm flex items-center gap-1">
                <DollarSign className="h-3 w-3" />
                {job.salary}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {job.posted}
              </span>
            </div>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium">
          التقديم الآن
        </button>
      </div>
    </div>
  );
}