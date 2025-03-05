
import Card from "./Card";

// this we get in the props
function Tours({ tours, removeTour }) {
    return (
        <div className="container">
            <div> <h2 className="title">
                plane with love
            </h2></div>
            <div className="cards">
                {/* //use {} as we want to write js \
 //here we use map ans all the tada present in the tours array is passed as . separeted value using a spared oprator */}

                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>

        </div>


    );
}

export default Tours;