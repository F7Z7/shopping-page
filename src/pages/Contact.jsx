export default function Contact() {
    return (
        <form className="flex flex-col h-screen justify-center items-center">
            <div className="flex flex-col gap-4 p-6 w-full max-w-md sm:max-w-lg  md:max-w-xl h-auto bg-white/0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 ">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                    name="description"
                    placeholder="Enter a description..."
                    rows={6}
                    required
                    className="px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="px-4 py-2 font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                />
            </div>
        </form>
    );
}