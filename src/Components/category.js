import category from '../utils.js/category'
export default function Category(){

    
    const cat_items= category.map(items=>{
        return (
            
            <div key={items.id} className=' m-3 lg:flex lg:flex-col justify-center relative'>
            <img  src={items.img} className={`rounded-2xl hover:scale-100 transition ease-in-out duration-500 h-96 w-96 scale-90 cursor-pointer`} />
            <div className="absolute inset-0 flex items- justify-center opacity-0 hover:opacity-100 scale-90 hover:scale-100  transition-opacity">
                <p className="text-white font-bold">{items.type}</p>
            </div>
            </div>
        )
    })

    return(
        <div className='max-h-screen p-2 '>
            <div className='flex justify-center flex-wrap'>
                <p className='inline italic font-serif font-semibold'>Discover Your Style Symphony at AVIANS: Where Fashion Takes Flight Across Distinct Categories!</p>
            </div>
            <div className='flex sm:flex-row  '>
                {cat_items}
            </div>
        </div>
    );
}

