import React, { useState } from 'react'

function MostraGif(){
    const [gif, adicionaGif] = useState()

    const tiraImg = () => {
        adicionaGif('')
    }

    const botaImg = () => {
        adicionaGif(<img onClick={tiraImg} src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif"
        />)
    }

    return (
        <div>
            {gif}
            <button onClick={botaImg}>Bota o GIF</button>
        </div>
    )
}

export default MostraGif