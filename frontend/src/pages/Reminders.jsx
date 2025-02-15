import React from "react";
import { Link } from "react-router-dom";
import {ArrowRight} from 'lucide-react'
export default function HealthScore() {
  return (
    <>
    <div className="container mx-auto px-5 py-20">
      <Link
        to="https://ayush-gajera.github.io/reminders-for-Vaccinations-Annual-health-check-ups/"
        className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg text-white mt-4"
      >
        AI-based-reminders <ArrowRight className="ml-2" />
      </Link>
    </div>
    </>
  );
}