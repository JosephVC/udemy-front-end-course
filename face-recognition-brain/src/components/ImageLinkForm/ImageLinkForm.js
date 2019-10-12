import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
    return (
        <div >
            <p classname='f3'>
                {'This Magic Brain will detect faces in  your pictures.'}
            </p>
            <div className='center'>
                <div className='form display flex pa4 br3 shadow-5'>
                  <input className='f4 pa2 2-70 center' type='tex' />
                  <button className='w-30 grow f4 link pg3 pv2 dib white bg-light-purple'>Detect</button>
                </ div> 
            </div>
        </div>
    );
}

export default ImageLinkForm;