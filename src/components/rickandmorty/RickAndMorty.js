import './RickAndMorty.css'

function RickAndMorty(props) {
    let {id,name,status,species,gender,image} = props;

    return(<div className={'backGround'}>
        <div className={'wrap'}>
            <h2 className={'name'}>{id}. {name}</h2>
            <div className={'description'}>
                <div>Status: {status}</div>
                <div>Species: {species}</div>
                <div>Gender: {gender}</div>
            </div>
        </div>
        <img src={image} alt="image"/>
    </div>)
}

export default RickAndMorty;