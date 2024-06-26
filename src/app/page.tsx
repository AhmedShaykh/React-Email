import UseCallBack from "@/Components/UseCallBack";
import ContactForm from "@/Components/ContactForm";
import Pagination from "@/Components/Pagination";
import Carousel from "@/Components/Carousel";
import Todo from "@/Components/Todo";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true, dragFree: true };

const Home = () => {
    return (
        <div className="py-20 flex flex-col items-center gap-16">
            <div className="container md:max-w-4xl">
                <h1 className="mb-10 px-2 text-3xl text-center font-bold">
                    Contact Us
                </h1>

                <ContactForm />
            </div>

            <div className="container md:max-w-4xl">
                <h1 className="mb-10 px-2 text-3xl text-center font-bold">
                    Embla Carousel
                </h1>

                <Carousel options={OPTIONS} />
            </div>

            <div className="container md:max-w-6xl">
                <h1 className="mb-10 px-2 text-3xl text-center font-bold">
                    Pagination
                </h1>

                <Pagination />
            </div>

            <div className="container md:max-w-6xl">
                <h1 className="mb-10 px-2 text-3xl text-center font-bold">
                    Serverless TODO
                </h1>

                <Todo />
            </div>

            <div className="container md:max-w-6xl">
                <h1 className="mb-10 px-2 text-3xl text-center font-bold">
                    UseCallBack Hooks
                </h1>

                <UseCallBack />
            </div>
        </div>
    )
};

export default Home;