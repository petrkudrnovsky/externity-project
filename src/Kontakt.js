import React from "react";
import "./styles/style.css";

function Kontakt() {
  class KontaktForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        message: ""
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
      let name = event.target.name;
      let value = event.target.value
      this.setState({
        [name]: value                
      });
    };

    handleSubmit() {
      const name=this.state.name;
      const email=this.state.email;
      const message=this.state.message;
    
      localStorage.setItem("Jméno", name);
      localStorage.setItem("E-mail", email);
      localStorage.setItem("Dotaz", message);
    };

    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <label>Jméno:
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Zadejte své jméno" required />
          </label>
          <label>E-mail:
            <input type="email" value={this.state.email} name="email" onChange={this.handleChange} placeholder="Zadejte svůj e-mail" required />
          </label>
          <label>Váš dotaz:</label>
          <textarea value={this.state.message} name="message" onChange={this.handleChange} placeholder="Vaše otázka" required></textarea>
          <input type="submit" value="Odeslat" onSubmit={this.handleSubmit} />
        </form>
      )
    }
  };
  return (
    <div className="Kontakt">
      <p>Máte na nás otázku? <span className="blue-clr">Kontaktujte nás:</span></p>
      <KontaktForm />
    </div>
  );
}

export default Kontakt;