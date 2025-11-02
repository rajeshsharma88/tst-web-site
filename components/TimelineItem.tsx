import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, index }) => {
  const isOdd = index % 2 !== 0;

  return (
    <div className="md:grid md:grid-cols-2 md:gap-8 relative items-center">
      {/* Content */}
      <div className={`mb-4 md:mb-0 ${isOdd ? 'md:order-2 md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
        <h3 className="text-xl font-bold text-primary">{year}</h3>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      
      {/* Marker */}
      <div className={`${isOdd ? 'md:order-1 md:pr-8' : 'md:pl-8'}`}>
        <div className="w-8 h-8 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 top-0 hidden md:flex items-center justify-center text-white font-bold">
          {index + 1}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
