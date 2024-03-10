import { FC } from "react";

interface LoadingOverlayPorps {
    isLoading: boolean,
    message: string
}

const LoadingOverlay: FC<LoadingOverlayPorps> = ({ isLoading, message }) => {
  return isLoading ? (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <p className="text-gray-900 font-semibold">{message}</p>
      </div>
    </div>
  ) : null;
};

export default LoadingOverlay;
