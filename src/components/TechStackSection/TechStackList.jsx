import React, { use, useState } from "react";
import TechnologyCard from "./TechStackCard ";
// import StackPanel from "./StackPanel";
import MyStackPanel from "./MyStackPenel";

const TeckStackDataPromise = fetch("techStacks.json").then((response) =>
  response.json(),
);

const TechStackList = () => {
    const [addStack, setAddStack] = useState([])

    
    

  const teckStackData = use(TeckStackDataPromise);

  const handleAddStack = (stack) =>{
    if(addStack.includes(stack)){
         return;
    }else{
        const newStack = [...addStack, stack]
        setAddStack(newStack)
        console.log(newStack);

    }
  }

  const onRemove = (removeId) => {
    const removeStack = addStack.filter( s => s.id !== removeId)
    setAddStack(removeStack)
    
  }

  const onRemoveAll = () => {
  setAddStack([]);
}


  

//   console.log(teckStackData);

  return (
    <div  className="w-full max-w-7xl mx-auto px-4">
        
      {/* <h1>Tech Stack Card List section</h1> */}
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row gap-4 lg:gap-2 items-start justify-center mx-auto ">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  w-full lg:flex-1 md:flex-1 min-w-0">
          {teckStackData.map((stack, index) => (
            <TechnologyCard
                             key={index} 
                             stack={stack} 
                             handleAddStack={handleAddStack}
                             onRemove={onRemove}
                             isAdded={addStack.some(s => s.id === stack.id)}
                            
             ></TechnologyCard>
          ))}
        </div>
        <MyStackPanel  addStack={addStack} onRemove={onRemove} onRemoveAll={onRemoveAll}></MyStackPanel>
        
      </div>
    </div>
  );
};

export default TechStackList;
