import  renderer  from "react-test-renderer";
import Quotes from "../Quotes";

test("quotes component match snapshot", ()=>{
      const tree = renderer.create(<Quotes />).toJSON
      expect(tree).toMatchSnapshot();
}) 