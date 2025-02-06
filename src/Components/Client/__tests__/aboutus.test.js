import {render,screen,cleanup} from '@testing-library/react';
import Aboutus from "../Aboutus";


test("should render Aboutus",()=>{
    render(<Aboutus/>);
    const AboutusElement=screen.getByTestId("Started");
    expect (AboutusElement).toBeInTheDocument();
})



test("We Have Restaurant's in Ongole",()=>{
    render(<Aboutus/>);
    const ReturnElement=screen.getByTestId("Restaurant");
    expect(ReturnElement).toHaveTextContent("Ongole");
})

test("",()=>{
    render(<Aboutus/>);
    
})