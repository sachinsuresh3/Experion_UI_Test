import React from 'react'

export default function Modal({ open, onClose, children }) {
    if (!open) return null
    return (
        <>
            <div className='modal-overlay'></div>
            <div className='modal'>                
                <a href='#' onClick={onClose} className='close-btn'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#61636F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="#61636F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <div className='modal-content'>{children}</div>
            </div>
        </>
    )
}
