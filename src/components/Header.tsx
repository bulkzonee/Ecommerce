import { Button } from "@/components/ui/button";
import { Search, Menu, User } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Cart from "@/components/Cart";
import { gsapAnimations } from "@/lib/gsap";

const Header = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsapAnimations.headerEntry(logoRef.current);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 
                ref={logoRef}
                className="text-2xl font-black tracking-tight text-foreground hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                BULK<span className="text-primary animate-pulse-red">ZONE</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/categoria/oversized" className="nav-link">Oversized</a>
            <a href="/categoria/regata" className="nav-link">Regata</a>
            <a href="/categoria/camisas" className="nav-link">Camisas</a>
            <a href="/categoria/bermudas" className="nav-link">Bermudas</a>
            <a href="/categoria/straps" className="nav-link">Straps</a>
            <a href="/categoria/cintos" className="nav-link">Cintos</a>
            <a href="/categoria/acessorios" className="nav-link">Acessórios</a>
            <a href="/categoria/meme" className="nav-link">Meme</a>
            <a href="/categoria/anime" className="nav-link">Anime</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            {user ? (
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
            
            <Cart />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <nav className="grid grid-cols-2 gap-3">
              <a href="/categoria/oversized" className="nav-link">Oversized</a>
              <a href="/categoria/regata" className="nav-link">Regata</a>
              <a href="/categoria/camisas" className="nav-link">Camisas</a>
              <a href="/categoria/bermudas" className="nav-link">Bermudas</a>
              <a href="/categoria/straps" className="nav-link">Straps</a>
              <a href="/categoria/cintos" className="nav-link">Cintos</a>
              <a href="/categoria/acessorios" className="nav-link">Acessórios</a>
              <a href="/categoria/meme" className="nav-link">Meme</a>
              <a href="/categoria/anime" className="nav-link">Anime</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;