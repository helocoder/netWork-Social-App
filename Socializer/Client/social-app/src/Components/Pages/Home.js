import Feed from "../Feed";
import Friendlist from "../Friendlist";
import Layout from "../Layout";

const Home = () =>{
    return (
        <Layout>
           <div className="grid md:grid-cols-2 gap-x-36">
            <Feed/>
            <Friendlist/>
           </div>
        </Layout>
    )
}

export default Home;