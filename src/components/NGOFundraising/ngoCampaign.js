import React from 'react'


const NgoCampaign = (props) => {
    let { title,ngo_name,category_tag,ngo_logo,cover_photo,current_amount_raised,aim} = props;
    return (
      //   <div className="my-3">
      //   <div className="card" >
      //     <img src={`http://127.0.0.1:8000${cover_photo}`} className="card-img-top" alt="..." />
      //     <div className="card-body">
      //       <h5 className="card-title font-bold" >{title}</h5>
      //       <p className="ngo_name">{ngo_name} </p>
      //       <p className="card-text">#{category_tag} </p>
      //       <h4 className="card-text">
      //             ₹ {current_amount_raised} raised of ₹ {aim} goal
      //           </h4>
      //       <button className="card-button">Select Program</button>
      //     {/* <img src={`http://127.0.0.1:8000${ngo_logo}`} className="card-img-bottom" alt="..." /> */}
      //     </div>
      //   </div>
      // </div>

<div class="max-w-sm mt-[980px] ml-[75px] rounded overflow-hidden shadow-lg">
  <img class="w-full" src={`http://127.0.0.1:8000${cover_photo}`} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-extrabold text-xl mb-2">{title}</div>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{category_tag}</span>
    <p class="text-gray-700 text-base font-bold">
    ₹ {current_amount_raised} raised of ₹ {aim} goal
    </p>
    <div className="flex">
    <img src={`http://127.0.0.1:8000${ngo_logo}`} className='pt-3 ' alt="" />
    <div class="font-extrabold text-xl mt-[20px] ml-4 mb-2">{ngo_name}</div>
  </div>
  </div>

  <button className=" ml-[70px] mb-[10px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Select Program</button>
</div>
    );
  
}

export default NgoCampaign