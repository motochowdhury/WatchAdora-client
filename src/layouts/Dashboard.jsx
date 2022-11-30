import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  // const [isOpen, setOpen] = useState(false);

  // console.log(data, email, name);
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="flex-1 static">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
