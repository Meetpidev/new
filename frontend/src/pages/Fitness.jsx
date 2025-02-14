import React, { useState } from "react";
import {
    FaUser, FaVenusMars, FaCalendarAlt, FaRulerVertical, FaWeight, FaWalking, FaClock, FaChair
} from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Fitness = () => {
    const initialFormData = {
        nickname: "",
        sex: "",
        age: "",
        height: "",
        weight: "",
        targetStep: "",
        targetTime: "",
        standTarget: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [heightWeightData, setHeightWeightData] = useState(null);
    const [stepTimeData, setStepTimeData] = useState(null);
    const [standTargetData, setStandTargetData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let key in formData) {
            if (!formData[key]) {
                setError("All fields must be filled before submission.");
                return;
            }
        }
        setError("");
        setSubmitted(true);
        DummyData();
    };

    const DummyData = () => {
   
        const heightWeight = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Height (cm)',
                    data: Array.from({ length: 12 }, () => formData.height + Math.random() * 5 - 2.5), // Slight variation around initial height
                    fill: false,
                    backgroundColor: 'rgb(75, 192, 192)',
                    borderColor: 'rgba(75, 192, 192, 0.5)',
                },
                {
                    label: 'Weight (kg)',
                    data: Array.from({ length: 12 }, () => formData.weight + Math.random() * 3 - 1.5), // Slight variation around initial weight
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        };
        // Dummy data for Recharts
        const rechartsHeightWeightData = Array.from({ length: 12 }, (_, i) => ({
            month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
            height: formData.height + Math.random() * 5 - 2.5,
            weight: formData.weight + Math.random() * 3 - 1.5,
        }));
        const rechartsStepTimeData = Array.from({ length: 12 }, (_, i) => ({
            month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
            steps: formData.targetStep + Math.random() * 500 - 250,
            time: formData.targetTime + Math.random() * 3 - 1.5,
        }));
        const rechartsStandTargetData = Array.from({ length: 12 }, (_, i) => ({
            month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
            standTarget: formData.standTarget + Math.random() * 5 - 2.5,
        }));
        setHeightWeightData(rechartsHeightWeightData);
        setStepTimeData(rechartsStepTimeData);
        setStandTargetData(rechartsStandTargetData)
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setSubmitted(false);
        setHeightWeightData(null); 
        setStepTimeData(null);
        setStandTargetData(null)
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold text-gray-800 text-center mb-8">Fitness Dashboard</h1>

                {!submitted ? (
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Enter Your Details</div>
                                <form onSubmit={handleSubmit} className="mt-2">
                                    {error && <p className="text-red-600 text-sm">{error}</p>}
                                    <div className="grid gap-4">
                                        <div>
                                            <label htmlFor="nickname" className="block text-gray-700 text-sm font-bold mb-2">Nickname:</label>
                                            <input type="text" id="nickname" name="nickname" placeholder="Enter nickname" value={formData.nickname} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="sex" className="block text-gray-700 text-sm font-bold mb-2">Sex:</label>
                                            <select id="sex" name="sex" value={formData.sex} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
                                                <option value="">Select sex</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
                                            <input type="number" id="age" name="age" placeholder="Enter age" value={formData.age} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">Height (cm):</label>
                                            <input type="number" id="height" name="height" placeholder="Enter height (cm)" value={formData.height} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">Weight (kg):</label>
                                            <input type="number" id="weight" name="weight" placeholder="Enter weight (kg)" value={formData.weight} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="targetStep" className="block text-gray-700 text-sm font-bold mb-2">Target Steps:</label>
                                            <input type="number" id="targetStep" name="targetStep" placeholder="Enter target steps" value={formData.targetStep} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="targetTime" className="block text-gray-700 text-sm font-bold mb-2">Target Time (min):</label>
                                            <input type="number" id="targetTime" name="targetTime" placeholder="Enter target time (min)" value={formData.targetTime} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="standTarget" className="block text-gray-700 text-sm font-bold mb-2">Stand Target (hours):</label>
                                            <input type="number" id="standTarget" name="standTarget" placeholder="Enter stand target (hours)" value={formData.standTarget} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
                                            Generate Dashboard
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white shadow-md rounded-xl p-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Height and Weight Over Time</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={heightWeightData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="height" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="weight" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Steps & Time Over Time</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={stepTimeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="steps" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="time" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Stand Time Over Time</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={standTargetData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="standTarget" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">User Information</h2>
                            <div className="space-y-3 text-sm">
                                <p><FaUser className="inline mr-1" /> Nickname: <span className="font-medium">{formData.nickname}</span></p>
                                <p><FaVenusMars className="inline mr-1" /> Sex: <span className="font-medium">{formData.sex}</span></p>
                                <p><FaCalendarAlt className="inline mr-1" /> Age: <span className="font-medium">{formData.age}</span></p>
                                <p><FaRulerVertical className="inline mr-1" /> Height: <span className="font-medium">{formData.height} cm</span></p>
                                <p><FaWeight className="inline mr-1" /> Weight: <span className="font-medium">{formData.weight} kg</span></p>
                                <p><FaWalking className="inline mr-1" /> Target Step: <span className="font-medium">{formData.targetStep}</span></p>
                                <p><FaClock className="inline mr-1" /> Target Time: <span className="font-medium">{formData.targetTime} min</span></p>
                                <p><FaChair className="inline mr-1" /> Stand Target: <span className="font-medium">{formData.standTarget} h</span></p>
                            </div>
                        </div>

                        <div className="col-span-full flex justify-center">
                            <button onClick={handleReset} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
                                Edit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Fitness;
