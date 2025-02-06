import { fireEvent, render,screen } from "@testing-library/react";
import Contactus from "../Contactus";

test("call onclick",()=>{
    const handleclick=jest.fn();
    render (<Contactus onClick={handleclick}/>);
    fireEvent.click(screen.getByText(/Submit/i));
    expect(handleclick).toHaveBeenCalledTimes(1);
})
