import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
export default function Banner({ onClaimCredit }) {
  const handleClaimCredit = () => {
    onClaimCredit();
    toast.success("Credit claim successfully!")
  };

  return (
    <div className="container  mb-10">
      <div className="hero rounded-2xl bg-[url('/assets/bg-shadow.png')] bg-color">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <img
                className="text-3xl font-bold pl-24"
                src="./assets/banner-main.png"
              />
              <h1 className="text-3xl font-bold text-white">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="py-6 text-colors">
                Beyond Boundaries Beyond Limits
              </p>
              <button
                onClick={handleClaimCredit}
                className="btn bg-primary rounded-xl border-outline border-8 border-primary mb-1"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
