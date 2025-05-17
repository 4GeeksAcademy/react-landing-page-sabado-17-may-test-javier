export const CardComponent = ({ card }) => {

    return (
        <div className="col-md-3 col-sm-6">

            <div class="card" >
                <img src="https://climbingvenezuela.com/sites/default/files/inline-images/blog-clean-post-1.jpg" class="card-img-top" alt="..." />
                <div class="card-body " >
                    <h5 class="card-title">{card.title}</h5>
                    <p class="card-text" style={{ minHeight: "200px" }}>{card.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}