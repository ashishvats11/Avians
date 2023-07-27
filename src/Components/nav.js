function Nav(){
    return(
        <div class="flex justify-end " >
            <ul class="flex space-x-6 mx-9">
                <li class="text-white cursor-pointer hover:underline hover:underline-offset-2 hover: decoration-orange-500 hover:text-lg ">Home</li>
                <li class="text-white cursor-pointer hover:underline hover:underline-offset-2 hover: decoration-orange-500 hover:text-lg"> About</li>
                <li class="text-white cursor-pointer hover:underline hover:underline-offset-2 hover: decoration-orange-500 hover:text-lg">Blog</li>
                <li class="text-white cursor-pointer hover:underline hover:underline-offset-2 hover: decoration-orange-500 hover:text-lg">Services</li>
            </ul>
        </div>
    );
}
export default Nav;