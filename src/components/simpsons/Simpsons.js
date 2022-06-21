import './Simpsons.css'

function Simpsons(props) {
    let {name, desc, img} = props;
    return(<div className={'simpsonBackground'}>
        <h2 className={'name'}>{name}</h2>
        <p className={'description'}>{desc}</p>
        <img className={'img'} src={img} alt="simson"/>
    </div>)
}

export default Simpsons;