import { useEffect } from "react"
import { useState } from "react"


export default function CardContainer() {
    const [blogPosts, setBlogPosts] = useState([]);
    //1. As soon as component loads -fetch data
    useEffect(() => {
        fetch('http://localhost:8080')
            .then((res) => res.json())
            .then((data) => setBlogPosts(data))
            .catch((err) => console.error(err))
    }, [])
    //2. Put data array in state variable


    //3. Map data array in state variable
    //4. Then return jsx from the Map
    const handleFormSubmit = evt => {
        evt.preventDefault()
        const formData = {}
        formData.title = evt.target.title.value
        formData.content = evt.target.content.value

        fetch('http://localhost:8080', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(cleanData => console.log(cleanData))
            .catch(err => console.error(err))

    }
    return (
        <>
            <form action='' onSubmit={(e) => handleFormSubmit(e)}>
                <label htmlFor="">
                    <input type="text" name='title' id='' />
                </label>
                <label htmlFor="">
                    <input type="text" name='content' id='' />
                </label>
                <button type="submit">Add BlogPost</button>
            </form>

            <div className="cardContainer">
                {blogPosts.map((singlePost, index) => {
                    console.log('singlePost ->', singlePost)

                    return (
                        <div className='singleCard' key={singlePost._id}>
                            <img src={`https://source.unsplash.com/random/${index}`} alt="" srcSet="" />
                            <h2>{singlePost.title} {singlePost.content} </h2>

                        </div>
                    )

                })}

            </div>
        </>
    )

}