import Ping from "@/components/Ping";

const View = async ({ totalViews }: { totalViews: number }) => {
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{totalViews + 1}</span> views
      </p>
    </div>
  );
};

export default View;
