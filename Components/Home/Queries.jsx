import React from 'react';

const QueriesComponent = ({  setQuery, query, handleQueryChange }) => {



    function addQuery(item){
        const { filter, query, value, id } = item;
        handleQueryChange(id, value, filter, query);
    };


    return (
        <div>
            <div className="flex justify-around items-center">
                {allQueries.map((item, index) => {
                    return (
                        <div 
                            key={item.id + index}
                            className={`rounded-sm m-3 p-4 text-sm text-gray-100 cursor-pointer w-auto 
                                ${query && query.id == item.id ? "border-2 border-yellow-200": "border border-gray-50 " }
                            `}
                            onClick={() => addQuery(item)}
                        >
                            {item.query}
                        </div>
                    )
                })}                
            </div>
        </div>
    );
};
export default QueriesComponent;



const allQueries = [
    {
        id: 1,
        query: `SELECT * FROM Comments WHERE name=eli`,
        value: "eli",
        filter: "name",
    },
    {
        id: 2,
        query: `SELECT * FROM Comments WHERE email=Nik`,
        value: "Nik",
        filter: "email",
    },
    {
        id: 3,
        query: `SELECT * FROM Comments WHERE name=alias`,
        value: "alias",
        filter: "name", 
    },
    {
        id: 4,
        query: `SELECT * FROM Comments WHERE body=laudantium enim quasi est quidem magnam`,
        value: "laudantium enim quasi est quidem magnam",
        filter: "body",
    },
]