import React, {useState} from 'react'
import {useLocation} from 'wouter'
import './Home.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home(){
    const[keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const handleSubmit = (e) =>{
        
        e.preventDefault()
        pushLocation(`/gifs/${keyword}`)
    }

    const handleInput = (e) =>{
        setKeyword(e.target.value)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input  onChange={handleInput} type="text" value={keyword} placeholder='Buscar' />
                <button type='submit'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        
        </>
    )
}