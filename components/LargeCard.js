import Image from "next/image";

function LargeCard({ img, title, description,buttonText }) {
    return (
        <section className="relative py-16 cursor-pointer ">
            <div className="relative h-96 min-w-[300px] rounded-xl overflow-hidden">
                <Image 
                    src={img}
                    layout="fill"
                    objectfit="cover"
                    className="rounded-2-xl"
                />
            </div>

            <div className="absolute top-32 left-12">
                <h3 className=" text-4xl mn-3 w-64">{title}</h3>
                <p>{description}</p>

                <button className="text-sm text-white bg-gray-900 px-4 rounded-lg mt-5">
                {buttonText}</button>
            </div>
        </section>
    );
}

export default LargeCard
