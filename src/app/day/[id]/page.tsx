"use client";

import { NextPage } from "next";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ReviewCard from "@/components/ReviewCard";
import data from "@/data.json";

export type Treview = {
  day: number;
  title: string;
  sentences: {
    english: string;
    korean: string;
  }[];
};

const Day: NextPage = () => {
  const { id } = useParams();

  const [review, setReview] = useState<Treview>();

  useEffect(() => {
    if (typeof id !== "string") return;

    setReview(data[parseInt(id, 10) - 1]);
  }, [id]);

  return (
    <main className="min-h-screen flex flex-col justify-start items-center py-24 px-12">
      <div className="w-full relative flex justify-center">
        <div className="absolute top-0 left-0">
          <Link href="/">
            <button className="btn-style">Back</button>
          </Link>
        </div>
        <div className="font-semibold mb-24 mt-2">Day {id}</div>
      </div>
      <ReviewCard />
    </main>
  );
};

export default Day;
