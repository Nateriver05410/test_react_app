import Axios from 'axios'
import {useState} from 'react' 

function App() {

  const [SerialNo, setSerialNo] = useState("");
  const [Brand, setBrand] = useState("");
  const [Model, setModel] = useState("");
  const [Price, setPrice] = useState(0);
  const [OptionList, setOptionList] = useState("");
  const [SalesPerson, setSalesPerson] = useState("");
  const [newSerialNo, senewtSerialNo] = useState("");

  const [carlist, setcarlist] = useState([]);

  const getcars = () => {
    Axios.get('http://localhost:3001/cars').then ((Response) => {
      setcarlist(Response.data);
    });
  }
  const [Viewecocarlist, setViewecocarlist] = useState([]);
  
  const getViewcocar = () => {
    Axios.get('http://localhost:3001/Viewecocar').then ((Response) => {
      setViewecocarlist(Response.data);
    });
  }

  const [Viewexpensivecarlist, setViewexpensivecarlist] = useState([]);
  
  const getViewexpensivecar = () => {
    Axios.get('http://localhost:3001/Viewexpensivecar').then ((Response) => {
      setViewexpensivecarlist(Response.data);
    });
  }
  const [Viewluxuriouscarlist, setViewluxuriouscarcarlist] = useState([]);
  
  const getViewluxuriouscar = () => {
    Axios.get('http://localhost:3001/Viewluxuriouscar').then ((Response) => {
      setViewluxuriouscarcarlist(Response.data);
    });
  }

  const addcars = () => {
    if (SerialNo.trim() !== "") { // ตรวจสอบว่า SerialNo ไม่เป็นค่าว่าง
        Axios.post('http://localhost:3001/create', {
            SerialNo: SerialNo,
            Brand: Brand,
            Model: Model,
            Price: Price,
            OptionList: OptionList,
            SalesPerson: SalesPerson
        }).then(() => {
            setcarlist(prevCarList => [...prevCarList, {
                SerialNo: SerialNo,
                Brand: Brand,
                Model: Model,
                Price: Price,
                OptionList: OptionList,
                SalesPerson: SalesPerson
            }]);
        }).catch(error => {
            console.error('Error adding car:', error);
        });
    } else {
        console.error('Please provide SerialNo');
    }
}

const updateSerialNocar = (SalesPerson) => {
  Axios.put("http://localhost:3001/updatecar/+ salesPerson",{SerialNo : newSerialNo, SalesPerson : SalesPerson}).then ((response)=>{
    setcarlist(
      carlist.map((val) => {
        return val.SalesPerson === SalesPerson ? {
          SerialNo: val.newSerialNoSerialNo,
          Brand: val.Brand,
          odel: val.Model,
          Price: val.Price,
          OptionList: val.OptionList,
          SalesPerson: val.SalesPerson
        } : val;
      })
    )
  })
}

  return (
    <div className="App container">
      <h1>Data Car</h1>
      <div className="information">
        <form action="">
          <div className="md-3">
            <label htmlFor="serialno" className="form-label">SerialNo</label>
            <input type="text" className="form-control" placeholder="SerialNo" onChange={(event)=> {setSerialNo(event.target.value)}}></input>
          </div>
        </form>
      </div>
      <div className="information">
        <form action="">
          <div className="md-3">
            <label htmlFor="Brand" className="form-label">Brand</label>
            <input type="text" className="form-control" placeholder="Brand"onChange={(event)=> {setBrand(event.target.value)}}></input>
          </div>
        </form>
      </div>
      <div className="information">
        <form action="">
          <div className="md-3">
            <label htmlFor="Model" className="form-label">Model</label>
            <input type="text" className="form-control" placeholder="Model"onChange={(event)=> {setModel(event.target.value)}}></input>
          </div>
        </form>
      </div>
      <div className="information">
        <form action="">
          <div className="md-3">
            <label htmlFor="Price" className="form-label">Price</label>
            <input type="text" className="form-control" placeholder="Price"onChange={(event)=> {setPrice(event.target.value)}}></input>
            </div>
            </form>
      </div>
      <div className="information">
        <form action="">
          <div className="md-3">
            <label htmlFor="OptionList" className="form-label">OptionList</label>
            <input type="text" className="form-control" placeholder="OptionList"onChange={(event)=> {setOptionList(event.target.value)}}></input>
            </div>
            </form>
      </div>
          <div className="information">
        <form action="">
          <div className="md-3">
            <label htmlFor="SalesPerson" className="form-label">SalesPerson</label>
            <input type="text" className="form-control" placeholder="SalesPerson"onChange={(event)=> {setSalesPerson(event.target.value)}}></input>
          </div>
          </form>
      </div>
          
      <hr/>
      <button className="btn btn-success" onClick={addcars}>ADD NEWCAR</button>
      <hr/>
      <div className="Car">
      <button className="btn btn-primary" onClick={getcars}>SHOW ALLCAR</button>
      <br/><br/>
      {carlist.map((val, key) => {
          return (
                  <div className="cars card">
                    <div className="card-body text-left">
                      <p className="card-text">SerialNo: {val.SerialNo}</p>
                      <p className="card-text">Brand: {val.Brand}</p>
                      <p className="card-text">Model: {val.Model}</p>
                      <p className="card-text">Price: {val.Price}</p>
                      <p className="card-text">OptionList: {val.OptionList}</p>
                      <p className="card-text">SalesPerson: {val.SalesPerson}</p>
                      <p className="card-text">Saledate: {val.Saledate}</p>
                      <div className="d-flex">
            <input type="text" style= { {width : "300px"}} placeholder="SerialNo" className="form-control" onChange={(event) => {
                senewtSerialNo(event.target.value)
              }
            }></input>
              <button className="btn btn-warning" onClick={()=>{updateSerialNocar(val.SalesPerson)}}>Update</button>
            </div>
                    </div>
                  </div>
                  )
      })}
      </div>
      <hr/>
      <div className="Car">
      <button className="btn btn-primary" style={{ backgroundColor: 'pink' }} onClick={getViewcocar}>SHOW ECONOMICCAR</button>
      <br/><br/>
      {Viewecocarlist.map((val, key) => {
          return (
                  <div className="cars card">
                    <div className="card-body text-left">
                      <p className="card-text">SerialNo: {val.SerialNo}</p>
                      <p className="card-text">Brand: {val.Brand}</p>
                      <p className="card-text">Model: {val.Model}</p>
                      <p className="card-text">Price: {val.Price}</p>
                      <p className="card-text">OptionList: {val.OptionList}</p>
                      <p className="card-text">SalesPerson: {val.SalesPerson}</p>
                      <p className="card-text">Saledate: {val.Saledate}</p>
                      <div className="d-flex">
            <input type="text" style= { {width : "300px"}} placeholder="SerialNo" className="form-control"></input>
              <button className="btn btn-warning">Update</button>
            </div>
                    </div>
                  </div>
                  )
      })}
      </div>
      <hr/>
      <div className="Car">
      <button className="btn btn-primary" style={{ backgroundColor: 'gold' }} onClick={getViewexpensivecar}>SHOW expensivecar</button>
      <br/><br/>
      {Viewexpensivecarlist.map((val, key) => {
          return (
                  <div className="cars card">
                    <div className="card-body text-left">
                      <p className="card-text">SerialNo: {val.SerialNo}</p>
                      <p className="card-text">Brand: {val.Brand}</p>
                      <p className="card-text">Model: {val.Model}</p>
                      <p className="card-text">Price: {val.Price}</p>
                      <p className="card-text">OptionList: {val.OptionList}</p>
                      <p className="card-text">SalesPerson: {val.SalesPerson}</p>
                      <p className="card-text">Saledate: {val.Saledate}</p>
                      <div className="d-flex">
            <input type="text" style= { {width : "300px"}} placeholder="SerialNo" className="form-control"></input>
              <button className="btn btn-warning">Update</button>
            </div>
                    </div>
                  </div>
                  )
      })}
      </div>
      <div className="Car">
      <button className="btn btn-primary" style={{ backgroundColor: 'silver' }} onClick={getViewluxuriouscar}>SHOW luxuriouscar</button>
      <br/><br/>
      {Viewluxuriouscarlist.map((val, key) => {
          return (
                  <div className="cars card">
                    <div className="card-body text-left">
                      <p className="card-text">SerialNo: {val.SerialNo}</p>
                      <p className="card-text">Brand: {val.Brand}</p>
                      <p className="card-text">Model: {val.Model}</p>
                      <p className="card-text">Price: {val.Price}</p>
                      <p className="card-text">OptionList: {val.OptionList}</p>
                      <p className="card-text">SalesPerson: {val.SalesPerson}</p>
                      <p className="card-text">Saledate: {val.Saledate}</p>
                      <div className="d-flex">
            <input type="text" style= { {width : "300px"}} placeholder="SerialNo" className="form-control"></input>
              <button className="btn btn-warning">Update</button>
            </div>
                    </div>
                  </div>
                  )
      })}
      </div>
    </div>
  );
}

export default App;
