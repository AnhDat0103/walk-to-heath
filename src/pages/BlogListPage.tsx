import { motion } from 'motion/react';
import { Footprints, Search, User, ChevronRight, Facebook, Instagram, Youtube, Hash } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ["Tất cả", "Lợi ích sức khỏe", "Kỹ thuật đi bộ", "Lộ trình luyện tập"];

const posts = [
  {
    id: 1,
    title: "5 Lợi ích Bất Ngờ Của Việc Đi Bộ Mỗi Ngày",
    excerpt: "Khám phá cách đi bộ hàng ngày cải thiện sức khỏe tim mạch, giảm căng thẳng và tăng cường năng lượng của bạn.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c64b5913?auto=format&fit=crop&q=80&w=600",
    category: "Lợi ích sức khỏe",
  },
  {
    id: 2,
    title: "Tư Thế Đi Bộ Chuẩn Để Tránh Chấn Thương",
    excerpt: "Hướng dẫn chi tiết về tư thế cơ thể, sải chân và cách thở để tối ưu hiệu quả luyện tập.",
    image: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?auto=format&fit=crop&q=80&w=600",
    category: "Kỹ thuật đi bộ",
  },
  {
    id: 3,
    title: "Lộ Trình Đi Bộ 30 Ngày Cho Người Mới Bắt Đầu",
    excerpt: "Một kế hoạch luyện tập tăng dần giúp bạn xây dựng thói quen đi bộ bền vững trong một tháng.",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=600",
    category: "Lộ trình luyện tập",
  },
  {
    id: 4,
    title: "Lợi ích tâm thần khi đi bộ xuyên rừng",
    excerpt: "Đi bộ trong thiên nhiên mang lại nhiều lợi ích hơn bạn nghĩ. Tìm hiểu lý do tại sao.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600",
    category: "Lợi ích sức khỏe",
  },
  {
    id: 5,
    title: "Chọn giày đi bộ như thế nào là đúng?",
    excerpt: "Đừng để sai lầm khi chọn giày làm hỏng buổi tập của bạn. Những lưu ý cần biết.",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=600",
    category: "Kỹ thuật đi bộ",
  },
  {
    id: 6,
    title: "Sức mạnh của 10,000 bước mỗi ngày",
    excerpt: "Con số 10,000 bước có thực sự là mốc sức khỏe? Sự thực đằng sau huyền thoại.",
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600",
    category: "Lộ trình luyện tập",
  }
];

export default function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredPosts = activeCategory === "Tất cả" 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
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
          <Link to="/register" className="bg-emerald-700/10 text-emerald-700 hover:bg-emerald-700 hover:text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
            Đăng nhập
          </Link>
        </div>
      </header>

      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-sky-50 to-gray-50 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Trang Blog Kiến thức</h1>
          <p className="text-gray-600 text-lg">Hành trình đi bộ và kiến thức sức khỏe cho mọi người</p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${activeCategory === cat ? 'bg-emerald-700 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-100'}`}>{cat}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      <footer className="bg-emerald-900/5 py-12 border-t border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-sm font-medium text-gray-500">© 2024 Walk to Health</p>
          <div className="flex gap-4"><Facebook className="w-5 h-5 text-gray-400" /><Instagram className="w-5 h-5 text-gray-400" /><Youtube className="w-5 h-5 text-gray-400" /></div>
        </div>
      </footer>
    </div>
  );
}

interface BlogCardProps {
  post: any;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all h-full flex flex-col">
      <Link to={`/blog/${post.id}`} className="h-48 overflow-hidden"><img src={post.image} className="w-full h-full object-cover" /></Link>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[10px] font-bold text-emerald-600 uppercase mb-2">{post.category}</span>
        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="flex items-center gap-1 text-emerald-600 font-bold text-sm">Xem ngay <ChevronRight className="w-4 h-4" /></Link>
      </div>
    </motion.div>
  );
};
