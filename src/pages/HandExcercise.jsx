import React from "react";
import { Link } from "react-router-dom";
import {ArrowRight} from 'lucide-react'
export default function Excercise() {
  return (
    <>
    <div className="container mx-auto px-5 py-20">
      <Link
        to="https://huggingface.co/spaces/prince22/Hand-exercise-detection-and-correction-app"
        className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg text-white mt-4"
      >
        Hand Excercise <ArrowRight className="ml-2" />
      </Link>
    </div>
    </>
  );
}
