import { Link } from "react-router-dom";

const listHeader = [
  {
    title: "Home",
    path: "users",
  },
];

const Header = () => {
  return (
    <div className="py-4 border-b border-gray-200 shadow-sm bg-slate-100 sticky top-0 inset-x-0 z-20">
      <div className="container pl-5">
        <div className="flex flex-row">
          {listHeader?.map((item) => {
            return (
              <Link to={`/${item?.path}`} key={item?.path}>
                <div className="px-4">
                  <p className="text-black capitalize text font-bold text-lg0">
                    {item?.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
