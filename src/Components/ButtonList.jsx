import React from 'react'
const people = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie O'Connor" },
    { id: 4, name: "David" },
    { id: 5, name: "Evelyn Smith" },
    // { id: 6, name: "Francis Xavier" },
    // { id: 7, name: "Grace Lee" },
    // { id: 8, name: "Hannah" },
    // { id: 9, name: "Isabella Marie" },
    // { id: 10, name: "Jonathan Doe" },
    // { id: 11, name: "Karen" },
    // { id: 12, name: "Liam O'Brien" },
    // { id: 13, name: "Michael Scott" },
    // { id: 14, name: "Natalie Portman" },
    // { id: 15, name: "Olivia Newton-John" },
    // { id: 16, name: "Patrick Stewart" },
    // { id: 17, name: "Quincy Jones" },
    // { id: 18, name: "Rebecca Black" },
    // { id: 19, name: "Samuel L. Jackson" },
    // { id: 20, name: "Tina Fey" },
    // { id: 21, name: "Ulysses Grant" },
    // { id: 22, name: "Victoria Beckham" },
    // { id: 23, name: "William Shakespeare" },
    // { id: 24, name: "Xavier Hernandez" },
    // { id: 25, name: "Yasmine Al-Masri" },
]

const ButtonList = () => {
    return (
        <div className='flex mt-20 py-2'>
            {people.map((item) =>
                <button className =" border rounded-lg  bg-slate-200 py-1 px-2 mx-2  text-normal" key ={item.id}>{item.name}</button>
            )}
        </div>
    )
}

export default ButtonList