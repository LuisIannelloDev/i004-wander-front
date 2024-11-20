function ReviewCard() {
  return (
    <div className="border-gray-300 border-[1.5px] rounded-xl p-4">
        <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary"></div>
            <div className="flex flex-col">
                <h1>Mariana Garcia Rodiguez</h1>
                <p>***** 16 Dec 2021</p>
            </div>
        </div>
        <div>
            <h1 className="pt-3 pb-2 font-bold">Good Place</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugit, corrupti ut itaque optio atque!</p>
        </div>
    </div>
  )
}

export default ReviewCard