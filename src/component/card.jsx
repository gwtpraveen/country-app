import "../style/css/card.css";
import { useRef } from "react";

const Card = ({data, getBigCard}) => {
    const cardEl = useRef();
    
    setTimeout(() => {
        const cardOpctions  = {
            threshold: 0.5
        };

        const lazyImageOpctions = {
            rootMargin: "0px 0px 300px 0px"
        };

        if (cardEl.current) {
            const cardObserver = new IntersectionObserver((entries, cardObserver) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        cardObserver.unobserve(entry.target);
                    }
                })
            }, cardOpctions);
        
            
            const lazyLoadingImg = new IntersectionObserver((entries, lazyLoadingImg) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const imgsrc = entry.target.firstElementChild.getAttribute("data-src");
                        entry.target.firstElementChild.src = imgsrc;
                        lazyLoadingImg.unobserve(entry.target);
                    }
                })
            }, lazyImageOpctions);

            cardObserver.observe(cardEl.current);
            lazyLoadingImg.observe(cardEl.current);
        }
    }, 500)

    const {name, population, region, capital, flags : {png}} = data;
    return ( 
        <div className="card" onClick={() => getBigCard(data)} ref={cardEl}>
            <img src="/thiswillreplacesoon" alt="country Flag" data-src={png}/>
            <div className="cardDetails">
                <h2 className="h2">{name}</h2>
                <p className="dataRow">
                    <span className="bold">Population: </span>{population.toLocaleString()}
                </p>
                <p className="dataRow">
                    <span className="bold">Region: </span>{region}
                </p>
                <p className="dataRow">
                    <span className="bold">Capital: </span>{capital}
                </p>
            </div>
        </div>
     );
}
 
export default Card;