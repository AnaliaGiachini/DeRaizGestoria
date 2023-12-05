//This Component is the Navigation Menu. 
import { useState } from "react";
import { Link } from "react-scroll";

//Falta alinear los items en las pantallas pequeñas ver el hover y poner la x arriba de los items.

const Navbar = () => {
  // Estado local para controlar si el menú de navegación está abierto o cerrado en dispositivos móviles
  // Local state for controller if the navegation menu is open or close in the movil.
  const [isOpen, setIsOpen] = useState(false);

  const actionMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-rose-50 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-center">
        <div className="flex md:hidden" style={{ marginLeft: 'auto' }}>
          <button
            onClick={actionMenu}
            type="button"
            className="text-slate-400 hover:text-gray-500 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex space-x-4 'flex-col items-start'">
            <li>
              <Link
                to="Home"
                className="text-secondary font-serif hover:text-gray-500 text-slate-400"
              >
                <strong>Inicio</strong>
              </Link>
            </li>
            <li>
              <Link
                to="About" smooth={true} duration={500}
                className="text-secondary font-serif hover:text-gray-500 text-slate-400"
              >
                <strong>Nosotras</strong>
              </Link>
            </li>
            <li>
              <Link
                to="Services" smooth={true} duration={500}
                className="text-secondary font-serif hover:text-gray-500 text-slate-400"
              >
                <strong>Servicios</strong>
              </Link>
            </li>
            <li>
              <Link
                to="Contact" smooth={true} duration={500}
                className="text-secondary font-serif hover:text-gray-500 text-slate-400"
              >
                <strong>Clientes</strong>
              </Link>
            </li>
            <li>
              <Link
                to="Contact" smooth={true} duration={500}
                className="text-secondary font-serif hover:text-gray-500 text-slate-400"
              >
                <strong>Contacto</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
