
import Pedido from "./Pedido";
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="col-12">
            <i className="fa-hippo fa-solid"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido
           data="17/08/2025" 
            icone="fa-solid fa-hippo"
            titulo="Hipopótamo"
            descricao="Filhote de hipopótamo" />
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido
            data="22/08/2025" 
            icone="fa-solid fa-camera"
            titulo="SSD"
            descricao="Camera digital" />
        </div>

        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido
            data="21/08/2025" 
            icone="fa-solid fa-keyboard"
            titulo="SSD"
            descricao="Teclado gamer" />
        </div>

        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido
            data="01/08/2025" 
            icone="fa-solid fa-mouse"
            titulo="Mouse"
            descricao="Mouse sem fio" />
        </div>

      </div>
    </div>
  );
}

export default App;
