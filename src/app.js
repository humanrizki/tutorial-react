const root = document.querySelector('#root')
const App = function(){
    const [count, setCount] = React.useState(1)
    const [click, setClick] = React.useState(false)
    React.useEffect(function(){
        console.log(document.querySelector('.heading-pertama'))
    }, [count])
    return (
        <>
            <h1 className="heading-pertama">Ini judul document</h1>
            <button onClick={function(){
                setCount(count - 1)
            }}>-</button>
            <h1>{count}</h1>
            <button onClick={function(){
                setCount(count + 1)
            }}>+</button>
            <button onClick={setClick.bind(this, false)}>Nilai jadi false</button>
        </>
    );
}
ReactDOM.render(<App/>, root)