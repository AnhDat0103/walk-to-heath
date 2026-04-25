import { motion } from 'motion/react';
import { Footprints, Calendar, Clock, MapPin, ChevronRight, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function LogDataPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Mini Nav */}
      <header className="bg-white border-b border-gray-100 flex items-center justify-between px-12 h-16 sticky top-0 z-20">
        <Link to="/dashboard" className="flex items-center gap-2 text-emerald-600 font-bold text-xl">
          Walk to Health
        </Link>
        <nav className="flex items-center gap-10 text-sm font-medium text-gray-600">
          <Link to="/dashboard" className="hover:text-emerald-700">Trang chủ</Link>
          <Link to="#" className="text-emerald-600 border-b-2 border-emerald-600 pb-1">Bảng điều khiển</Link>
          <Link to="/blog" className="hover:text-emerald-700">Kiến thức sức khỏe</Link>
          <div className="flex items-center gap-2 text-gray-900 bg-gray-100/50 p-2 px-3 rounded-full border border-gray-100">
             <User className="w-4 h-4" />
             <span>Chào, Minh</span>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <h1 className="text-4xl font-extrabold text-center tracking-tight">Nhập dữ liệu đi bộ</h1>

          <div className="bg-white border border-gray-100 rounded-[40px] shadow-xl p-8 md:p-10 flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Số bước (Steps)</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors">
                    <Footprints className="w-5 h-5" />
                  </div>
                  <input 
                    type="number" 
                    placeholder="8500"
                    className="w-full pl-12 p-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-emerald-100 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Thời gian (Duration)</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="HH:MM"
                      className="w-full pl-12 p-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-emerald-100 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Khoảng cách (km)</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <input 
                      type="number" 
                      step="0.1"
                      placeholder="0.0"
                      className="w-full pl-12 p-4 bg-gray-50 border border-transparent rounded-2xl focus:outline-none focus:bg-white focus:border-emerald-100 focus:ring-4 focus:ring-emerald-500/5 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <button 
                onClick={() => navigate('/dashboard')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1"
              >
                Lưu dữ liệu
              </button>
            </div>

            {/* Summary Panel */}
            <div className="md:w-64 bg-gray-50/50 rounded-3xl p-6 border border-gray-100/50 space-y-6">
              <h3 className="font-bold text-gray-800">Tóm tắt ngày hôm nay:</h3>
              
              <div className="space-y-6">
                <SummaryItem label="8,500 bước" progress={85} />
                <SummaryItem label="1:15 giờ" progress={60} />
                <SummaryItem label="5.2 km" progress={50} />
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="bg-emerald-50 p-4 rounded-2xl">
                  <p className="text-[10px] text-emerald-800 font-bold uppercase tracking-widest mb-1">Thành tích</p>
                  <p className="text-xs text-emerald-700 leading-relaxed font-medium">Bạn đã hoàn thành 85% mục tiêu hàng ngày. Tiếp tục cố gắng nhé!</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="py-12 border-t border-gray-100 text-center">
         <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <Link to="#" className="hover:text-emerald-600">Về chúng tôi</Link>
            <Link to="#" className="hover:text-emerald-600">Liên hệ</Link>
            <Link to="#" className="hover:text-emerald-600">Chính sách bảo mật</Link>
         </div>
      </footer>
    </div>
  );
}

function SummaryItem({ label, progress }: { label: string, progress: number }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-bold text-gray-600">{label}</p>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-emerald-500 rounded-full"
        />
      </div>
    </div>
  );
}
