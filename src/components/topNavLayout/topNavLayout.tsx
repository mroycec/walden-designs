import { ReactNode } from "react";
import TopMenuBar from "../topMenuBar/topMenuBar";

interface TopNavModalProps {
    children?: ReactNode;
    className?: string;
}

const TopNavLayout: React.FC<TopNavModalProps> = ({ children, className }: TopNavModalProps) => {
    return (
        <div className={`w-screen h-screen overflow-y-auto fixed px-[5vw] md:px-[8vw] lg:px-[10vw] lg:px-[8vw] xl:px-[13vw] flex-col justify-center items-center gap-2.5 inline-flex bg-fog bg-bottom bg-cover ${className}`}>
            <TopMenuBar />
            <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-center mt-16">
                <div className="w-full h-full overflow-y-auto p-4 bg-tint-100 backdrop-blur-sm flex-col justify-start items-center flex pb-16">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default TopNavLayout;
