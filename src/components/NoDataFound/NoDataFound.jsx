import Lottie from "lottie-react";
import noData from "../../assets/lotti/NodataAnimation.json";

export default function NoDataFound() {
    return (
        <div className="mx-auto flex justify-center ">
            <Lottie 
            animationData={noData} 
            loop={true} 
            style={{marginRight: 'auto', marginLeft: 'auto' }}
            />
        </div>
    );
}
