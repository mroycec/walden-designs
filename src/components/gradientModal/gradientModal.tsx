import { ReactNode } from "react";

interface GradientModalProps {
    children: ReactNode;
}

const GradientModal: React.FC<GradientModalProps> = ({ children }: GradientModalProps) => {
    return (
        <div className="w-screen h-screen fixed px-[5%] py-[5%] md:px-[8%] md:py-[5%] lg:px-[10%] lg:px-[8%] flex-col justify-center items-center gap-2.5 inline-flex bg-theme-gradient">
            <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-center">
                <div className="w-full h-full overflow-y-auto p-4 bg-stone-100 rounded-lg backdrop-blur-sm flex-col justify-start items-center gap-2.5 flex">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default GradientModal;