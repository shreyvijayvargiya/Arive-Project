import React, { useEffect, useState } from 'react';
import { getComments } from '../../Packages/api/getComments';
import QueriesComponent from './Queries';
import { AiFillCloseCircle } from 'react-icons/ai';

const Home = () => {

    const [comments, setComments] = useState({
        loader: true,
        data: null
    });
    const [ filterComments, setFilterComments] = useState(null);
    const [ query, setQuery ] = useState("");

    async function addData(){
        const allCommments = await getComments();
        setComments({ data: allCommments.data , loader: false });
    };


    function handleQueryChange(id, val, filter, query){
        setQuery({ id, val, filter, query });
        const filteredComments =  (comments.data).filter(item => {
            if((item[filter]).includes(val)){
                return item
            }
        });
        setFilterComments(filteredComments);
    };

    useEffect(async () => {
        addData();
    }, []);

    function clearQuery(){
        setQuery("");
        setFilterComments(null)
    }


    const RenderBody = () => {
        if(!filterComments && filterComments === 0){
            return (
                <>
                {(comments.data).map(item => {
                    const { name, id, email, body } = item;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{body}</td>
                        </tr>
                    )
                })}
                </>
            );
        }
        if(filterComments && filterComments.length > 0){
            return (
                <>
                {filterComments.map(item => {
                    const { name, id, email, body } = item;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{body}</td>
                        </tr>
                    )
                })}
                </>
            );
        }else {
            return (
                <>
                    {(comments.data).map(item => {
                        const { name, id, email, body } = item;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{body}</td>
                            </tr>
                        )
                    })}
                </>
            )
        }
    };




    return (
        <div>
            <div className="w-full mx-auto p-10 bg-gray-800">
                <div className="outline-none w-full p-4 bg-black text-white flex justify-between items-center" >
                   <p> {query ? query.query: "Add Query"}</p>
                   <button onClick={clearQuery}>
                    <AiFillCloseCircle className="text-white" size={24} />
                   </button>
                </div>
                <QueriesComponent setQuery={setQuery} handleQueryChange={handleQueryChange} query={query} />
            </div>
            <div className="h-100 overflow-scroll p-10">
                <table className="p-10 w-11/12 mx-auto h-100 overflow-scroll">
                    <tr>
                        <th className="text-left">Id</th>
                        <th className="text-left">Name</th>
                        <th className="text-left">Email</th>
                        <th className="text-left">Body</th>
                    </tr>
                    {comments.loader && !comments.data ? <p>Loading....</p> :
                        <tbody>
                            <RenderBody />
                        </tbody>
                    }
                </table>
            </div>
        </div>
    );
};
export default Home;

