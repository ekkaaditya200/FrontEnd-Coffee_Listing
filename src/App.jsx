import Collectons from "./components/Collectons";
import bg_cafe from './assets/bg-cafe.jpg'
function App() {
  return (
    <>
    <div className="bg-[#111315] w-screen pt-40 pb-40 pl-28 pr-28  flex justify-center items-center font-DM_Sans text-[#FEF7EE] relative ">
      <img className="absolute object-cover top-0 z-10 w-screen h-[350px]" src={bg_cafe} alt="image"/>
      <Collectons></Collectons>
    </div>
    </>
  )
}

export default App
