import Lottie from "lottie-react";
import noData from "../../assets/lotti/NodataAnimation.json";

export default function NoDataFound() {
    setTimeout(() => {
        alert("Please Clear The Search Box and Click again The Search Button Or Refresh")
    }, 2000);
    return (
        <div className="flex justify-center border-0 w-full lg:absolute lg:right-1/2">
            <div>
                <Lottie
                    animationData={noData}
                    loop={true}
                    // style={{marginRight: 'auto', marginLeft: 'auto' }}
                    // className="mx-auto text-center  w-72 md:w-72 lg:w-[420px]"
                    className="w-[500px]"
                />
            </div>
            {/* <h1 className="text-red-500 text-xs text-center font-black text-wrap"></h1> */}
            
        </div>
    );
}
