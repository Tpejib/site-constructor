import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from './classes/blocks'
import image from './assets/img.png'

export const model = [
    new TitleBlock('Hello World from JS!!!!!', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(#e66465, #9198e5)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem',
            'border-radius': '10px',
            margin: '1rem'
        }
    }),
    new ImageBlock(image, {
        styles: {
            display: 'flex',
            'justify-content': 'center',
            padding: '1.5rem'
        },
        imgStyles: {
            width: '500px',
            height: 'auto'
        }
    }),
    new ColumnsBlock([
        1111111111111111,
        222222222222222,
        33333333333333333333
    ],
    {
    styles: {
        background: 'linear-gradient(#9198e5, #e66465)',
        color: '#fff',
        'text-align': 'center',
        'font-weight': 'bold',
        padding: '1.3rem',
        'border-radius': '10px',
        margin: '1rem'
    }
    }),
    new TextBlock('here we go with some text', {
        tag: 'p',
        styles: {
            background: '#9198e5',
            color: '#fff',
            'text-align': 'center',
            'font-weight': 'bold',
            padding: '1.3rem',
            'border-radius': '10px',
            margin: '1rem'
        }
    })
]