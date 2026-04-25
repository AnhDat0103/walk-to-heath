import { motion } from 'motion/react';
import { Footprints, Calendar, User, ChevronLeft, Facebook, Instagram, Youtube, Hash } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function BlogPostPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-emerald-600 font-bold text-xl">
             <Footprints className="w-8 h-8" />
            <span>Walk to Health</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-emerald-600">Trang chủ</Link>
            <Link to="#" className="hover:text-emerald-600">Tính năng</Link>
            <Link to="/blog" className="text-emerald-600 border-b-2 border-emerald-600 pb-1">Blog</Link>
            <Link to="#" className="hover:text-emerald-600">Cộng đồng</Link>
          </nav>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto">
        <Link to="/blog" className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 font-bold text-sm mb-12 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Quay lại Blog
        </Link>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500 bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <span className="text-emerald-600 uppercase">Lợi ích sức khỏe</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <div className="flex items-center gap-1"><User className="w-3 h-3" /> Nguyễn Văn A</div>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 20/04/2024</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">5 Lợi ích bất ngờ của việc đi bộ mỗi ngày</h1>
          </div>

          <div className="rounded-[40px] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c64b5913?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Man walking"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4">1. Cải thiện sức khỏe tim mạch</h2>
              <p className="leading-relaxed">Khám phá cách đi bộ hàng ngày cải thiện đáng kể hoạt động của tim mạch, giảm nguy cơ mắc bệnh tim, đột quỵ và giúp tăng cường hệ tuần hoàn máu trong tế bào nội mô.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cải thiện sức khỏe tim mạch, giúp bơm máu đều đặn hơn cho cơ thể</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4">2. Giảm căng thẳng và lo âu</h2>
              <p className="leading-relaxed">Hướng dẫn chi tiết ưu thế về nhịp thở, kỹ thuật hít thở sâu để giảm cortisol - hormone căng thẳng và cải thiện trạng thái tinh thần.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cải thiện sức khỏe tâm trí</li>
                <li>Giảm căng thẳng và lo âu</li>
              </ul>
            </div>

            <div className="space-y-4">
               <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-emerald-500 pl-4">3. Tăng cường năng lượng</h2>
               <p className="leading-relaxed">Đi bộ giúp tăng tốc độ trao đổi chất, giúp bạn cảm thấy tỉnh táo và tràn đầy sinh lực suốt cả ngày dài.</p>
            </div>
          </div>

          {/* Related Posts */}
          <div className="pt-20 border-t border-gray-100">
             <h3 className="text-xl font-bold mb-8">Bài viết liên quan</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <Link key={i} to="/blog" className="group space-y-4">
                    <div className="h-32 rounded-2xl overflow-hidden">
                      <img src={`https://images.unsplash.com/photo-${1516733725897 + i}-1aa73b87c8e8?auto=format&fit=crop&q=80&w=300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h4 className="font-bold text-sm leading-snug group-hover:text-emerald-600 transition-colors">Cách chọn giày đi bộ đúng chuẩn cho người mới</h4>
                  </Link>
                ))}
             </div>
          </div>
        </motion.article>
      </main>

      <footer className="bg-emerald-950 text-white py-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-12 text-center">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-2xl">
            <Footprints className="w-8 h-8" />
            Walk to Health
          </div>
          <p className="text-emerald-100/50 max-w-md text-sm">Vì sức khỏe cộng đồng. Hãy cùng nhau xây dựng thói quen đi bộ mỗi ngày để sống lâu hơn, khỏe hơn.</p>
          <div className="flex gap-6">
            <Facebook className="hover:text-emerald-400 cursor-pointer transition-colors" />
            <Instagram className="hover:text-emerald-400 cursor-pointer transition-colors" />
            <Youtube className="hover:text-emerald-400 cursor-pointer transition-colors" />
          </div>
          <div className="pt-12 border-t border-white/10 w-full text-xs text-white/30">
            © 2024 Walk to Health. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
