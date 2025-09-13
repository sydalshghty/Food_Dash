import fastImg from "../assets/fast-delivery 1.png";
import freshImg from "../assets/fresh (1) 1.png";
import freeImg from "../assets/box 1.png";
import "../css/fastdelivery.css";

function FastDelivery() {
    return(
        <div className="fast-delivery-content w-full relative">
            <div className="container">
                <div className="all-cols w-full bg-white flex justify-between rounded-3xl">
                    <div className="col-fast flex gap-5">
                        <img src={fastImg} alt="fast-img" />
                        <div className="col-text">
                            <h2 className="text-3xl font-bold text-black">Fast Delivery</h2>
                            <p>Promise To Deliver Within 30 Mins</p>
                        </div>
                    </div>
                    <div className="col-fresh flex gap-5">
                        <img src={freshImg} alt="fresh-img" />
                        <div className="col-text">
                            <h2 className="text-3xl font-bold text-black">Fresh Food</h2>
                            <p>Your Food Will Be Delivered 100% Fresh To Your Home.</p>
                        </div>
                    </div>
                    <div className="col-free flex gap-5">
                        <img src={freeImg} alt="free-img" />
                        <div className="col-text">
                            <h2 className="text-3xl font-bold text-black">Fast Delivery</h2>
                            <p>Promise To Deliver Within 30 Mins</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FastDelivery;