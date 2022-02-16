/*
This function will help fetch random facts from the Cat Facts API
whenever a reload button is clicked.

Note: The fact will be loaded only after clicking the button for the first time.
*/
export function Demo(){
    const [data, setData] = useState([]);

      
    function loadData(){
        fetch('https://cat-fact.herokuapp.com/facts/random')
        .then((response) => response.json())
        .then(resp => setData(resp.text));
    }

    return (
        <react.Fragment>
     
        <h2>
            Cat Facts
        </h2>
        <div>
           
            <div id="facts">
             {data}
            </div>
            <button type="reset" onClick={loadData}>Reload</button>
        </div>
        </react.Fragment>
    );
}