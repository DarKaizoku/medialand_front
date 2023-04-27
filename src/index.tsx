import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { SupportProvider } from './contexts/supports.context'
import { CategorieProvider } from './contexts/categories.context'
import { AuteurProvider } from './contexts/auteurs.context'
import { MediaProvider } from './contexts/medias.context'
import { PageProvider } from './contexts/page.context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <SupportProvider>
            <CategorieProvider>
                <AuteurProvider>
                    <MediaProvider>
                        <PageProvider>
                            <App />
                        </PageProvider>
                    </MediaProvider>
                </AuteurProvider>
            </CategorieProvider>
        </SupportProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
