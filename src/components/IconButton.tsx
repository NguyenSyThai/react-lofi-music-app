import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onAction?: React.MouseEventHandler<HTMLDivElement> | undefined;
  label?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onAction, label }) => {
  return (
    <div
      className="group hover:bg-[rgba(255,255,255,0.2)] rounded-[5px] size-[32px] flex items-center justify-center cursor-pointer relative"
      onClick={onAction}
    >
      <div className="group-hover:scale-[1.2]">{icon && icon}</div>
      {label && (
        <div className="opacity-0 group-hover:opacity-100 absolute top-[-50px] bg-[#363636] rounded-[7px] text-white flex text-[15px] gap-[6px] leading-[18px] p-[8px] pointer-events-none transition-all whitespace-nowrap">
          {label}
        </div>
      )}
    </div>
  );
};

export default IconButton;
