import { Link } from "@remix-run/react";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard 
          title="Users" 
          count="1,234" 
          link="/admin/users"
          icon={<UsersIcon />}
        />
        <DashboardCard 
          title="Courses" 
          count="56" 
          link="/admin/courses"
          icon={<CoursesIcon />}
        />
        <DashboardCard 
          title="Analytics" 
          count="+12%"
          link="/admin/analytics"
          icon={<AnalyticsIcon />}
        />
      </div>
    </div>
  );
}

function DashboardCard({ title, count, link, icon }) {
  return (
    <Link to={link} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h2>
          <p className="text-2xl font-bold mt-2">{count}</p>
        </div>
        <div className="text-gray-400 dark:text-gray-500">
          {icon}
        </div>
      </div>
    </Link>
  );
}

function UsersIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}

function CoursesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}
