import { FC, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { useDataUser } from "../../hooks/useDataUser";
import { useUrl } from "../../hooks/useUrl";

const Header: FC = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { getUserFirstName } = useDataUser();
  const { getBaseUrl } = useUrl();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  const logout = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    window.localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-primary z-50 text-white border-b border-gray-200 fixed top-0 left-0 w-full flex justify-between items-center px-4 h-16">
      {/* Logo do Sistema */}
      <div className="flex items-center">
        <img src={getBaseUrl('src/assets/images/logo.png')} alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-xl font-bold">ContactBook</span>
      </div>

      {/* Nome do Usuário e Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center space-x-2"
          onClick={toggleDropdown}
        >
          <span className="hidden md:block">{getUserFirstName()}</span>
          <MdArrowDropDown color="#fff" size={20} />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              Perfil
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
              onClick={(e) => logout(e)}
            >
              Sair
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
