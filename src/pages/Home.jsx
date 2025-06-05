import { useState } from "react";
import Content from "../components/Content/Content";
import Courses from "../components/Courses/Courses";
import Search from "../components/Search/Search";

const Home = () => {

    const [searchString, setSearchString] = useState('');

    const onSearch = (searchString) => {
        setSearchString(searchString);
    }

    return (
        <>
            <Search onSearch={onSearch} placeholder="Search tutorials..." />
            <Content>
                <Courses search={searchString} />
            </Content>
        </>
    );
}

export default Home;