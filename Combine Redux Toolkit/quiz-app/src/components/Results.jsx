import { Trophy } from "lucide-react";

const Results = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Header */}
        <div className="mb-8">
          <div
            className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6`}
          >
            <Trophy className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
