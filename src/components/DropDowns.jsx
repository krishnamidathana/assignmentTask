const DropDowns = () => {
    return (
        <>
  {/* Container for dropdown filters */}
            <div className='flex justify-center border py-5 px-60 space-x-6 font-bold '>
                {/* Expertise dropdown */}
                <div>
                    <select className='bg-[#F3F3F3] w-48 py-3 pl-4  rounded-lg focus:border-none '>
                        <option value="None"  selected disabled hidden>Expertise</option>
                        <option>Some option</option>
                        <option>Some option</option>
                    </select>
                </div>
                  {/* Gender dropdown */}
                <div>
                    <select className='bg-[#F3F3F3] w-48 py-3 pl-6 rounded-lg focus:border-none'>
                        <option value="None" selected disabled hidden>Gender</option>
                        <option>Some option</option>
                        <option>Some option</option>
                    </select>
                </div>
                 {/* Fees dropdown */}
                <div>
                    <select className='bg-[#F3F3F3] w-48 py-3 pl-6 rounded-lg focus:border-none'>
                        <option value="None" selected disabled hidden>Fees</option>
                        <option>Some option</option>
                        <option>Some option</option>
                    </select>
                </div>
                {/* Languages dropdown */}

                <div>
                    <select className='bg-[#F3F3F3] w-48 py-3 pl-6 rounded-lg focus:border-none'>
                        <option value="None" selected disabled hidden>Languages</option>
                        <option>Some option</option>
                        <option>Some option</option>
                    </select>
                </div>
                                {/* All filters dropdown */}

                <div>
                    <select className='bg-[#DCEEDC] text-[#3A643B] font-medium w-48 py-3 pl-6 rounded-lg focus:outline-none'>
                        <option value="None" className='' selected disabled hidden>All filters</option>
                        <option>Some option</option>
                        <option>Some option</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default DropDowns