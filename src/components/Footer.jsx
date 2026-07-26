import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => (
  <footer className="relative py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
      <span className="text-lg font-semibold tracking-tighter text-white/80">joner</span>
      <span>&copy; {new Date().getFullYear()} Joner De Silva. All rights reserved.</span>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/yop-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition-colors"
        >
          <FiGithub className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/joner-de-silva-861575203/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition-colors"
        >
          <FiLinkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:desilvajoner95@gmail.com"
          aria-label="Email"
          className="hover:text-white transition-colors"
        >
          <FiMail className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
