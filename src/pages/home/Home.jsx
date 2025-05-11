
import LetsConnect from '../..//components/letsConnect/LetsConnect';
import TopCategories from '../../components/topCategories/TopCategories'
import Why from '../../components/why/why';
import Blogs from '../../components/blogs/blogs';
import Banner from '../../components/banner/Banner';

const Home = () => {
    return (
        <>
            <Banner />
            <TopCategories />
            <Why />
            <Blogs />
            <LetsConnect />

        </>
    )
};

export default Home;
