import { ReactNode } from "react";

interface GradientModalProps {
    children?: ReactNode;
    className?: string;
}

const GradientModal: React.FC<GradientModalProps> = ({ children, className }: GradientModalProps) => {
    return (
        <div className={`w-screen h-screen fixed px-[5vw] py-[5vh] md:px-[8vw] lg:px-[10vw] lg:py-[8vh] lg:px-[8vw] xl:px-[13vw] flex-col justify-center items-center gap-2.5 inline-flex bg-fog bg-bottom bg-cover ${className}`}>
            <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-center">
                <div className="w-full h-full overflow-y-auto rounded-lg p-4 bg-tint-100 backdrop-blur-sm flex-col justify-start items-center gap-2.5 flex">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default GradientModal;