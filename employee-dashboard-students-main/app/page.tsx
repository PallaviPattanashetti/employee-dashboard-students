import { redirect } from "next/navigation";

const Home = () => {
    redirect('/login');
    return (
        <></>
    );
};

export default Home;