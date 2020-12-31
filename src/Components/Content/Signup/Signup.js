import React from 'react';
import Form from './Form/Form'

export default function Signup() {
    return (
        <div style={{
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            paddingTop: '50px',
        }}>
            <h1>Ready to take free Trial?</h1>
            <h3>Lorem ipsum dolor sit amepor incididunt ut labore</h3>
            <Form />
        </div>
    )
}
