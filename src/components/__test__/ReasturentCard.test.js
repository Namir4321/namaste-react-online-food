import ReasturentCard from "../ReasturentCard"
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import resData from "../mockdata/resDataMock.json"
it("should render the reasturent card with props data",()=>{
    render(<ReasturentCard resData={resData} />);

    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument()
})