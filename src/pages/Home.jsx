import React from 'react';
import { Link } from 'react-router-dom';
import { getAllBookmarks } from '../utils/bookmarkData';

const Home = () => {
  const bookmarks = getAllBookmarks();

  const part1 = bookmarks.slice(0, 5);
  const part2 = bookmarks.slice(5, 10);

  const BookmarkGrid = ({ items }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
      {items.map((bookmark) => (
        <Link
          key={bookmark.id}
          to={`/bookmark/${bookmark.id}`}
          className="group"
        >
          <div className="relative">

            {/* Kính lúp */}
            <div className="absolute top-2 right-2 z-20 bg-white/80 p-1.5 rounded-full backdrop-blur-sm shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            <img
              src={bookmark.front}
              alt={`Bookmark ${bookmark.id}`}
              className="
                h-[300px]
                w-auto
                object-contain
                drop-shadow-xl
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:-translate-y-2
              "
            />
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-transparent py-4 px-4">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="bg-white/80 backdrop-blur-md shadow-md rounded-xl px-6 py-4 text-center">

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM 1930 - 1945
          </h1>

          <p className="text-sm text-gray-600 mt-1">
            Nhóm 2 - VNR202
          </p>

          <span className="text-xs text-gray-400">
            Bộ Bookmark
          </span>

        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">

        {/* Phần 1 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8 pl-3 border-l-4 border-blue-500">
            Phần 1
          </h2>

          <BookmarkGrid items={part1} />
        </section>

        {/* Phần 2 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-8 pl-3 border-l-4 border-purple-500">
            Phần 2
          </h2>

          <BookmarkGrid items={part2} />
        </section>

      </div>
    </div>
  );
};

export default Home;