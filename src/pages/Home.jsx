import React from 'react';
import { Link } from 'react-router-dom';
import { getAllBookmarks } from '../utils/bookmarkData';

const Home = () => {
  const bookmarks = getAllBookmarks();
  const part1 = bookmarks.slice(0, 5);
  const part2 = bookmarks.slice(5, 10);

  const BookmarkGrid = ({ items }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {items.map((bookmark) => (
        <Link key={bookmark.id} to={`/bookmark/${bookmark.id}`} className="block group">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-md hover:ring-2 hover:ring-blue-400 relative">

            {/* Magnifying Glass Icon */}
            <div className="absolute top-2 right-2 z-20 bg-white/80 p-1.5 rounded-full backdrop-blur-sm shadow-sm group-hover:bg-blue-50 transition-colors pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>

            <div className="aspect-[3/4] p-2 bg-gray-50 flex items-center justify-center">
              <img
                src={bookmark.front}
                alt={`Bookmark ${bookmark.id}`}
                className="max-h-full max-w-full object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-transparent py-4 px-4">

      {/* Thanh tiêu đề */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="bg-white/80 backdrop-blur-md shadow-md rounded-xl px-6 py-4 text-center">

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Tư Bản Tài Chính và Quyền Lực
          </h1>

          <p className="text-sm text-gray-600 mt-1">
            Nhóm 5 - EL1801
          </p>

          <span className="text-xs text-gray-400">
            Bộ Bookmark
          </span>

        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 pl-1 border-l-4 border-blue-500">
            Phần 1
          </h2>
          <BookmarkGrid items={part1} />
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 pl-1 border-l-4 border-purple-500">
            Phần 2
          </h2>
          <BookmarkGrid items={part2} />
        </section>

      </div>
    </div>
  );
};

export default Home;  
