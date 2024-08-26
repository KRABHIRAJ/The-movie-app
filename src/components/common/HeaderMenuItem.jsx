/* eslint-disable react/prop-types */
const HeaderMenuItem = ({title}) => {
  return (
    <p className="relative inline-block text-gray-300 transition-all duration-300 ease-in-out hover:text-white cursor-pointer font-[500] group">
      { title }
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </p>
  );
};

export default HeaderMenuItem;
