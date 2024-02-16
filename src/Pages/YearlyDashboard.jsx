
import BannerList from "../Components/YearlyDashboard/BannerList";
import HourSpent from "../Components/YearlyDashboard/HourSpent";
import Category from "../Components/YearlyDashboard/Category";
import ExpenseGraph from "../Components/YearlyDashboard/ExpenseGraph";
import TaskCompletion from "../Components/YearlyDashboard/TaskCompletion";
import YearlyHeader from "../Components/Calender/YearlyHeader";
import user from "../assets/user.png";

const YearlyDashboard = () => {
  return (
    <div className="p-8">
      <YearlyHeader />
      <BannerList />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <HourSpent />
        <Category />
        <ExpenseGraph />
        <TaskCompletion />
      </div>
      <button className="icon h-16 w-16 fixed bottom-8 right-12">
        <img src={user} alt="" />
      </button>
    </div>
  );
};

export default YearlyDashboard;
