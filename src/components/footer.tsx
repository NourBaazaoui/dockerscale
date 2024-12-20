import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">DockerScale</h3>
            <p className="text-gray-400 leading-relaxed">
              Effortless Docker Execution at Scale with the power of AWS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-blue-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Testimonials"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-blue-500 pl-2">
              Legal
            </h4>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy"].map((legal) => (
                <li key={legal}>
                  <Link
                    href={`/${legal.replace(/\s+/g, "").toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {legal}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-blue-500 pl-2">
              Connect with Us
            </h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-400" />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400" />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400" />
              </Link>
              <Link href="#" className="hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-gray-400 hover:text-blue-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-blue-400 font-semibold">DockerScale</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
