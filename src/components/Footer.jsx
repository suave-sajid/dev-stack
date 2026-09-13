import logo from "../assets/logo-text.png"

export default function Footer() {
  return (
    <footer className="container m-auto bg-white border-t border-gray-100 px-6 py-10 mt-20 ">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div >
              <span className="text-white text-xs font-bold"><img src={logo} alt="Dev Stack logo" /></span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern web apps.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 tracking-wide mb-3">
            PRODUCT
          </h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
            <li><a href="#" className="hover:text-gray-900">Projects</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 tracking-wide mb-3">
            COMPANY
          </h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 tracking-wide mb-3">
            LEGAL
          </h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-300 shadow-lg flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-600">GitHub</a>
          <a href="#" className="hover:text-gray-600">Twitter</a>
          <a href="#" className="hover:text-gray-600">LinkedIn</a>
        </div>
        <span>© 2024 Dev Stack. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-600">Privacy</a>
          <a href="#" className="hover:text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}