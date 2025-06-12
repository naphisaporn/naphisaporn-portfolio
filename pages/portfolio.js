// pages/portfolio.js
export default function PortfolioPage() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">📂 Portfolio</h2>
        <p className="mb-4 text-gray-600">รวมผลงานการรีวิว คอนเทนต์ และโปรเจกต์เด่น ๆ</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <img src="/demo1.jpg" alt="demo1" className="rounded-md mb-2" />
            <h3 className="font-bold text-lg">Pet Lifestyle Vlog</h3>
            <p className="text-sm text-gray-500">คอนเทนต์พา Django หมาดื้อ ไปเที่ยวคาเฟ่</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <img src="/demo2.jpg" alt="demo2" className="rounded-md mb-2" />
            <h3 className="font-bold text-lg">UX/UI for Pet App</h3>
            <p className="text-sm text-gray-500">ดีไซน์แอปหาคู่สำหรับสัตว์เลี้ยง 😆</p>
          </div>
        </div>
      </main>
    );
  }
  