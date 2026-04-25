import { motion } from 'motion/react';
import { Footprints, Heart, Zap, MapPin, ChevronRight, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-emerald-600 font-bold text-xl">
            <Footprints className="w-8 h-8" />
            <span>Walk to Health</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link to="/" className="text-emerald-600 border-b-2 border-emerald-600 pb-1">Trang chủ</Link>
            <Link to="#" className="hover:text-emerald-600 transition-colors">Giới thiệu</Link>
            <Link to="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
            <Link to="#" className="hover:text-emerald-600 transition-colors">Cộng đồng</Link>
            <Link to="#" className="hover:text-emerald-600 transition-colors">Liên hệ</Link>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 text-sm text-gray-500 cursor-pointer">
              <span className="font-bold text-gray-900">VN</span>/EN
            </div>
            <Link to="/register" className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-emerald-200/50">
              Đăng nhập
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-sky-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8 z-10"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Mỗi bước chân, một khởi đầu mới cho <span className="text-emerald-600">sức khỏe của bạn.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Tham gia cộng đồng Walk to Health, theo dõi hành trình và khám phá kiến thức hữu ích để sống khỏe hơn mỗi ngày.
            </p>
            <Link to="/register" className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:shadow-emerald-200/50">
              Bắt đầu ngay
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000" 
                alt="Person walking in nature" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decal circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl font-bold inline-block relative">
              Khám phá Kiến thức Sức khỏe
              <div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-emerald-500/20 rounded-full"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <KnowledgeCard 
              icon={<Heart className="w-8 h-8 text-emerald-600" />}
              title="Lợi ích của việc đi bộ"
              description="Tìm hiểu cách đi bộ cải thiện sức khỏe tim mạch, giảm căng thẳng và nâng cao tinh thần."
            />
            <KnowledgeCard 
              icon={<Zap className="w-8 h-8 text-emerald-600" />}
              title="Kỹ thuật đi bộ hiệu quả"
              description="Nắm vững tư thế, nhịp thở và các kỹ thuật giúp tối ưu hóa việc luyện tập của bạn."
            />
            <KnowledgeCard 
              icon={<MapPin className="w-8 h-8 text-emerald-600" />}
              title="Lộ trình cho mọi cấp độ"
              description="Từ người mới bắt đầu đến vận động viên, chúng tôi có các lộ trình phù hợp với mục tiêu của bạn."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            © 2024 Walk to Health. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function KnowledgeCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-emerald-100/50 transition-all group"
    >
      <div className="mb-6 p-4 bg-emerald-50 w-fit rounded-2xl group-hover:bg-emerald-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>
      <button className="flex items-center gap-1 text-emerald-600 font-bold hover:gap-2 transition-all">
        Xem chi tiết <ChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
