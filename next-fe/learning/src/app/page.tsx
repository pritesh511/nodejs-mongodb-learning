import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <ul className="flex items-center py-10">
        <li className="mx-4">
          <Link href="/todo" className="p-4 rounded-lg underline bg-orange-700">
            Todo App
          </Link>
        </li>
        <li className="mx-12">
          <Link href="/todo" className="p-4 rounded-lg underline bg-orange-700">
            Blog Admin
          </Link>
        </li>
        <li className="mx-12">
          <Link href="/todo" className="p-4 rounded-lg underline bg-orange-700">
            Blog
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
