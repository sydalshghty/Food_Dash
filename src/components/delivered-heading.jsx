import "../css/delivered-heading.css";

function DeliveredHeading () {
    return(
        <div className="delivered-heading">
            <div className="container flex items-center justify-between w-full">
                <div className="heading">
                    <h1 className="mb-2 text-5xl font-bold text-graycolor">Our <span className="text-primarycolor">Best Delivered</span></h1>
                    <h1 className="text-5xl font-bold text-graycolor">Indian Dish</h1>
                </div>
                <div className="col-text">
                    <p className="text-xl font-light text-greyG75">It’s Not Just About Bringing You Good Food From Restaurants, We Deliver You Experience</p>
                </div>
            </div>
        </div>
    )
}
export default DeliveredHeading;