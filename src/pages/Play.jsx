import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Play() {
    const {posts} = useLoaderData()
    const [isDesktop, setIsDesktop] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)
    const [difficulty, setDifficulty] = useState('none')
    const randomPost = Math.floor(Math.random() * posts.length)

    console.log(posts[randomPost].body)


    useEffect(() => {
        if (window.innerWidth <= 800) {
            return setIsDesktop(false)
        }
        return setIsDesktop(true)
    }, [isDesktop])


    return (
        <div>
            {difficulty === 'none' && <select defaultValue={difficulty} onChange={(e) => setDifficulty(e.target.value)} name="user-difficulty" id="user-difficulty">
                <option disabled value="none">Select a Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Meduim</option>
                <option value="hard">Hard</option>
            </select>}

            {difficulty != 'none' && !isPlaying && <button onClick={() => setIsPlaying(true)} className="play-btn">Play</button>}
            <p>{posts[randomPost].body}</p>
        </div>
    )
}

async function getData(){
    const res = await fetch('https://dummyjson.com/posts')
    const data = await res.json()
    return data

}

export {getData}