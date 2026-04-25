import { motion } from 'motion/react';
import { Footprints, Home, BarChart2, BookOpen, User, Settings, LogOut, Flame, Target, Zap, ChevronRight } from 'lucide-react';
import React, { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';

const data = [
  { day: 'T2', steps: 5000 },
  { day: 'T3', steps: 6000 },
  { day: 'T4', steps: 8000 },
  { day: 'S5', steps: 7000 },
  { day: 'T6', steps: 9000 },
  { day: 'Đờ', steps: 8000 },
  { day: 'CN', steps: 10000 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col p-6 fixed h-full z-20">
        <Link to="/" className="flex items-center gap-2 text-emerald-600 font-bold text-xl mb-12">
          <Footprints className="w-8 h-8" />
          <span>Walk to Health</span>
        </Link>

        <nav className="flex-1 space-y-2">
          <SidebarItem icon={<Home />} label="Trang chủ" active onClick={() => navigate('/dashboard')} />
          <SidebarItem icon={<BarChart2 />} label="Tiến trình" onClick={() => {}} />
          <SidebarItem icon={<BookOpen />} label="Kiến thức" onClick={() => navigate('/blog')} />
          <SidebarItem icon={<User />} label="Hồ sơ" onClick={() => {}} />
        </nav>

        <div className="pt-6 border-t border-gray-100 space-y-2">
          <SidebarItem icon={<Settings />} label="Cài đặt" onClick={() => {}} />
          <SidebarItem icon={<LogOut />} label="Đăng xuất" onClick={() => navigate('/')} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Bảng điều khiển sức khỏe</h1>
          <div className="flex items-center gap-3 bg-white p-2 px-4 rounded-full border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
              M
            </div>
            <span className="text-sm font-medium">Chào, Minh</span>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            label="Số bước hôm nay" 
            value="6,000" 
            sub="Mục tiêu: 10,000"
            progress={60}
          />
          <StatCard 
            label="Chuỗi hiện tại" 
            value="12 ngày" 
            sub="Giữ vững!" 
            icon={<Flame className="text-orange-500" />}
          />
          <StatCard 
            label="Calo đã đốt cháy" 
            value="350 kcal" 
            sub="Dựa trên hoạt động" 
            icon={<Zap className="text-sky-500" />}
          />
        </div>

        {/* Chart Section */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold">Tiến trình đi bộ tuần này</h2>
            <Link to="/log" className="flex items-center gap-1 text-emerald-600 font-bold text-sm hover:gap-2 transition-all">
              Ghi chép dữ liệu <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 13 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 13 }}
                  tickFormatter={(val) => val >= 1000 ? `${val/1000}k` : val}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  cursor={{ stroke: '#10b981', strokeWidth: 2 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="steps" 
                  stroke="#10b981" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorSteps)" 
                  dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Value labels on chart peaks */}
          <div className="absolute top-[20%] left-[calc(14.28%*0+10%)] translate-x-[-50%] text-[10px] font-bold text-gray-500">5k</div>
          <div className="absolute top-[18%] left-[calc(14.28%*1+10%)] translate-x-[-50%] text-[10px] font-bold text-gray-500">6k</div>
          <div className="absolute top-[15%] left-[calc(14.28%*2+10%)] translate-x-[-50%] text-[10px] font-bold text-gray-500">8k</div>
          <div className="absolute top-[30%] left-[calc(14.28%*4+10%)] translate-x-[-50%] text-[10px] font-bold text-gray-500">9k</div>
          <div className="absolute top-[10%] left-[calc(14.28%*6+10%)] translate-x-[-50%] text-[10px] font-bold text-gray-900">10k</div>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-400">
          Bản quyền © 2024 Walk to Health. Mọi quyền được bảo lưu.
        </footer>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: ReactNode, label: string, active?: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all font-medium text-sm ${active ? 'bg-emerald-50 text-emerald-700' : 'text-gray-500 hover:bg-gray-50 hover:text-emerald-600'}`}
    >
      {active ? <motion.div layoutId="active-bg" className="absolute left-0 w-1 h-6 bg-emerald-500 rounded-full" /> : null}
      <span className={active ? 'text-emerald-600' : ''}>{icon}</span>
      {label}
    </button>
  );
}

function StatCard({ label, value, sub, icon, progress }: { label: string, value: string, sub: string, icon?: ReactNode, progress?: number }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-gray-500 text-sm font-medium">{label}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold tracking-tight">{value}</span>
        </div>
        <p className="text-xs text-gray-400 font-medium">{sub}</p>
      </div>
      {progress !== undefined ? (
        <div className="relative w-20 h-20">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="40" cy="40" r="32" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
            <motion.circle 
              cx="40" cy="40" r="32" stroke="#10b981" strokeWidth="8" fill="transparent"
              strokeDasharray={2 * Math.PI * 32}
              initial={{ strokeDashoffset: 2 * Math.PI * 32 }}
              animate={{ strokeDashoffset: (2 * Math.PI * 32) * (1 - progress / 100) }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] font-bold text-gray-500 leading-none">{progress*100}/</span>
            <span className="text-[10px] font-bold text-gray-400 leading-none line-through decoration-emerald-200">10000</span>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-gray-50 rounded-2xl">
          {icon}
        </div>
      )}
    </div>
  );
}
