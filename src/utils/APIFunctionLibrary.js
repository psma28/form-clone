import { getColegios } from "../services/api/schoolSeeder";

const APIFunctionsMap = {
  "get-escuelas": { function: getColegios, args: 0 },
};

function searchFunction(functionName) {
  const foundFunction = APIFunctionsMap[functionName];
  return foundFunction;
}

export function functionExecutor(functionName, args) {
  
  const functionInfo = searchFunction(functionName);  
  
  if (functionInfo.args === 0) {
    return functionInfo.function()
    .then((res) => {
      return res
    });
  }

  return functionInfo.function(args)
  .then((res) => {
    return res
  });
  
}
