import foodImg from "../assets/Food.png";
import "../css/content-section-1.css";
function ContentSection1(){
    return(
        <div className="content-section-1">
            <div className="container">
                <div className="content-text">
                    <div className="col-text">
                        <div>
                            <span>Quick</span> and <span>Tasty</span>
                        </div>
                        <div>
                            <span>Food Delivered</span> with <span>a</span>
                        </div>
                        <div>
                            <span>Dash of</span> Speed
                        </div>
                    </div>
                    <div className="btn-col">
                        <button>Order Now</button>
                        <button>Track Order</button>
                    </div>
                </div>
                <div className="col-img">
                    <img src={foodImg} alt="food-img" />
                </div>
            </div>
        </div>
    )
}
export default ContentSection1;