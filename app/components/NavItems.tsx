type itemProp = {
    title: string;
};

const NavItem = (props: itemProp) => {
  <li>
    <a
      href="#"
      className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
      aria-current="page"
    >
      { props.title }
    </a>
  </li>;
};

export default NavItem;