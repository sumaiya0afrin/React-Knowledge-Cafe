import profile from "../assets/images/profile.png";

const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100 w-4/5 mx-auto px-0 py-4 border-b">
        <div className="flex-1">
          <a className="text-2xl font-bold">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full">
                <img src={profile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
