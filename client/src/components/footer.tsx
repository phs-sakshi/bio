export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-600 text-sm mb-4 md:mb-0">
            © 2024 Sakshi Sharma. Academic Portfolio.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-slate-600">CV</a>
            <a href="https://github.com/phs-sakshi" className="text-slate-400 hover:text-slate-600">GitHub</a>
            <a href="https://linkedin.com/in/phs-sakshi" className="text-slate-400 hover:text-slate-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
