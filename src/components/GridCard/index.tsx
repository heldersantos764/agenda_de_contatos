import CardContact from "../CardContact";


function GridCard() {
    return(

        <div className=" grid grid-cols-3 gap-4">
            <CardContact nome={"Nayra Leão"} apelido={"@nayrasleao"} email={"nayraleao@gmail.com"} telefone={"92996056444"} endereco={"Rua São Francisco de Assis, n90"} foto={"./foto.png"} />
            <CardContact nome={""} apelido={""} email={""} telefone={""} endereco={""} foto={""} />
            <CardContact nome={""} apelido={""} email={""} telefone={""} endereco={""} foto={""} />
            <CardContact nome={""} apelido={""} email={""} telefone={""} endereco={""} foto={""} />
            <CardContact nome={""} apelido={""} email={""} telefone={""} endereco={""} foto={""} />
            <CardContact nome={""} apelido={""} email={""} telefone={""} endereco={""} foto={""} />
        </div>
    )
}

export default GridCard;