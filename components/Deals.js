import { FireIcon } from "./icons";
import Deal from "./Deal";

const Deals = () => {
  return (
    <div className="flex justify-between w-full p-20">
      <div className="flex flex-col">
        <div className="flex items-center">
          <h3 className="text-5xl font-bold text-sapGreen-600">Hot</h3>
          <FireIcon className="w-16 h-16" />
        </div>
        <h3 className="text-5xl font-bold text-sapGreen-600 -mt-3">
          deals for you
        </h3>
        <p className="text-gray-500 font-OpenSans mt-2">
          Online shopping for retail sales direct to consumers.
        </p>
      </div>
      <Deal
        title="1.5% cashback"
        description="Online shopping for retail sales direct to consumers."
        icon="/Dealimage.png"
      />
      <Deal
        title="30-day terms"
        description="Online shopping for retail sales direct to consumers."
        icon="/Dealimage.png"
      />
      <Deal
        title="Save Money"
        description="Online shopping for retail sales direct to consumers."
        icon="/Dealimage.png"
      />
    </div>
  );
};

export default Deals;
