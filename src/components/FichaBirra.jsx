const fichaBirra = ({ birra }) =>{
    return(
        <div className="col-6 border ">
        <div className="p-3 d-flex">
            <div className="w-50">
                <img src={birra.imagen} alt={birra.nombre} className="w-100" />
            </div>
            <div>
                <h4 className="">{birra.nombre}</h4>
                <p>{birra.descripcion}</p>
            </div>
        </div>
    </div>
    )
}

export default fichaBirra;