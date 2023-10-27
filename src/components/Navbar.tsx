import React from 'react';
import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import { Menu } from '@headlessui/react';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useTheme();

  const linkClass =
    'mr-6 transition duration-300 hover:text-gray-900 dark:hover:text-gray-400';
  return (
    <nav className="p-4 dark:bg-zinc-900 bg-gray-200 transition duration-300">
      <div className="flex justify-between w-full max-w-screen-md mx-auto">
        <div>
          <Link to="/" className={linkClass}>
            Home
          </Link>
          <Link to="/projects" className={linkClass}>
            Portfolio
          </Link>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          {({}) => (
            <>
              <Menu.Button className="transition duration-300">
                {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-56 py-1 dark:bg-zinc-900 bg-gray-200 border border-gray-700 dark:border-gray-200 rounded shadow-lg">
                {['default', 'dark', 'light'].map((item) => (
                  <Menu.Item key={item}>
                    {({ active }) => (
                      <div
                        onClick={() =>
                          setTheme(item as 'default' | 'dark' | 'light')
                        }
                        className={`flex justify-between items-center cursor-pointer select-none px-4 py-2 transition duration-300 ${
                          active ? 'bg-blue-900 text-white' : ''
                        }`}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)} Mode
                        {theme === item && <span>✔️</span>}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </>
          )}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
