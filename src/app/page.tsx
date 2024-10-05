"use client";

import {useState } from "react";

const data = [
  {
    id: 0,
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum obcaecati, fugiat atque modi nobis sed quam doloribus aspernatur nemo sunt cumque velit assumenda! Blanditiis iure vel atque doloribus mollitia.",
  },
  {
    id: 1,
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum obcaecati, fugiat atque modi nobis sed quam doloribus aspernatur nemo sunt cumque velit assumenda! Blanditiis iure vel atque doloribus mollitia.",
  },
  {
    id: 2,
    title: "Title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum obcaecati, fugiat atque modi nobis sed quam doloribus aspernatur nemo sunt cumque velit assumenda! Blanditiis iure vel atque doloribus mollitia.",
  },
  {
    id: 3,
    title: "Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum obcaecati, fugiat atque modi nobis sed quam doloribus aspernatur nemo sunt cumque velit assumenda! Blanditiis iure vel atque doloribus mollitia.",
  },
  {
    id: 4,
    title: "Title 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum obcaecati, fugiat atque modi nobis sed quam doloribus aspernatur nemo sunt cumque velit assumenda! Blanditiis iure vel atque doloribus mollitia.",
  },
  {
    id: 5,
    title: "Title 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum obcaecati, fugiat atque modi nobis sed quam doloribus aspernatur nemo sunt cumque velit assumenda! Blanditiis iure vel atque doloribus mollitia.",
  },
  {
    id: 6,
    title: "Title 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum obcaecati, fugiat atque modi nobis sed quam doloribus aspernatur nemo sunt cumque velit assumenda! Blanditiis iure vel atque doloribus mollitia.",
  },
  {
    id: 7,
    title: "Title 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum obcaecati, fugiat atque modi nobis sed quam doloribus aspernatur nemo sunt cumque velit assumenda! Blanditiis iure vel atque doloribus mollitia.",
  },
  {
    id: 8,
    title: "Title 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum obcaecati, fugiat atque modi nobis sed quam doloribus aspernatur nemo sunt cumque velit assumenda! Blanditiis iure vel atque doloribus mollitia.",
  },
];
export default function Home() {
  const PAGE_SIZE = 3;
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const [currentPage,setCurrentPage] = useState(1)
  const startIndex = (currentPage -1)*PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const articles = data.slice(startIndex, endIndex);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[3rem] bg-purple-600 items-center">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col bg-emerald-400 text-gray-600 h-[300px] w-[900px]"
          >
            <div>
              <p>{article.title}</p>
            </div>
            <div>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {[...Array(totalPages)].map((_, index) => (
          <input type="radio" key={index}
          aria-label={String(index+1)}
          checked={currentPage === index+1}
          name="options"
          onClick={()=>setCurrentPage(index+1)}
            />
        ))}
      </div>
    </div>
  );
}
