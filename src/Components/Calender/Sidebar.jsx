
import ActivityDetails from "./ActivityDetails";
export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {open && (
        <aside className="overflow-y-scroll no-scrollbar border border-t-0  flex-shrink-0 w-[384px] bg-white z-10 fixed left-1/2 lg:left-0  transform -translate-x-1/2 lg:translate-x-0 top-16 lg:top-0 lg:static rounded-3xl lg:rounded-none h-full lg:h-auto  ">
          <ActivityDetails setOpen={setOpen} />
        </aside>
      )}
    </>
  );
}
