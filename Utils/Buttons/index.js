import React from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import {
        ButtonBody }from '../../styles/Utils.module'

const Buttons = () => {
    return (
        <>
            <ButtonBody>
                    <button><GrFormPrevious size={18}/></button>

                <section>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </section>

                <button><GrFormNext size={18} /></button>

            </ButtonBody>
        </>
    )
}

export default Buttons