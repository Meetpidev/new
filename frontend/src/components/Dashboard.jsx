import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Settings,
  LogOut,
  Activity,
  Target,
  Trophy,
  TrendingUp,
  Users,
  Clock,
  Mail,
  Phone,
  MapPin,
  Shield,
  CreditCard,
  Globe,
  CheckCircle,  // For the green tick
  XCircle        // For the red cross
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { Link } from 'react-router-dom';
import { getDoctors } from '../apis/Doctor/doctor.js'; // Import doctor service

// Sample data for charts
const visitData = [
  { name: 'Mon', visits: 20 },
  { name: 'Tue', visits: 35 },
  { name: 'Wed', visits: 45 },
  { name: 'Thu', visits: 30 },
  { name: 'Fri', visits: 55 },
  { name: 'Sat', visits: 40 },
  { name: 'Sun', visits: 25 }
];

const progressData = [
  { name: 'Week 1', progress: 65 },
  { name: 'Week 2', progress: 72 },
  { name: 'Week 3', progress: 78 },
  { name: 'Week 4', progress: 85 }
];

const Stats = ({ icon: Icon, label, value, change }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-xl shadow-md"
  >
    <div className="flex items-center justify-between">
      <div className="bg-indigo-100 p-3 rounded-lg">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change > 0 ? '+' : ''}{change}%
      </span>
    </div>
    <h3 className="text-xl font-semibold mt-4">{value}</h3>
    <p className="text-gray-500 text-sm">{label}</p>
  </motion.div>
);

const Overview = () => (
  <div>
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold mb-8"
    >
      Welcome {localStorage.getItem('name')}
    </motion.h1>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Stats icon={Users} label="Total Visits" value="486" change={12} />
      <Stats icon={Target} label="Goals Completed" value="24" change={8} />
      <Stats icon={Trophy} label="Achievements" value="12" change={-3} />
      <Stats icon={Clock} label="Active Time" value="32h" change={15} />
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-lg font-semibold mb-4">Weekly Visits</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={visitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="visits" stroke="#4F46E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-md"
      >
        <h3 className="text-lg font-semibold mb-4">Monthly Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="progress" fill="#4F46E5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>

    {/* Recent Activity */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-green-500 mr-3" />
            <span>Completed workout session</span>
          </div>
          <span className="text-sm text-gray-500">2 hours ago</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Trophy className="h-5 w-5 text-yellow-500 mr-3" />
            <span>Achieved new milestone</span>
          </div>
          <span className="text-sm text-gray-500">Yesterday</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Target className="h-5 w-5 text-blue-500 mr-3" />
            <span>Updated fitness goals</span>
          </div>
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
      </div>
    </motion.div>
  </div>
);

const Profile = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-8"
  >
    <h2 className="text-3xl font-bold">Profile Settings</h2>

    {/* Profile Info */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-col space-y-6 mb-6">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{localStorage.getItem('name')}</h3>
            <p className="text-gray-500">Premium Member</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{localStorage.getItem('email') }</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{localStorage.getItem('phone') }</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{localStorage.getItem('address') }</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Timezone</p>
                <p className="font-medium">EST (UTC-5)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const SettingsComponent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-8"
  >
    <h2 className="text-3xl font-bold">Account Settings</h2>

    {/* Security Settings */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Security</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium">Password</p>
              <p className="text-sm text-gray-500">Last changed 3 months ago</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg">Update</button>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-gray-500">Enabled</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg">Configure</button>
        </div>
      </div>
    </div>

    {/* Billing Settings */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Billing</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <CreditCard className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium">Other</p>
              <p className="text-sm text-gray-500">Additional settings</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg">Edit</button>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Activity className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium">Subscription Plan</p>
              <p className="text-sm text-gray-500">Premium Monthly</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg">Change Plan</button>
        </div>
      </div>
    </div>
  </motion.div>
);

const Doctors = ({ doctors }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-xl shadow-md"
  >
    <h3 className="text-lg font-semibold mb-4">Available Doctors</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.length > 0 ? (
        doctors.map(doctor => (
          <motion.div
            key={doctor._id}
            className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-md font-semibold">{doctor.name.firstName} {doctor.name.lastName}</h4>
              {/* Assuming 'available' is a boolean field in your doctor object */}
              {doctor.availability.avail ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
            <p className="text-sm text-gray-600">Specialist: {doctor.specialist}</p>
            <p className="text-sm text-gray-600">Location: {doctor.location.city}, {doctor.location.state}</p>
            <p className="text-sm text-gray-600">Phone: {doctor.contact.phone}</p>
            <p className="text-sm text-gray-600">Email: {doctor.contact.email}</p>
             {/* Take Appointment Button */}
            <Link to={`/appointment/${doctor._id}`} className="inline-block mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Take Appointment
            </Link>
          </motion.div>
        ))
      ) : (
        <p>There are no doctors available.</p>
      )}
    </div>
  </motion.div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [doctors, setDoctors] = useState([]);  // State for doctors

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
        console.log(doctors)
      } catch (error) {
        console.error('Error fetching doctors:', error);
        // Handle error appropriately (e.g., display an error message)
      }
    };

    fetchDoctors();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile />;
      case 'doctors':
        return <Doctors doctors={doctors} />;
      case 'settings':
        return <SettingsComponent />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 mt-[4rem]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-64 bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex flex-col space-y-4">
              <div
                className={`flex items-center p-3 rounded-lg cursor-pointer ${activeTab === 'overview' ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
                onClick={() => setActiveTab('overview')}
              >
                <Activity className="h-5 w-5 text-indigo-600 mr-3" />
                <span>Overview</span>
              </div>
              <div
                className={`flex items-center p-3 rounded-lg cursor-pointer ${activeTab === 'profile' ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
                onClick={() => setActiveTab('profile')}
              >
                <User className="h-5 w-5 text-indigo-600 mr-3" />
                <span>Profile</span>
              </div>
              <div
                className={`flex items-center p-3 rounded-lg cursor-pointer ${activeTab === 'doctors' ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
                onClick={() => setActiveTab('doctors')}
              >
                <Users className="h-5 w-5 text-indigo-600 mr-3" />
                <span>Doctors</span>
              </div>
              <div
                className={`flex items-center p-3 rounded-lg cursor-pointer ${activeTab === 'settings' ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="h-5 w-5 text-indigo-600 mr-3" />
                <span>Settings</span>
              </div>
              <Link to='/'>
                <div className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-50">
                  <LogOut className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>Logout</span>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;