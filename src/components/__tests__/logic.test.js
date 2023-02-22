import calculate from "../logic/calculate";
import operate from "../logic/operate";

describe("test result for operation", ()=>{
test('should return aritmetic of two numbers', ()=>{
   const calc = operate(3,2,"+");
   expect(calc).toBe("5")
})  
test('should return cannot divide by 0',()=>{
    const calc = operate(3,0,'\u00f7');
   expect(calc).toBe("Can't divide by 0.")
})  
})

describe('test result for calculate', ()=>{
    const obj = {total:null, next:null , operation: null}
    test("should return empty {}", () => {
    const change = {...obj, next: "0" }
    const calc = calculate(change,"0");
    expect(calc).toEqual({}); 
    })
    test('update next if no operator', ()=>{
       const change = {...obj, next: "3"};
       const calc = calculate(change, "3") 
       expect(calc).toEqual({...obj, next: "33", operation: undefined})
    })   
})
