export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70 py-8 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} Novel Reader. Built for premium vertical reading.</p>
    </footer>
  );
}
