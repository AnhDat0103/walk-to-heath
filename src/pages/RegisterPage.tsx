import { motion } from 'motion/react';
import { Eye, ChevronDown, Footprints } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(10000);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <Link to="/" className="flex items-center justify-center gap-2 text-emerald-700 font-bold text-2xl mb-12">
          <Footprints className="w-10 h-10" />
          <span>Walk to Health</span>
        </Link>
        
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Đăng ký và Thiết lập mục tiêu
          </h1>

          {/* Progress Bar */}
          <div className="relative mb-12 flex justify-between">
            <div className={`flex flex-col items-center gap-2 z-10`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 1 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                ✓
              </div>
              <span className={`text-xs font-medium ${step === 1 ? 'text-emerald-700' : 'text-gray-400'}`}>Bước 1: Đăng ký</span>
            </div>
            
            <div className="absolute top-3 left-0 right-0 h-[2px] bg-gray-100 -z-0">
               <div className={`h-full bg-emerald-500 transition-all duration-500 ${step === 2 ? 'w-full' : 'w-0'}`}></div>
            </div>

            <div className={`flex flex-col items-center gap-2 z-10`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 2 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                2
              </div>
              <span className={`text-xs font-medium ${step === 2 ? 'text-emerald-700' : 'text-gray-400'}`}>Bước 2: Thiết lập mục tiêu</span>
            </div>
          </div>

          {step === 1 ? (
             <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
              onSubmit={(e) => { e.preventDefault(); setStep(2); }}
             >
               <div className="space-y-1">
                 <input 
                  type="email" 
                  placeholder="Email của bạn"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  required
                 />
               </div>
               <div className="relative">
                 <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Mật khẩu"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  required
                 />
                 <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors"
                 >
                   <Eye className="w-5 h-5" />
                 </button>
               </div>
               <button 
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-1"
               >
                 Đăng ký ngay
               </button>
             </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Chiều cao (cm)</label>
                  <div className="relative">
                    <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 pointer-events-none">
                      <option>170</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Cân nặng (kg)</label>
                  <div className="relative">
                     <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option>70</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-700 ml-2">Mục tiêu</label>
                <div className="flex gap-8 px-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-emerald-500 transition-colors relative">
                      <input type="radio" name="goal" defaultChecked className="hidden peer" />
                      <div className="w-3 h-3 bg-emerald-500 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-sm font-medium">Giảm cân</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-emerald-500 transition-colors relative">
                      <input type="radio" name="goal" className="hidden peer" />
                      <div className="w-3 h-3 bg-emerald-500 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-sm font-medium">Duy trì sức khỏe</span>
                  </label>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between px-2">
                  <label className="text-sm font-bold text-gray-700">Mục tiêu bước đi mỗi ngày</label>
                  <div className="bg-gray-50 px-4 py-1 rounded-lg border border-gray-100 font-bold text-emerald-600">
                    {dailyGoal.toLocaleString()}
                  </div>
                </div>
                <input 
                  type="range" 
                  min="3000" 
                  max="20000" 
                  step="500" 
                  value={dailyGoal}
                  onChange={(e) => setDailyGoal(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <button 
                onClick={() => navigate('/dashboard')}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all transform hover:-translate-y-1 mt-4"
               >
                 Tiếp tục
               </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
