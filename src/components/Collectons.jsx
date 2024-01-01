
import { Items } from "../Data/data"
import fullstart from '../assets/Star_fill.svg'
import star from '../assets/Star.svg';
import shape from '../assets/vector.svg';

const Collectons = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-12 pt-20 pb-20 pl-24 pr-24 xl:pl-24 xl:pr-24 sm:pl-0 sm:pr-0 bg-[#1B1D1F] rounded-2xl text-[1rem] relative overflow-hidden z-20">
                <img className="absolute top-10 left-1/2 z-20" src={shape} alt="shape" />
                <div className="text-[#FEF7EE] flex flex-col items-center gap-3 mt-1 w-4/5 xl:w-[57%] text-center z-30">
                    <h1 className="text-[2rem]">
                        Our Collection
                    </h1>
                    <p className="text-[#6F757C]">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly</p>
                    <div className="flex gap-10 mt-2">
                        <button className="bg-[#6F757C] p-1 pr-3 pl-3 rounded-md">All Products</button>
                        <button>Available Now</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-x-9 gap-y-12">
                    {
                        Items.map((item, index) => {
                            return <div key={index} className="flex flex-col gap-2 ">
                                <div className="relative">
                                {
                                    item.popular ? 
                                    <span className="bg-[#F6C768] text-[#1B1D1F] text-center rounded-xl text-[0.875rem] pr-2 pl-2 w-16 absolute top-3 left-3">Popular</span> : ""
                                }
                                    <img className=" rounded-xl object-cover w-80 h-44" src={item.image} alt="coffee"></img>
                                </div>
                                <div className="flex justify-between">
                                    <span>{item.title}</span>
                                    <span className='bg-[#BEE3CC] text-[#1B1D1F] pt-1 pb-1 pl-2 pr-2 rounded-md text-[0.75rem]'>{item.price}</span>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <span><img src={item.star ? fullstart : star} alt="React Star" /></span>
                                        <div><span>{item.value}</span><span className="text-[0.625rem] text-[#6F757C]"> ({item.votes})</span></div>
                                    </div>
                                    {
                                        item.sold ? <div className="text-[#ED735D]">Sold out
                                        </div> : ""
                                    }
                                </div>
                            </div>

                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Collectons
