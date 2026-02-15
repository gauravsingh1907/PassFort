const Footer = () => {
  return (
    <footer className="w-full mt-16 backdrop-blur-lg bg-black/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-2 text-center text-gray-400 text-sm ">
        © {new Date().getFullYear()} PassFort. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
