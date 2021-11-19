import { Component } from "react";

class CheckOutForm extends Component {
    constructor(){
        super();
    }
    render () {
        return (
            <div id="form-wrapper">
                <label htmlFor="checkout"> <h2>Checkout</h2></label>
                <form id="checkout" onSubmit={""}> 
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input onInput={""} type="text" id="firstName" name="firstName"/>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input onInput={""} type="text" id="lastName" name="lastName"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input onInput={""} type="text" id="email" name="email"/>
                        </div>                        <div>
                            <label htmlFor="creditCard"> Credit Card </label>
                            <input onInput={""} type="text" id="creditCard" name="creditCard"/>
                        </div>                        <div>
                            <label htmlFor="zipCode">Zip Code</label>
                            <input onInput={""} type="text" id="zipCode" name="zipCode"/>
                        </div>   
                        <button type="submit"> Buy Now </button>                     
                </form>
            </div>
        )
    }
}
export default CheckOutForm;