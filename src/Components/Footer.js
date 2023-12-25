export default function Footer() {
    return (
        <div className="bg-teal-800">
            <footer >
                <div className="flex flex-wrap items-center space-x-52"> 
                    <div className="m-8">
                       
                       <iframe className="h-96 w-96  rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.1155334582722!2d76.8494251698886!3d23.077423993981533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9fdc2a89a4b%3A0xa668e2937bcda00b!2sNallo%20ka%20ped!5e0!3m2!1sen!2sin!4v1690609868264!5m2!1sen!2sin"  allowfullscreen="" loading="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="m-10">
                        <h3 className="text-white text-lg font-serif">Sections</h3>
                        <ul>
                        <li className="text-white">Home</li>
                        <li className="text-white">Blog</li>
                        <li className="text-white">About</li>
                        <li className="text-white">Srvices</li>
                        </ul>
                       
                    </div>
                    <div  className="m-10">
                        <h4 className="text-white text-lg font-serif">Contact Us</h4>
                        <ul className="text-white">
                            <li>Email: vatsaashish11@gmail.com</li>
                            <li>Email: vatsaashish11@gmail.com</li>
                            <li>Email: vatsaashish11@gmail.com</li>
                            <li>Email: vatsaashish11@gmail.com</li>
                            <li>Email: vatsaashish11@gmail.com</li>
                        </ul>
                    </div>
                    <div  className="m-10">
                        <h4 className="text-white text-lg font-serif">Social</h4>
                        <ul className="text-white">
                            <li>Insta</li>
                            <li>Insta</li>
                            <li>Insta</li>
                            <li>Insta</li>
                            <li>Insta</li>
                        </ul>
                    </div>
                    
                    
                </div>
            </footer>
        </div>
    );
}