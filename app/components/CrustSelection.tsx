import React from "react";

type CrustProps = {
    crust: string;
    setCrust: (crust: string) => void;
}


const CrustSelection = ({ crust, setCrust }: CrustProps) => {
    return (
        <div className='flex justify-center items-center lg:justify-start'>
            <div className='flex gap-x-12 mb-8 font-medium'>

                <label className='flex items-center gap-x-2 cursor-pointer'>
                    <input
                        className='appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-b checked:from-primary checked:to-secondary checked:border-secondary cursor-pointer'
                        value='traditional'
                        name='crust'
                        type='radio'
                        checked={crust === "traditional"}
                        onChange={(e) => setCrust(e.target.value)}
                    />
                    Traditional
                </label>

                {/* Radio button dla Thin */}
                <label className='flex items-center gap-x-2 cursor-pointer'>
                    <input
                        className='appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-b checked:from-primary checked:to-secondary checked:border-secondary cursor-pointer'
                        value='thin'
                        name='crust'
                        type='radio'
                        checked={crust === "thin"}
                        onChange={(e) => setCrust(e.target.value)}
                    />
                    Thin
                </label>
            </div>
        </div>
    );
};

export default CrustSelection;
